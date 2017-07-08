import { DataService } from '../data.service';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  imgLink: string;
  userFullName: string;
  repos: any[];
  @Output() onChanged = new EventEmitter<any>();

  constructor(private dataService: DataService) { }

  onUser(login: string): void {
    this.dataService.getUser(login).then(resp => {
      this.imgLink = resp.avatar_url;
      this.userFullName = resp.name;
      this.onChanged.emit(login);
    })
  }

  ngOnInit() {
  }

}
