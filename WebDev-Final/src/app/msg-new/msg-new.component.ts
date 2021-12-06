
import { SvcChatService, chatMessage } from './../svcChat.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-msg-new',
  templateUrl: './msg-new.component.html',
  styleUrls: ['./msg-new.component.scss']
})

export class MsgNew implements OnInit {

  //@Input() body: chatMessage = {
  body: chatMessage = {
    username: "",
    message: "",
    id: "",
    created_on: new Date(),
    updated_on: undefined
  };

  myForm: FormGroup = this.fb.group({
    username: [this.body.username, Validators.required],
    message:  [this.body.message, Validators.required],
  })



  ngOnInit() { }

  constructor(
    private fb: FormBuilder,
    private svrChat: SvcChatService,)
    {      }

  btnClicked(): void {
    // this.svrChat.getCurrentChannel();
    let body: chatMessage = {
      username: this.myForm.value.username,
      message:  this.myForm.value.message,
      id: "",
      created_on: new Date(),
      updated_on: new Date(),
    }
    this.svrChat.newMessage(body, true);

    this.clearForm()
  }

  clearForm(): void{
    this.myForm.setValue({
      username: "done",
      message:  this.body.message,
    })
  }
}
