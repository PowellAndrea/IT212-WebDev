import { HttpParams } from '@angular/common/http';
// I have HttpClient added to the app module, do I still need it here?
import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Make Observable - when currentChannel changes, update chatMessage component



export class ChatService {
  //static api: string = "http://73.19.65.35:3500/api/channel/";
  //static channel: string = "apowell";
  // channels: string[]=[""]
  //messages: any[]=[""]
  currentChannel: string = ""




constructor( private http: HttpClient){
}

getChannels(){    // Get all channel names - returns an array of strings
  console.log("svcChat.getChannels: ");
  return this.http.get("http://73.19.65.35:3500/api/channel");
}

//  Need to fix this & pass in channel variable
getMessages(channel: string ){    // Get all messages by channelName - returns an array of chat messages
  this.currentChannel = channel;
  console.log("svcChat.getMessages " + channel)
  return this.http.get("http://73.19.65.35:3500/api/channel/" + channel)
}

newMessage(body:any){   //Create a new message in channelName - returns a single message (the created message)
  console.log("svcChat.newMessages: ")
  return this.http.post("http://73.19.65.35:3500/api/channel/:apowell",body);

}

updateChannel(){
  // Update Channel by channelName - returns the updated data
  // note: this endpoint replaces the entire message history in a channel
}

}   // end class
