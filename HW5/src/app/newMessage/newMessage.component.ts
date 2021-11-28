import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { empty } from 'rxjs';

@Component({
  selector: 'app-newMessage',
  templateUrl: './newMessage.component.html',
  styleUrls: ['./newMessage.component.scss']
})
export class NewMessageComponent implements OnInit {
  myForm!:   FormGroup;
  username!: FormControl;
  message!:  FormControl;
  body!:     object;

  constructor() {
    this.body = {
      "username" : "",
      "message" : "",
      "created_on": Date.now(),
      "updated_on": null,
      "id": this.guidGenerator(),
     }
  }

  ngOnInit() {
    this.username = new FormControl("usernameCtrl", this.username);
    this.message = new FormControl("messageCtrl", this.message);
  }

  onSubmit(){

    }

//var body = {


  guidGenerator() {
    //  Thanks to our friends at stack overflow
      var S4 = function() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

}
