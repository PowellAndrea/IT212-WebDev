import { EMPTY, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ChatService } from './../chat.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Component, Input, OnInit, Output, Type } from '@angular/core';

@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']})

export class ChatMessageComponent implements OnInit {

  @Input()
  messages: any;
  currentChannel: string = "";

  //@Output()
  //currentChannel!: string;

  body: any
  isloaded: boolean = false;
  isVisible: boolean = false;

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private chatSvc: ChatService) {
      this.chatSvc.getMessages(this.currentChannel).subscribe((data: any) => this.messages = data)
    }

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.chatSvc.getMessages(params["item"]).subscribe((data: any) => this.messages = data);
    this.isloaded = true;
    console.log("after: ",typeof params["item"])
    if ( typeof params["item"] == "undefined" ){ this.isVisible = false }else{this.isVisible = true};
  });
}
    newMessage(){

      var guid = this.guidGenerator()
      var created_on = Date()
      this.body = {
        "username": "andrea",
        "message": "say something profound",
        "created_on": 1634500879802,
        "updated_on": "",
        "id": guid
      }
      this.chatSvc.newMessage(this.currentChannel, this.body)
      console.log("chatMessage.new: " + this.body)
    }

      //  Thanks to our friends at stack overflow
      guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }


}
