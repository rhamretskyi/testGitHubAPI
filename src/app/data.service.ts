import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';


@Injectable()
export class DataService {

  constructor(private http: Http) { };

  getUser(login: string) {
    const url = `https://api.github.com/users/${login}`;

    return this.get(url).catch(error => {
      if (error.status === 404) {
        alert(`Пользователь ${login} не найден`);
      }
    });
  }
  getRepos(login: string) {
    const url = `https://api.github.com/users/${login}/repos`;

    return this.get(url);
  }
  getReadmeUrl(login: string, repoName: string) {
    const url = `https://api.github.com/repos/${login}/${repoName}/readme`;

    return this.get(url).then(resp => {
      window.open(resp.html_url)
    }).catch(error => {
      if (error.status === 404) {
        alert(`Файл README не найден`);
      }
    });
  }

  get(url: string) {
    return this.http.get(url)
      .toPromise()
      .then(response => response.json()).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred');
    if (error.status !== 404) {
      alert(error.json().message);
    }

    return Promise.reject(error.message || error);
  }
}
