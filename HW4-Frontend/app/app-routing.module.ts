import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CloneComponent } from './clone/clone.component';
import { DetailPanelComponent } from './DetailPanel/DetailPanel.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SelectPanelComponent } from './SelectPanel/SelectPanel.component';

const routes: Routes = [
  { path: 'clones', component: CloneComponent},
  { path: 'home', component:LandingpageComponent},
  { path: 'item/:id', component: DetailPanelComponent},
  { path: 'item', component:DetailPanelComponent},
  { path: 'test', component:SelectPanelComponent},  
  { path: '', component: AppComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
