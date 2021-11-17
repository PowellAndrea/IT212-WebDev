import { Observable } from 'rxjs';
import { ChatService } from './../chat.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-chatChannel',
  templateUrl: './chatChannel.component.html',
  styleUrls: ['./chatChannel.component.scss']
})

export class ChatChannelComponent implements OnInit {
  @Input()
    items:any
  @Output()
    onChannelSelected = new EventEmitter<any>();
    id:any

    ngOnInit() {
    }

  constructor(
   private route:ActivatedRoute,
   private router: Router,
   private chatSvc:ChatService) {
    this.chatSvc.getChannels().subscribe(data => this.items = data);
    }

    getMessages(id: string){
      console.log("sending to messages/ " + id)
      this.router.navigate(['messages/id'])
    }

} // end class
