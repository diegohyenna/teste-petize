import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import {
  IProfileApi,
  IRepositoryApi,
} from '../interfaces/response-api.interface';
import { IRepository } from '../interfaces/repository.interface';

@Injectable({
  providedIn: 'root',
})
export class GitApiService {
  url = 'https://api.github.com/users/';

  constructor(private http: HttpClient) {}

  getUser(username: string): Observable<IProfileApi> {
    return this.http.get(this.url + username).pipe(
      map(
        (userDetails: any) => ({
          status: 'success',
          data: userDetails,
        }),
        (error: any) => ({
          status: 'error',
          error,
        })
      )
    );
  }

  getRepos(username: string): Observable<IRepositoryApi> {
    return this.http.get(this.url + username + '/repos').pipe(
      map(
        (reposDetails: any) => ({
          status: 'success',
          data: reposDetails.sort((a: IRepository, b: IRepository) => {
            if (a.stargazers_count >= b.stargazers_count) {
              return -1;
            } else {
              return 1;
            }
          }),
        }),
        (error: any) => ({
          status: 'error',
          error,
        })
      )
    );
  }
}
