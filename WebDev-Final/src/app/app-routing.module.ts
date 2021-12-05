import { ChatChannels } from './chat-channels/chat-channels.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatMessages } from './chat-messages/chat-messages.component';

const routes: Routes = [
  { path: 'channel/:id', component:ChatMessages },
  { path: '', component: ChatChannels}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
