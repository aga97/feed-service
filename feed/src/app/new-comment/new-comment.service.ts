import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeedService } from '../feed/feed.service';

@Injectable({
  providedIn: 'root'
})
export class NewCommentService {

  private Url = 'http://localhost:3000/post/comment/edit?';

  constructor(private http: HttpClient, private feedService: FeedService) { }

  

  public async addComment(id: string, author: string, body: string): Promise<void> {

    const addCommentUrl = this.Url + 'feedId=' + id;

    const params = {
      'author':author,
      'body': body,
    }    
  
    await this.http.put(addCommentUrl, params)
    .toPromise()
    .then(response => {
      this.feedService.getFeeds();
    })
    .catch(response => {
      alert('[오류 발생]\n' + response.error.msg);   
    })
  }
}
