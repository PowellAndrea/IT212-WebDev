import { EMPTY, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';


import { ChatService } from './../chat.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Component, Input, OnInit, Output, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']
})

export class ChatMessageComponent implements OnInit {
  @Input()
  messages: any;
  currentChannel: string = "";

  isloaded: boolean = false;
  isVisible: boolean = false;
  isNew: boolean = true;
  update: boolean = false;
  body!: any;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private chatSvc: ChatService,)
    {
      this.chatSvc.getMessages(this.currentChannel).subscribe((data: any) => this.messages = data);
    }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.chatSvc.getMessages(params["item"]).subscribe((data: any) => this.messages = data);
      this.isloaded = true;
      this.isNew = false;
      if ( typeof params["item"] == "undefined" ){ this.isVisible = false }else{this.isVisible = true};
    });
  }

  newMessage(){
    this.isNew = true;
  }


  onSubmit() {

  //  this.body = {
  //    "username": this.myForm.control.name,
  //    "message": this.myForm.control,
  //    "id": this.guidGenerator(),
  //    "created_on": Date.now(),
  //    "updated_on": new Date()
  // }

    // Need to bind the form fields in the template to username, message and update
    // hardcode channel for testing
    this.chatSvc.newMessage("apowell", this.body, this.update )
    this.isNew=false;

  }


  guidGenerator() {
    //  Thanks to our friends at stack overflow
      var S4 = function() {
          return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
      };
      return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

}
