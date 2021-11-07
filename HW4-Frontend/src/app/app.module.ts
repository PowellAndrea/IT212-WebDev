import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailPanelComponent } from './DetailPanel/DetailPanel.component';
import { TopBarComponent } from './TopBar/TopBar.component';
import { CloneComponent } from './clone/clone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageCloneComponent } from './page-clone/page-clone.component';

@NgModule({
  declarations: [										
    AppComponent,
      DetailPanelComponent,
      TopBarComponent,
      CloneComponent,
      PageNotFoundComponent,
      LandingpageComponent,
      PageCloneComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
