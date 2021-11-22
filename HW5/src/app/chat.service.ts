import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable, Output } from '@angular/core'
import { catchError, Observable, retry } from 'rxjs'
@Injectable({  providedIn: 'root' })

export class ChatService {

constructor( private http: HttpClient){

}

getChannels(){    // Get all channel names - returns an array of strings
  console.log("svcChat.getChannels: ");
  return this.http.get("http://73.19.65.35:3500/api/channel");
}

getMessages(currentChannel: string){
  console.log("svcChat.getMessages ", currentChannel)
  return this.http.get("http://73.19.65.35:3500/api/channel/" + currentChannel)
}

newMessage(currentChannel: string, body: object){
//Create a new message in channelName - returns a single message (the created message)
  return(this.http.post("http://73.19.65.35:3500/api/channel/apowell",body))
}


updateChannel(currentChannel: string){
  // hardcode for safe testing
  //currentChannel = "apowell";
  //this.http.patch("http://73.19.65.35:3500/api/channel/apowell");
  //this.deleteChannel(currentChannel);
  //this.newMessage(currentChannel);
  // Update Channel by channelName - returns the updated data
  // note: this endpoint replaces the entire message history in a channel

  //
}

deleteChannel(currentChannel: string){
//  Hard coded with 'apowell' so I didn't inadvertantly delete anything else
//  Delete Channel by channelName - returns a success message (note: this deletes everything in a channel)

  currentChannel = "apowell";

  return("I am a winner")
}

}   // end class
