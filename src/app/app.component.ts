import { NgForOf } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: false }) form: NgForm;
  subscriptionOptions = ["Basic", "Advanced", "Pro"];
  submitted = false;
  data = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    this.data.email = this.form.value.email;
    this.data.subscription = this.form.value.subscription;
    this.data.password = this.form.value.password;

    this.form.reset();
  }
}
