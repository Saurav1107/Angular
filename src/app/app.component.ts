import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form : NgForm;

  submitted = false;

  defaultSub = 'advanced';
  details = {
    email : '',
    password : '',
    Subscription : ''
  }

  onSubmit(){
    this.submitted =true;

    this.details.email = this.form.value.email;
    this.details.password = this.form.value.password;
    this.details.Subscription = this.form.value.subs;

    this.form.reset();
  }
}
