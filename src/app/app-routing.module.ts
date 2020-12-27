import { BasicAuthenInterceptorService } from 'src/service/authen-service/basic-authen-interceptor.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { UserModule } from './user/user.module';
import { LoginComponent } from './login/login.component';
// debugger
const appRoutes: Routes = [

  { path: '', loadChildren: () => UserModule },
  // {path: '', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'admin', canActivate:[BasicAuthenInterceptorService],loadChildren: () => AdminModule},
  {path:'login',component:LoginComponent}
]

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
