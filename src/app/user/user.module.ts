import { BasicAuthenInterceptorService } from 'src/service/authen-service/basic-authen-interceptor.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './body/list/list.component';
import { HotmovieComponent } from './body/hotmovie/hotmovie.component';
import { ComingComponent } from './body/coming/coming.component';
import { SlideshowComponent } from './body/slideshow/slideshow.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutUserComponent } from './layout-user/layout-user.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ContactComponent } from './contact/contact.component';
import { QandAComponent } from './qand-a/qand-a.component';
import { ListMovieComponent } from './list-movie/list-movie.component';
import { TheaterComponent } from './theater/theater.component';
import { ListComingComponent } from './list-coming/list-coming.component';
import { ViewtrailerComponent } from './viewtrailer/viewtrailer.component';
import { DatveComponent } from './datve/datve.component';
import { SeatSelectComponent } from './datve/seat-select/seat-select.component';
import { PayComponent } from './datve/pay/pay.component';
import { TimeoutComponent } from './datve/timeout/timeout.component';
import { CountdownComponent } from './datve/countdown/countdown.component';
import { CountdownModule } from 'ngx-countdown';
import { JwPaginationModule } from 'jw-angular-pagination';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FoodComponent } from './datve/food/food.component';
import { BilldetailComponent } from './datve/billdetail/billdetail.component';
import { CheckoutComponent } from './datve/billdetail/checkout/checkout.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MemberHistoryComponent } from './member-history/member-history.component';
import { SearchmovieComponent } from './searchmovie/searchmovie.component';
import { ThemComponent } from './header/them/them.component';
import { EdituserComponent } from './login/edituser/edituser.component';
import { SignupComponent } from './login/signup/signup.component';
import { ForgotpassComponent } from './login/forgotpass/forgotpass.component';
import { ChangepassComponent } from './login/changepass/changepass.component';
import { CinemashowtimeComponent } from './theater/cinemashowtime/cinemashowtime.component';
import { BackloginComponent } from './login/forgotpass/backlogin/backlogin.component';
import { CheckmailComponent } from './login/signup/checkmail/checkmail.component';
import { WelcomeComponent } from './login/signup/welcome/welcome.component';
import { ReturnComponent } from './login/edituser/return/return.component';
import { ThankComponent } from './qand-a/thank/thank.component';


const userRoutes: Routes = [
  {
    path: '',
    component: LayoutUserComponent,
    children: [
      { path: '', component: BodyComponent },
      { path: 'list', component: ListMovieComponent },
      { path: 'slide', component: SlideshowComponent },
      { path: 'single-movie/:id', component: SingleMovieComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'q&a', component: QandAComponent },
      { path: 'theater', component: TheaterComponent },
      { path: 'list-coming', component: ListComingComponent },
      { path: 'ticketing/:id', component: DatveComponent },
      { path: 'seat', canActivate:[BasicAuthenInterceptorService],component: SeatSelectComponent },
      { path: 'pay', component: PayComponent },
      { path: 'timeout', component: TimeoutComponent },
      { path: 'food', component: FoodComponent },
      { path: 'bill-detail', component: BilldetailComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'history', component: MemberHistoryComponent },
      { path: 'search', component: SearchmovieComponent},
      { path: 'edit-account', component: EdituserComponent},
      { path: 'sign-up', component: SignupComponent},
      { path: 'backlogin', component: BackloginComponent},
      { path: 'forgot', component: ForgotpassComponent},
      { path: 'change-pass', component: ChangepassComponent},
      { path: 'check-mail', component: CheckmailComponent},
      { path: 'welcome', component: WelcomeComponent},
      { path: 'done', component: ReturnComponent},
      { path: 'thank', component:ThankComponent},
    ],
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    ListComponent,
    HotmovieComponent,
    ComingComponent,
    SlideshowComponent,
    LayoutUserComponent,
    SingleMovieComponent,
    TimelineComponent,
    ContactComponent,
    QandAComponent,
    ListMovieComponent,
    TheaterComponent,
    ListComingComponent,
    ViewtrailerComponent,
    DatveComponent,
    SeatSelectComponent,
    PayComponent,
    TimeoutComponent,
    CountdownComponent,
    FoodComponent,
    BilldetailComponent,
    CheckoutComponent,
    MemberHistoryComponent,
    SearchmovieComponent,
    ThemComponent,
    EdituserComponent,
    SignupComponent,
    ForgotpassComponent,
    ChangepassComponent,
    CinemashowtimeComponent,
    BackloginComponent,
    CheckmailComponent,
    WelcomeComponent,
    ReturnComponent,
    ThankComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    CountdownModule,
    JwPaginationModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class UserModule {}
