import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PageFooterComponent} from './pagefooter/pagefooter.component'
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { PageHeadingComponent } from './pageheading/pageheading.component';
import {WeakauraBoxComponent} from './weakaurabox/weakaurabox.component';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    DashboardComponent,
    ContactComponent,
    PageHeadingComponent,
    PageFooterComponent,
    WeakauraBoxComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
