import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IRepository } from 'src/app/interfaces/repository.interface';
import { AlertService } from 'src/app/services/alert.service';
import { GitApiService } from 'src/app/services/git-api.service';
import { IProfile } from '../../interfaces/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.sass'],
})
export class ProfileComponent implements OnInit {
  profile?: IProfile;
  repositories?: IRepository[];

  constructor(
    private activedRouter: ActivatedRoute,
    private gitApi: GitApiService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.activedRouter.params.subscribe((param: any) => {
      this.getProfileData(param.username);
      this.getRepositoryData(param.username);
    });
  }

  getProfileData(username: string) {
    this.gitApi.getUser(username).subscribe(
      (profileDetails) => {
        if (profileDetails.data) {
          this.profile = profileDetails.data;
        } else {
          this.router.navigateByUrl('/');
          this.alertService.setAlert({
            type: 'warning',
            message: 'Esse usuário não existe no github!',
          });
        }
      },
      () => {
        this.router.navigateByUrl('/');
        this.alertService.setAlert({
          type: 'danger',
          message: 'Erro na busca de dados do usuário!',
        });
      }
    );
  }

  getRepositoryData(username: string) {
    this.gitApi.getRepos(username).subscribe(
      (reposDetails) => {
        if (reposDetails.data && reposDetails.data?.length > 0) {
          this.repositories = reposDetails.data;
        } else {
          this.repositories = [];
        }
      },
      () => {
        this.router.navigateByUrl('/');
        this.alertService.setAlert({
          type: 'danger',
          message: 'Erro na busca de dados do usuário!',
        });
      }
    );
  }

  removeCaracter(word: string, caracter: string): string {
    if (word.indexOf(caracter) !== -1) {
      word = word.replace(caracter, ' ');
      return this.removeCaracter(word, caracter);
    }
    return word;
  }

  handleSearch(input: string) {
    if (!input) {
      this.alertService.setAlert({
        type: 'warning',
        message: 'O campo de pesquisa está vazio!',
      });
      return;
    }
    this.getProfileData(input);
    this.getRepositoryData(input);
  }
}
