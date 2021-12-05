import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MsgNew } from './msg-new/msg-new.component';
import { ChatMessages } from './chat-messages/chat-messages.component';
import { ChatChannels } from './chat-channels/chat-channels.component';
import { SvcChatService } from './svcChat.service';

@NgModule({
  declarations: [
    AppComponent,
      MsgNew,
      ChatMessages,
      ChatChannels,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
