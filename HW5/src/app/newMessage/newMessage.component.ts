import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, APP_ID } from '@angular/core';
import { FormControl, NgModel } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-newMessage',
  templateUrl: './newMessage.component.html',
  styleUrls: ['./newMessage.component.scss']
})

export class NewMessageComponent implements OnInit {
  usernameCtrl = new FormControl('');
  messageCtrl = new FormControl('');
  updateCtrl = new FormControl('');

  constructor(){}

  ngOnInit() {
  }

  onSubmit(){
    var body ={
      "username": this.usernameCtrl.value,
      "message" : this.messageCtrl.value,
      "id"      : this.guidGenerator(),
      "created_on": Date.now(),
      "updated_on": new Date()
    }
      // Need to bind the form fields in the template to username, message and update
      // hardcode channel for testing
     //var newBody=this.chatSvc.newMessage("apowell", body, this.updateCtrl.value )
  }

  guidGenerator() {
    //  Thanks to our friends at stack overflow
      var S4 = function() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }
}
