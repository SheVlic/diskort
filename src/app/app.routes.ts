import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent,
        pathMatch: "full"
    },
    {
        path: "register",
        component: RegisterComponent
    },
    {
        path: "user-profile",
        component: UserProfileComponent
    }
        
];
