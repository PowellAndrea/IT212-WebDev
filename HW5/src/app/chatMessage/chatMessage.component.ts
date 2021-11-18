import { ChatService } from './../chat.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input()
    messages: any
    channels: any

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private chatSvc: ChatService)
    {
      console.log("chatMessage constructor")
      this.chatSvc.getMessages("toast").subscribe(data => this.messages = data)  // getChannels - returns array of strings
    }

// Needs to get notified when channel changes
// do something with the current channel

    ngOnInit() {
    }

     body = {
      "username": "andrea",
      "message": "say something",
      //"id": "gimme something random",
      //"created_on": new Date,
      //"updated_on": null
    }

    newMessage(){
      console.log("chatMessage.new: " + this.body)

    }



}
