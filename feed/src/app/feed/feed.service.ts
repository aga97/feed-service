
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Feed } from './feed.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private _feeds: Feed[];
  public feeds: BehaviorSubject<Feed[]>;

  constructor(private http: HttpClient) {
    this.feeds = new BehaviorSubject<Feed[]>(this._feeds);
  }

  private getFeedUrl = 'http://localhost:3000/post/feeds';

  public async getFeeds(): Promise<void> {
    await this.http.get(this.getFeedUrl)
      .toPromise()
      .then(response => {
        this._feeds = response as Feed[];
        this.feeds.next(this._feeds);
      })
      .catch(response => {
        alert('[오류 발생]\n' + response.error.msg);   
      });
  }

  
}