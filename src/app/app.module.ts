import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AlertComponent } from './alert/alert.component';
import { ListComponent } from './list/list.component';
import { ControlsComponent } from './controls/controls.component';
import { HomeComponent } from './home/home.component';
import { EditionComponent } from './edition/edition.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FormsModule } from '@angular/forms';
import { ConnectionComponent } from './connection/connection.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlertComponent,
    ListComponent,
    ControlsComponent,
    HomeComponent,
    EditionComponent,
    NavigationComponent,
    ConnectionComponent,
    LoginFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
