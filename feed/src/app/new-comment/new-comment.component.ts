import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { NewCommentService } from './new-comment.service';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.css']
})
export class NewCommentComponent implements OnInit {

  feedForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private newCommentService: NewCommentService) {
      this.feedForm = this.formBuilder.group({
        body: new FormControl('', [Validators.required])
      });
   }

  ngOnInit(): void {
  }

  @Input()
  id: string;

  get f() { return this.feedForm.controls;}

  submit(formDirective: FormGroupDirective) {
    const author = sessionStorage.getItem('id');
    if(author !== null) {
      this.newCommentService.addComment(this.id, author, this.feedForm.value.body)
      formDirective.resetForm();
      //this.feedForm.reset();
    } else {
      alert('로그인 상태가 아닙니다.');   
    }
  }
}
