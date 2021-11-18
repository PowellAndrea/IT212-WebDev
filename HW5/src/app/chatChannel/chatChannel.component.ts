import { Observable } from 'rxjs';
import { ChatService } from './../chat.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-chatChannel',
  templateUrl: './chatChannel.component.html',
  styleUrls: ['./chatChannel.component.scss']
})

export class ChatChannelComponent implements OnInit {

  @Input()
    items:any
  //  currentChannel:any
  //  messages: any

    ngOnInit() {
      this.chatSvc.getChannels().subscribe(data => this.items = data)
    }

  constructor(
   private route:ActivatedRoute,
   private router: Router,
   private chatSvc:ChatService) {

    // date => console.log
    }

} // end class
