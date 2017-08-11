import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { WeakauraViewComponent } from './weakauraview/weakauraview.component';
import { UserViewComponent} from "./userview/userview.component";
import { SearchViewComponent } from "./searchview/searchview.component";
import { RegisterViewComponent } from "./registerview/registerview.component";

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'weakaura/:hash', component: WeakauraViewComponent },
    { path: 'user/:username', component: UserViewComponent },
    { path: 'search', component: SearchViewComponent },
    { path: 'register', component: RegisterViewComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class RoutingModule {

}