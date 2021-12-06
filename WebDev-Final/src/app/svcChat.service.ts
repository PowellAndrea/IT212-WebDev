import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatChannels } from './chat-channels/chat-channels.component';
import { ChatMessages } from './chat-messages/chat-messages.component';

export interface chatMessage {
  username: string,
  message:  string,
  id:       string,
  created_on: Date,
  updated_on: Date | undefined
}

@Injectable({
  providedIn: 'root'
})
export class SvcChatService {

  // notifiers
  AllMessages$:   Subject<any> = new Subject<any>();
  ChannelList$:   Subject<any> = new Subject<any>();
  CurrentChannel$:Subject<string> = new Subject<string>();

  currentChannel!: string;
  posted: boolean = false;

  constructor( private http: HttpClient){ }

  getChannels() {
  // Returns a string array with all channel names
    this.http.get("http://73.19.65.35:3500/api/channel/").subscribe(data =>
      this.ChannelList$.next(data))
  }

  getAllMessages(strChannel: string){
    this.http.get("http://73.19.65.35:3500/api/channel/" + strChannel).subscribe(data =>
      this.AllMessages$.next(data))

    this.currentChannel = strChannel;
  }

  newMessage(body: chatMessage, isNew: boolean){
    if (!isNew){
      this.http.post("http://73.19.65.35:3500/api/channel/" + this.currentChannel, body).subscribe(data =>
      this.getAllMessages(this.currentChannel))
      };

    this.http.patch("http://73.19.65.35:3500/api/channel/" + this.currentChannel, body).subscribe(data =>
    this.getAllMessages(this.currentChannel)
    )
    console.log(body)

  }
}
