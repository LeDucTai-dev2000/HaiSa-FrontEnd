import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule} from '@angular/material/tabs';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutAdComponent } from './layout-ad/layout-ad.component';
import { BodyComponent } from './body/body.component';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';
import { DeleteMovieComponent } from './movie/delete-movie/delete-movie.component';
import { ListMovieComponent } from './movie/list-movie/list-movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListFeedbackComponent } from './feedback/list-feedback/list-feedback.component';
import { ListGenremovieComponent } from './genremovie/list-genremovie/list-genremovie.component';
import { AddGenremovieComponent } from './genremovie/add-genremovie/add-genremovie.component';
import { UpdateGenremovieComponent } from './genremovie/update-genremovie/update-genremovie.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ListCinemaComponent } from './cinema/list-cinema/list-cinema.component';
import { AddCinemaComponent } from './cinema/add-cinema/add-cinema.component';
import { UpdateCinemaComponent } from './cinema/update-cinema/update-cinema.component';
import { ListFoodComponent } from './food/list-food/list-food.component';
import { AddFoodComponent } from './food/add-food/add-food.component';
import { UpdateFoodComponent } from './food/update-food/update-food.component';
import { DeleteFoodComponent } from './food/delete-food/delete-food.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { ListShowtimesComponent } from './showtimes/list-showtimes/list-showtimes.component';
import { UpdateShowtimesComponent } from './showtimes/update-showtimes/update-showtimes.component';
import { AddShowtimesComponent } from './showtimes/add-showtimes/add-showtimes.component';
import { DeleteShowtimesComponent } from './showtimes/delete-showtimes/delete-showtimes.component';
import { ListMemberComponent } from './member/list-member/list-member.component';
import { CharttotalcinemaComponent } from './totalcinema/charttotalcinema/charttotalcinema.component';
import { CountviewmovieComponent } from './countview/countviewmovie/countviewmovie.component';
import { ListstatiscalComponent } from './statisticaldata/liststatiscal/liststatiscal.component';
import { AddRoomComponent } from './room/add-room/add-room.component';
import { ListRoomComponent } from './room/list-room/list-room.component';
import { UpdateRoomComponent } from './room/update-room/update-room.component';
import { ListPeriodComponent } from './period/list-period/list-period.component';
import { AddPeriodComponent } from './period/add-period/add-period.component';
import { UpdatePeriodComponent } from './period/update-period/update-period.component';
import { TicketofshowtimeComponent } from './statisticaldata/ticketofshowtime/ticketofshowtime.component';
import { TotalcinemaofmonthComponent } from './statisticaldata/totalcinemaofmonth/totalcinemaofmonth.component';
import { ViewMovieComponent } from './movie/view-movie/view-movie.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';
import { ViewemployeeloginComponent } from './viewemployeelogin/viewemployeelogin.component';
import { InfrastructureComponent } from './infrastructure/infrastructure/infrastructure.component';
import { MemberofcinemaComponent } from './memberofcinema/memberofcinema/memberofcinema.component';
import { ViewmemberComponent } from './memberofcinema/viewmember/viewmember.component';

const adRoutes: Routes = [
  { path: '', component: LayoutAdComponent, children: [
      { path: 'home', component: BodyComponent},
      { path: 'listmovie', component: ListMovieComponent},
      { path :'listmovie/add', component :AddMovieComponent},
      { path :'listmovie/update', component :UpdateMovieComponent},
      { path :'listmovie/delete', component :DeleteMovieComponent},
      { path: 'listmovie/view', component:ViewMovieComponent},
      { path: 'listfeedback', component: ListFeedbackComponent},
      { path :'listgenremovie', component: ListGenremovieComponent},
      { path: 'listgenremovie/add', component: AddGenremovieComponent},
      { path: 'listgenremovie/update', component : UpdateGenremovieComponent},
      { path: 'listcinema', component:ListCinemaComponent},
      { path: 'listcinema/add', component:AddCinemaComponent},
      { path: 'listfood', component:  ListFoodComponent},
      { path: 'listfood/add', component:AddFoodComponent },
      { path: 'listfood/update', component:UpdateFoodComponent },
      { path: 'listfood/delete', component:DeleteFoodComponent },
      { path: 'listcinema',component:ListCinemaComponent},
      { path: 'listcinema/add',component:AddCinemaComponent},
      { path: 'listcinema/update',component:UpdateCinemaComponent},
      { path: 'listemployee',component:ListEmployeeComponent},
      { path: 'listemployee/add',component:AddEmployeeComponent},
      { path: 'listemployee/update',component:UpdateEmployeeComponent},
      { path: 'listemployee/delete',component:DeleteEmployeeComponent},
      { path: 'listemployee/view',component:ViewEmployeeComponent},
      { path: 'listshowtimes' ,component:ListShowtimesComponent},
      { path: 'listshowtimes/add' ,component:AddShowtimesComponent},
      { path: 'listshowtimes/update' ,component:UpdateShowtimesComponent},
      { path: 'listshowtimes/delete' ,component:DeleteShowtimesComponent},
      { path: 'listmember',component:ListMemberComponent},
      { path: 'listroom' ,component:ListRoomComponent},
      { path: 'listroom/add',component:AddRoomComponent},
      { path: 'listperiod',component:ListPeriodComponent},
      { path: 'listperiod/add', component:AddPeriodComponent },
      { path: 'listperiod/update', component:UpdatePeriodComponent},
      { path: 'liststatisticaldata', component:ListstatiscalComponent},
      { path: 'ticketofshowtime',component: TicketofshowtimeComponent},
      { path: 'totalcinemaofmonth',component:TotalcinemaofmonthComponent},
      { path: 'viewemployeelogin', component: ViewemployeeloginComponent},
      { path: 'infrastructure',component:InfrastructureComponent},
      { path: 'memberticket', component:MemberofcinemaComponent},
      { path: 'viewmember', component:ViewmemberComponent}
    ]
  },
]

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LayoutAdComponent, BodyComponent,  ListMovieComponent, AddMovieComponent, UpdateMovieComponent, DeleteMovieComponent, ListMovieComponent, ListFeedbackComponent, ListGenremovieComponent, AddGenremovieComponent, UpdateGenremovieComponent, ListCinemaComponent, AddCinemaComponent, UpdateCinemaComponent, ListFoodComponent, AddFoodComponent, UpdateFoodComponent, DeleteFoodComponent, ListEmployeeComponent, AddEmployeeComponent, UpdateEmployeeComponent, DeleteEmployeeComponent, ListShowtimesComponent, UpdateShowtimesComponent, AddShowtimesComponent, DeleteShowtimesComponent, ListMemberComponent, AddRoomComponent, ListRoomComponent, CharttotalcinemaComponent, CountviewmovieComponent, ListstatiscalComponent, UpdateRoomComponent, ListPeriodComponent, AddPeriodComponent, UpdatePeriodComponent, TicketofshowtimeComponent, TotalcinemaofmonthComponent, ViewMovieComponent, ViewEmployeeComponent, ViewemployeeloginComponent, InfrastructureComponent, MemberofcinemaComponent, ViewmemberComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(adRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatButtonToggleModule,
    NgxPaginationModule,
  ],
  exports: [RouterModule]
})
export class AdminModule { }
