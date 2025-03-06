import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PreislistComponent } from './pages/preislist/preislist.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'preislist', component: PreislistComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
  })
export class AppRoutingModule { }
