import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable, Output } from '@angular/core'
import { catchError, Observable, retry } from 'rxjs'
@Injectable({  providedIn: 'root' })

export class ChatService {
  // currentChannel = new Observable()
  // subclass observable.subject - can emit values

constructor( private http: HttpClient){}

getChannels(){    // Get all channel names - returns an array of strings
  console.log("svcChat.getChannels: ");
  return this.http.get("http://73.19.65.35:3500/api/channel");
}

// Get all messages by channelName - returns an array of chat messages
//  Need to fix this & pass in channel variable

getMessages(channel: string ){
  //channel = "apowell"
  console.log("svcChat.getMessages ", channel)
  return this.http.get("http://73.19.65.35:3500/api/channel/" + channel)
}

newMessage(body: any){   //Create a new message in channelName - returns a single message (the created message)
  body = {
    "username": "alice",
    "message": "testing newMessage",
    "id": "906975b8-c4f4-4ad8-a39f-ce5d50b87729",
    "created_on": 1634500879802,
    "updated_on": null
}
  console.log("svcChat.newMessages: " + body.toString())
  var message: any
  message =  this.http.post("http://73.19.65.35:3500/api/channel/apowell",body)
  console.log(message)
}

updateChannel(){
  // Update Channel by channelName - returns the updated data
  // note: this endpoint replaces the entire message history in a channel
}

}   // end class
