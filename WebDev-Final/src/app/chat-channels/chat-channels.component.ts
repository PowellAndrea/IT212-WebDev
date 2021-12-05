import { SvcChatService } from './../svcChat.service';
import { Component, OnInit } from '@angular/core';
import { Subscriber, Observable, Subject, EMPTY } from 'rxjs';

@Component({
  selector: 'app-chat-channels',
  templateUrl: './chat-channels.component.html',
  styleUrls: ['./chat-channels.component.scss']
})

export class ChatChannels implements OnInit {
  channelList!: String[];
  currentChannel!: String;

  y: any;
  constructor( private svcChat: SvcChatService) {
   }

  // Subscribes to svcChat.ChannelList$
  ngOnInit() {
    this.svcChat.ChannelList$.subscribe((data: String[]) => {
      this.channelList = data
    })
    this.svcChat.getChannels()
  }

  getMessages(i: number){
    this.y = this.channelList[i];
    this.currentChannel = this.channelList[i];
    this.svcChat.getAllMessages(this.y);
  }

}


