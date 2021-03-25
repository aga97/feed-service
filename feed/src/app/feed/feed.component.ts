import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Subscription } from 'rxjs';
import { Feed } from './feed.interface';
import { FeedService } from './feed.service';
import { registerLocaleData } from '@angular/common';
import localeKo from '@angular/common/locales/ko';

registerLocaleData(localeKo, 'ko');

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public feeds: Feed[];
  private feedSub: Subscription;

  constructor(private feedService: FeedService) { 

  }
  @ViewChild(MatAccordion) accordion: MatAccordion;

  ngOnInit(): void {
    this.feedSub = this.feedService.feeds.subscribe(feeds => {
      this.feeds = feeds; 
    });
    this.feedService.getFeeds();
  }

  ngOnDestroy() {
    this.feedSub.unsubscribe();
  }

  trackByFeed(index: any, feed: any) {
    if(!feed) return null;
    return feed._id;
  }
}
