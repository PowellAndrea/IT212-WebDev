import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModel, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ChatChannelComponent } from './chatChannel/chatChannel.component';
import { ChatMessageComponent } from './chatMessage/chatMessage.component';
import { NewMessageComponent } from './newMessage/newMessage.component';

@NgModule({
  declarations: [
    AppComponent,
      ChatChannelComponent,
      ChatMessageComponent,
      NewMessageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
