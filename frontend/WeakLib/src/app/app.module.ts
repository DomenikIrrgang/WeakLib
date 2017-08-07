import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageFooterComponent } from './pagefooter/pagefooter.component'
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { PageHeadingComponent } from './pageheading/pageheading.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NewsComponent } from "./news/news.component";
import { NotificationsBoxComponent } from "./notificationsbox/notificationsbox.component";
import { NotificationService } from "./services/notification.service";
import { WeakauraService } from "./services/weakaura.service";
import { NewsService } from "./services/news.service";
import { WeakauraViewComponent } from './weakauraview/weakauraview.component';
import { ClickablePanelComponent } from './clickablepanel/clickablepanel.component';
import { TitlebarComponent } from './weakauraview/titlebar/titlebar.component';
import { ProfilepictureComponent } from './profilepicture/profilepicture.component';
import { WeakauraBoxComponent } from './weakaurabox/weakaurabox.component';
import { RoutingModule } from './routing.module';
import { StringsComponent } from './weakauraview/strings/strings.component';
import { StringComponent } from "./weakauraview/string/string.component";
import { CommentsComponent } from "./weakauraview/comments/comments.component";
import { CommentService } from "./services/comment.service";
import { UserViewComponent } from "./userview/userview.component";
import { UserService } from "./services/user.service";

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
    ClickablePanelComponent,
    TitlebarComponent,
    ProfilepictureComponent,
    StringsComponent,
    StringComponent,
    CommentsComponent,
    UserViewComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
  ],
  providers: [
    WeakauraService,
    NewsService,
    NotificationService,
    CommentService,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
