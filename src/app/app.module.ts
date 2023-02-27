import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { SecondlocalComponent } from './secondlocal/secondlocal.component';
import { ServiceService } from './service.service';

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    SecondlocalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
