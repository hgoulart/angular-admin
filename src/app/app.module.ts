import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule, routingComponents } from './app-routing.module'; 
// import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users-list/users.component';
import { UserComponent } from './user/user.component';

// const routes: Routes = [
//   { path: 'users-list', component: UsersComponent },
//   { path: 'user-detail', component: UserComponent },
//   { path: 'login', component: LoginComponent },
//   { path: '', redirectTo: 'login', pathMatch: 'full' }
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    routingComponents
    // UsersComponent,
    // UserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    // RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
