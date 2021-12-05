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
  CurrentChannel$:Subject<String> = new Subject<String>();

  constructor( private http: HttpClient){ }

  getChannels() {
  // Returns a string array with all channel names
    this.http.get("http://73.19.65.35:3500/api/channel/").subscribe(data =>
    this.ChannelList$.next(data))
  }

  getAllMessages(currentChannel: string){
    this.http.get("http://73.19.65.35:3500/api/channel/" + currentChannel).subscribe(data =>
    this.AllMessages$.next(data))
  }

  newMessage(currentChannel: string, body: object, update:boolean){
    //Create a new message in channelName - returns a single message (the created message)
    // I am hard-coding the currentChannel so I don't clobber something else
    currentChannel = "apowell";
      if (update == false){
        return(this.http.post("http://73.19.65.35:3500/api/channel/" + currentChannel, body))
      } else {
        return (this.http.patch("http://73.19.65.35:3500/api/channel/" + currentChannel, body))
      }
    }

}
