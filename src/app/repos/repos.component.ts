import { DataService } from '../data.service';
import { Repository } from '../Repository';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  private _login: string;
  @Input() set login(l: string) {
    this._login = l;
    this.onRepos(l);
  }
  get login(): string {
    return this._login;
  }

  repos: any[];
  constructor(private dataService: DataService) { };

  onRepos(login: string): void {
    if (login) {
      this.dataService.getRepos(login)
        .then(resp => {
          this.repos = resp;
        });
    } else {
      this.repos = [];
    }
  }
  onOpen(repoName: string) {
    console.log(this.login);
    this.dataService.getReadmeUrl(this.login, repoName).then(resp => resp);
  }
  ngOnInit() {
  }

}
