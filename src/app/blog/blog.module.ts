import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { BlogRoutingModule } from './blog-routing.module';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { SidebarComponent } from '../layouts/sidebar/sidebar.component';
import { NavbarComponent } from '../layouts/navbar/navbar.component';
import { FooterComponent } from '../layouts/footer/footer.component';
@NgModule({
  declarations: [
    BlogComponent,
    DetailComponent,
    EditComponent,
    AddComponent,
    ListComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [CommonModule, BlogRoutingModule, FormsModule],
})
export class BlogModule {}
