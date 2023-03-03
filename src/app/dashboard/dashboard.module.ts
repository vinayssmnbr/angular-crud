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



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    NewCompComponent,
    DashboardComponent,
    AboutComponent,

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    RouterModule,
  ],
  exports:[DashboardComponent]
})
export class DashboardModule { }
