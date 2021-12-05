import { ChatChannels } from './../chat-channels/chat-channels.component';
import { SvcChatService, chatMessage } from './../svcChat.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})

export class ChatMessages implements OnInit {
  messageList: chatMessage[] = [];
  currentChannel!: String;

  constructor(
    private svcChat: SvcChatService,)
    {
    }

  ngOnInit() {
    this.svcChat.AllMessages$.subscribe( data => {
      this.messageList = data;
    })
  }
}
