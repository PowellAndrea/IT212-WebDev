import { ChatService } from './../chat.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chatMessage',
  templateUrl: './chatMessage.component.html',
  styleUrls: ['./chatMessage.component.scss']})

export class ChatMessageComponent implements OnInit {

  @Input()

  messages: any
  channels: any
  currentChannel: any
  body: any

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private chatSvc: ChatService)
    {
      // get params

// Needs to get notified when channel changes
// do something with the current channel
      //this.chatSvc.getChannels().subscribe(data=> this.currentChannel=data)
      this.route.params.subscribe(data => {
        this.currentChannel = data['id'];
        console.log("ChatMessage.construtor", data['id']);
        this.loadChannel();
      })
    }

    loadChannel(){
      this.chatSvc.getMessages(this.currentChannel).subscribe(data => this.messages = data)  // getChannels - returns array of strings

    }

    ngOnInit() {
      console.log(this.route.snapshot.paramMap.get('id'))
    }

    newMessage(){
      // body is currently hard-coded in service
      var guid = this.guidGenerator()
      var created_on = Date()
      this.body = {
        "username": "andrea",
        "message": "say something profound",
        "created_on": 1634500879802,
        "updated_on": "",
        "id": guid
      }
      this.chatSvc.newMessage(this.body)
      // need to add channel selector - currently hard coded in service
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
