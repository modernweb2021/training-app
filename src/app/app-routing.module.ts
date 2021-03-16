import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivateComponent } from './private/private.component';
import { AuthGuard } from './auth.guard';
import { SigninAComponent } from './signin-a/signin-a.component';
import { SigninBComponent } from './signin-b/signin-b.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    component: SigninComponent,
    children: [
      {
        path: 'signin-a',
        component: SigninAComponent
      },
      {
        path: 'signin-b',
        component: SigninBComponent
      }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'private',
    component: PrivateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
