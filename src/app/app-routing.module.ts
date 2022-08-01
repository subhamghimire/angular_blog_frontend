import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './common/about/about.component';
import { LandingComponent } from './common/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about-us', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
