import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  template:''
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    sessionStorage.removeItem('id');
    window.location.href = '/';
  }
}
