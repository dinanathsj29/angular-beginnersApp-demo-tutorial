import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { DataService } from './services/data.service';
import { CountryService } from './services/country.service';
import { EmployeeComponent } from './components/employee/employee.component';
import { FriendComponent } from './components/friend/friend.component';
import { RelativeComponent } from './components/relative/relative.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmployeeComponent,
    FriendComponent,
    RelativeComponent,
    LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'friend', component: FriendComponent },
      { path: 'relative', component: RelativeComponent },
    ])
  ],
  providers: [DataService, CountryService],
  bootstrap: [AppComponent]
})

export class AppModule { }
