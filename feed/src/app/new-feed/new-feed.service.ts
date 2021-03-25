import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FeedService } from '../feed/feed.service';

@Injectable({
  providedIn: 'root'
})
export class NewFeedService {

  constructor(private http: HttpClient, private feedService: FeedService) { }

  private addFeedUrl = 'http://localhost:3000/post/feed';

  public async addFeed(title: string, author: string, body: string): Promise<void> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const params = {
      'title': title,
      'author':author,
      'body': body,
    }    
    
    await this.http.post(this.addFeedUrl, params)
    .toPromise()
    .then(response => {
      this.feedService.getFeeds();
    })
    .catch(response => {
      alert('[오류 발생]\n' + response.error.msg);   
    })
  }
}
