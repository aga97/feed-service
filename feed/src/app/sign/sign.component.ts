import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private router: Router) {  
    this.signInForm = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.maxLength(20)])
    });
  }

  get id() {
    return this.signInForm.get('id');
  }

  submit() {    
    sessionStorage.setItem('id', this.signInForm.value.id); 
    this.router.navigate(["/main"]);    
  }

  ngOnInit(): void {
    if(sessionStorage.getItem('id') != null) {
      this.router.navigate(["/main"]);   
    }
  }

}
