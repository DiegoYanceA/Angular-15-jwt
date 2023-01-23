import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RecoverComponent } from './components/recover/recover.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent 
  },
  {
    path: 'recover',
    title: 'Recover',
    component: RecoverComponent
  },
  {
    path: 'signup',
    title: 'Sign up',
    component: SignupComponent 
  },
  {
    path: '**',
    redirectTo: 'login'
  },
]

@NgModule({
  // declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
