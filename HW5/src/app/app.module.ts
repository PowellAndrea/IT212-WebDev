import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule, NgForm } from '@angular/forms';

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
    ReactiveFormsModule,
//    NgForm
//    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
