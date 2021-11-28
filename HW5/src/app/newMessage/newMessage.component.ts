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

  constructor(private chatSvc: ChatService,){}

  ngOnInit() {
  }

  onSubmit(){
    var body ={
      "username": this.usernameCtrl.value,
      "message" : this.messageCtrl.value,
    //  "id"      : this.guidGenerator(),
    //  "created_on": 1638053205633,
    //  "updated_on": null
    }

    //var body = {
    //  "username": "Mary Poppins",
    //  "message": "Poppins Lives",
    //  "id": "6de41701-25c3-4139-bf47-3f7e475a7312",
    //  "created_on": 1638053591221,
    //  "updated_on": null
    //}
      // hardcode channel for testing
     this.chatSvc.newMessage("apowell", body, this.updateCtrl.value )
  }

  guidGenerator() {
    //  Thanks to our friends at stack overflow
      var S4 = function() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }
}
