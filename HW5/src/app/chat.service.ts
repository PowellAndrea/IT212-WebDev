import { HttpParams } from '@angular/common/http';
// I have HttpClient added to the app module, do I still need it here?
import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ChatService {
  static api: string = "http://73.19.65.35:3500/api/channel/";
  static channel: string = "apowell";

  channels: string[]=[""]
  messages: string[]=[""]
  query: string=""

constructor( private http: HttpClient){
}

getChannels(){    // Get all channel names - returns an array of strings
  console.log("getChannels: ");
  // returns an observable with the response object
  // observables may emit data more than once (allows subscription)
  // does not make the request until there is a subscription
  return this.http.get("http://73.19.65.35:3500/api/channel/");

}

//  Need to fix this & pass in variables
getMessages(channel: string ){    // Get all messages by channelName - returns an array of chat messages
  this.query = "http://73.19.65.35:3500/api/channel/" + channel
  console.log("getMessages from service: " + this.query)
  return this.http.get(this.query)
}

newMessage(){   //Create a new message in channelName - returns a single message (the created message)
  return this.http.post("http://73.19.65.35:3500/api/channel/:apowell",{"username": "string", "message": "string"});

}

updateChannel(){
  // Update Channel by channelName - returns the updated data
  // note: this endpoint replaces the entire message history in a channel
}

}   // end class
