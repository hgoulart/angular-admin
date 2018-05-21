import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { UsersComponent } from './users-list/users.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'users', children: [
        {path: 'list', component: UsersComponent, children: [
            {path: 'detail/:id', component: UserComponent}
        ]}
    ] },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [ UsersComponent, UserComponent, LoginComponent ]


// <nav>
//     <a mat-button router-link="/users-list" routerLinkActive="active">Users List</a>
//     <a mat-button router-link="/user-detail" routerLinkActive="active">User Detail</a>
// </nav>