import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { NewFeedService } from './new-feed.service';

@Component({
  selector: 'app-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.css']
})
export class NewFeedComponent implements OnInit {

  feedForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder,
     private newFeedService: NewFeedService
     ) { 
    this.feedForm = this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('',[Validators.required])
    });
  }
  
  ngOnInit(): void {
  }

  get f() { return this.feedForm.controls;}

  submit(formDirective: FormGroupDirective) {
    const author = sessionStorage.getItem('id');
    if(author !== null) {
      this.newFeedService.addFeed(this.feedForm.value.title, author, this.feedForm.value.body)
      formDirective.resetForm();
      //this.feedForm.reset();
    } else {
      alert('로그인 상태가 아닙니다.');   
    }
  }
}
