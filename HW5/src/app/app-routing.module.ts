import { ChatMessageComponent } from './chatMessage/chatMessage.component';
import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatChannelComponent } from './chatChannel/chatChannel.component';

const routes: Routes = [
  { path: 'messages/:id', component:ChatMessageComponent},
  //{ path: 'channel/:id', component:ChatMessageComponent},
  { path: 'home', component:AppComponent},
  { path: '', component:AppComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }