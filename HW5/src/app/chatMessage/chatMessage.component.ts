import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { ChatService } from './../chat.service';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { Component, Input, OnInit, Output } from '@angular/core';

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

  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private chatSvc: ChatService) {
      this.chatSvc.getMessages(this.currentChannel).subscribe((data: any) => this.messages = data)
    }

// Needs to get notified when channel changes
// read router/param/ do something with the current channel

    ngOnInit() {
      this.route.params.subscribe(params => {
        console.log(params);
      //})
      //this.route.params.subscribe((item: any) => {
      //  console.log(" in chatMessage onInit", item);
      //  this.currentChannel = item;
      //  this.isloaded = true;

       //call function here for data change
    });
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
