import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NewCompComponent } from './new-comp/new-comp.component';
import { Routes,RouterModule  } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AboutComponent } from './about/about.component';
import { DashService } from './dash.service';
import { ContactComponent } from './contact/contact.component';
import { TeacherdetailsComponent } from './teacherdetails/teacherdetails.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormControl,FormGroup } from '@angular/forms';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NewCompComponent,
    DashboardComponent,
    AboutComponent,
    ContactComponent,
    TeacherdetailsComponent,
    StudentdetailsComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    // FormControl,
    // FormGroup,

  ],
  providers:[DashService],
  exports:[DashboardComponent]
})
export class DashboardModule { }
