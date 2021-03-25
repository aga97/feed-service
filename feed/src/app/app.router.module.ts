import { RouterModule, Routes } from '@angular/router'
import { FeedComponent } from './feed/feed.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';
import { SignComponent } from './sign/sign.component';

const AppRoutes: Routes = [
    {path:'', redirectTo:'/sign', pathMatch:'full'},
    {path:'sign', component:SignComponent},
    {path:'main', component:MainComponent},
    {path:'logout', component:LogoutComponent},
    {path:'**', redirectTo:'/sign', pathMatch:'full'}
];

export const AppRouterModule = RouterModule.forRoot(AppRoutes, {useHash: true});