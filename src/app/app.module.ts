import { from } from 'rxjs';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from '../app/user/header/header.component';
import { FooterComponent } from '../app/user/footer/footer.component';
import * as $ from 'jquery';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicAuthenInterceptorService } from 'src/service/authen-service/basic-authen-interceptor.service';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
// import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    // MatSliderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BasicAuthenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
