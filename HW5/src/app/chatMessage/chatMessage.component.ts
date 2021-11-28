import { EMPTY, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

import { ChatService } from './../chat.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Component, Input, OnInit, Output, Type } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NewMessageComponent } from '../newMessage/newMessage.component';
// ReactiveFormsModule in app.module


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
      //this.isNew = false;

      if ( typeof params["item"] == "undefined" ){ this.isVisible = false }else{this.isVisible = true};
    });
  }

  newMessage(){
    // used to hide and show form
    this.isNew = true;
  }
}
