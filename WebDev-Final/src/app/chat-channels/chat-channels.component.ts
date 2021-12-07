import { SvcChatService } from './../svcChat.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-chat-channels',
  templateUrl: './chat-channels.component.html',
  styleUrls: ['./chat-channels.component.scss']
})

export class ChatChannels implements OnInit {
  channelList!: string[];
  currentChannel!: string;

  //CurrentChannel$:Subject<string> = new Subject<string>();

  constructor( private svcChat: SvcChatService)
  {   }

  ngOnInit() {
    this.svcChat.ChannelList$.subscribe((data: string[]) => {
      this.channelList = data
    })
    this.svcChat.getChannels()
  }

  getMessages(i: number){
    this.currentChannel = this.channelList[i];
    this.svcChat.getAllMessages(this.currentChannel);
  }

}


