import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeedService } from '../feed/feed.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  id:string | null;

  constructor(private router: Router, private feedService: FeedService) { }

  ngOnInit(): void {
    if(sessionStorage.getItem('id') === null) {
      this.router.navigate(["/"]);   
    } else {
      this.id = sessionStorage.getItem('id');
    }
  }

  refresh() {
    this.feedService.getFeeds();
  }

}
