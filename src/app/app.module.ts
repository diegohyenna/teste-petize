import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/alert/alert.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import {
  Search,
  MapPin,
  Mail,
  Heart,
  Twitter,
  Link,
  Users,
  Award,
  Star,
} from 'angular-feather/icons';
import { InputComponent } from './components/input/input.component';

const icons = {
  Search,
  MapPin,
  Mail,
  Heart,
  Twitter,
  Link,
  Users,
  Award,
  Star,
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NotFoundComponent,
    MenuComponent,
    InputComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FeatherModule.pick(icons),
    NgbAlertModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
