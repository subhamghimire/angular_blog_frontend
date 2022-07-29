import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
import { AddComponent } from './components/add/add.component';

const routes: Routes = [
  { path: 'blogs', component: BlogComponent },
  { path: 'blogs/add', component: AddComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}
