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
    messages:any
    id:any


  constructor(
    private route:ActivatedRoute,
    private router: Router,
    private chatSvc: ChatService) {
      //this.chatSvc.getMessages(this.currentChannel).subscribe(data => this.messages = data)

     }

    currentChannel = "toast"

     body = {
      "username": "andrea",
      "message": "",
      "id": "gimme something random",
      "created_on": Date,
      "updated_on": null
    }




    ngOnInit() {
    }

    newMessage(body: any){
    //return this.http.post("http://73.19.65.35:3500/api/channel/:apowell",{"username": "string", "message": "string"});
    }





}
