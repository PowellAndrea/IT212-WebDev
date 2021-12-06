
import { ChatChannels } from './../chat-channels/chat-channels.component';
import { SvcChatService, chatMessage } from './../svcChat.service';
import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-msg-new',
  templateUrl: './msg-new.component.html',
  styleUrls: ['./msg-new.component.scss']
})

export class MsgNew implements OnInit {
  ctrlForm!: FormGroup;
  ctrlUsername!: FormControl;
  ctrlMessage!:  FormControl;

  body!:  chatMessage;
  channel!: string;

  constructor(
    private svrChat: SvcChatService,)
    {

    }

  ngOnInit() {
    this.ctrlForm = new FormGroup({
      ctrlUsername: new FormControl('',Validators.required),
      ctrlMessage:  new FormControl('',Validators.required),
    }, Validators.required)
  }

  btnClicked(){
    console.log(this.ctrlForm.valid);

    if (this.ctrlForm.valid){
      this.body.username=this.ctrlUsername.value;
      this.body.message = this.ctrlMessage.value;
      this.channel = this.svrChat.getCurrentChannel();

      this.svrChat.newMessage(this.channel, this.body, false);
  }

  }
}
