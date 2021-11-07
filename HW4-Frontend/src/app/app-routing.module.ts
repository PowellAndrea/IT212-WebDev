import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CloneComponent } from './clone/clone.component';
import { DetailPanelComponent } from './DetailPanel/DetailPanel.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageCloneComponent } from './page-clone/page-clone.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectPanelComponent } from './SelectPanel/SelectPanel.component';

const routes: Routes = [
  { path: 'home', component:LandingpageComponent},
  { path: 'item/:id/name/:name/info/:info', component:PageCloneComponent},
 // { path: 'item/:id', component: PageCloneComponent},
  { path: 'test', component:DetailPanelComponent},
  { path: '', component: LandingpageComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
