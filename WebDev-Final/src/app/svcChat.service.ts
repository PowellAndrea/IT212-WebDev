import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatChannels } from './chat-channels/chat-channels.component';
import { ChatMessages } from './chat-messages/chat-messages.component';

export interface chatMessage {
  username: string,
  message:  string,
  id:       string | undefined,
  created_on: Date | undefined,
  updated_on: Date | undefined
}

@Injectable({
  providedIn: 'root'
})
export class SvcChatService {

  // notifiers
  AllMessages$:   Subject<any> = new Subject<any>();
  ChannelList$:   Subject<any> = new Subject<any>();

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

  newMessage(currentChannel: string, body: object, update?:boolean){
    //Create a new message in channelName - returns a single message (the created message)
    // hardcode for safety
    currentChannel="apowell"
      if (update == true){
        return(this.http.patch("http://73.19.65.35:3500/api/channel/" + currentChannel, body))
      } else {
        return (this.http.post("http://73.19.65.35:3500/api/channel/" + currentChannel, body))
      }
    }

}
