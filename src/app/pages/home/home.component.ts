import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IAlert } from 'src/app/interfaces/alert.interface';
import { AlertService } from 'src/app/services/alert.service';
import { GitApiService } from 'src/app/services/git-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  search!: string;
  alert: IAlert = { type: '', message: '' };

  constructor(
    private gitApi: GitApiService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

  handleSearch(search: string) {
    if (!search) {
      this.alertService.setAlert({
        type: 'warning',
        message: 'O campo de busca está em branco!',
      });
    } else {
      this.gitApi.getUser(search).subscribe(
        (userDetails: any) => {
          if (userDetails == undefined) {
            this.alertService.setAlert({
              type: 'danger',
              message: 'Não existem usuários com esse nome!',
            });
            return;
          }
          this.router.navigate([`/profile/${userDetails.data.login}`]);
        },
        (error) => {
          this.alertService.setAlert({
            type: 'danger',
            message: error?.error?.message
              ? error.error.message
              : 'Não existem usuários com esse nome!',
          });
        }
      );
    }
  }

  handleSubmit(input: string) {
    this.handleSearch(input);
  }

  setSearch(input: string) {
    this.search = input;
  }
}
