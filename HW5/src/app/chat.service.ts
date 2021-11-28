import { HttpClient } from '@angular/common/http';
import { APP_ID, Injectable, Output } from '@angular/core'
import { catchError, Observable, retry } from 'rxjs'
@Injectable({  providedIn: 'root' })

export class ChatService {

constructor( private http: HttpClient){ }

getChannels(){    // Get all channel names - returns an array of strings
  console.log("svcChat.getChannels: ");
  return this.http.get("http://73.19.65.35:3500/api/channel");
}

getMessages(currentChannel: string){
  console.log("svcChat.getMessages ", currentChannel)
  return this.http.get("http://73.19.65.35:3500/api/channel/" + currentChannel)
}

newMessage(currentChannel: string, body: object, update:boolean){
//Create a new message in channelName - returns a single message (the created message)
// I am hard-coding the currentChannel so I don't clobber something else
  if (update == false){
    return(this.http.post("http://73.19.65.35:3500/api/channel/apowell",body))
  } else {
    return (this.http.patch("http://73.19.65.35:3500/api/channel/apowell", body))
  }
}

}   // end class
