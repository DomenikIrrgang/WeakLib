import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PageFooterComponent} from './pagefooter/pagefooter.component'
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { PageHeadingComponent } from './pageheading/pageheading.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent} from "./news/news.component";
import { NotificationsBoxComponent } from "./notificationsbox/notificationsbox.component";
import { NotificationService} from "./services/notification.service";
import { WeakauraService } from "./services/weakaura.service";
import { NewsService } from "./services/news.service";
import { WeakauraViewComponent } from './weakauraview/weakauraview.component';
import {TitlebarComponent} from './weakauraview/titlebar/titlebar.component';
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
    NavigationComponent,
    WeakauraBoxComponent,
    NewsComponent,
    NotificationsBoxComponent,
    WeakauraViewComponent,
    TitlebarComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [
    WeakauraService,
    NewsService,
    NotificationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
