import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { BlogRoutingModule } from './blog-routing.module';

@NgModule({
  declarations: [BlogComponent, DetailComponent, EditComponent, AddComponent],
  imports: [CommonModule, BlogRoutingModule],
})
export class BlogModule {}
