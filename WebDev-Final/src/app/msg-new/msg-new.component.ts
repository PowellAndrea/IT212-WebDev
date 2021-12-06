import { Subject } from 'rxjs';
import { ChatChannels } from './../chat-channels/chat-channels.component';
import { SvcChatService } from './../svcChat.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-msg-new',
  templateUrl: './msg-new.component.html',
  styleUrls: ['./msg-new.component.scss']
})

export class MsgNew implements OnInit {
  ctrlForm!:     FormGroup;
  ctrlUsername!: FormControl;
  ctrlMessage!:  FormControl;

  constructor(
    private svrChat: SvcChatService,)
    {
      this.ctrlForm = new FormGroup({
        ctrlUsername: new FormControl(' ', [Validators.required]),
        ctrlMessage:  new FormControl(' ', [Validators.required]),
      });
    }

  ngOnInit() {
    }

  btnClicked(){
    var body = ({
      "username": this.ctrlUsername.value,
      "message":  this.ctrlMessage.value
    });

    //this.svrChat.newMessage(this.currentChannel, body, false);

  }
}
