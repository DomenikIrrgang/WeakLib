import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PageFooterComponent} from './pagefooter/pagefooter.component'
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';

import { RoutingModule } from './routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    DashboardComponent,
    ContactComponent,
    PageFooterComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
