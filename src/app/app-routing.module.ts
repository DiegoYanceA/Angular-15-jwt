import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './layouts/auth/auth.component';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      
    ]
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path:'',
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'auth'
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
