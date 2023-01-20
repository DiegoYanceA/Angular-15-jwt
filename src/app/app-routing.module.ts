import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './layouts/login/login.component';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path:'',
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
