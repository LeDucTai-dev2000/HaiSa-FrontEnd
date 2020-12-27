import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from 'src/service/authen-service/authentication-service.service.js';
import {ShowtimesService} from '../../../service/admin-service/showtimes/showtimes.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-layout-ad',
  templateUrl: './layout-ad.component.html',
  styleUrls: ['./layout-ad.component.css']
})
export class LayoutAdComponent implements OnInit {

  constructor(
    private showtimesService : ShowtimesService,
    private router: Router,
  ) { }
  
public email :string
public name :string
ngOnInit(): void {
    this.getName();
    this.loadEmployee();
    
  }

  logout() {
    let c =confirm('Are You Sure Logout ?')
    if(c == true){
      sessionStorage.clear();
      alert('Logout suceess')
      this.router.navigate(['/login']);
    }else{
      this.router.navigate(['/admin/home']);
    }

   
    return;
  }
  getName(){
    const currentUser = JSON.parse(sessionStorage.getItem('token'));
   this.email = currentUser.username
  }
  loadEmployee(): void {
    this.showtimesService.getEmployeeId(this.email).subscribe(
      (data) => {
        
         this.name = data.data.name;       
     
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onView(){

    this.router.navigate(['/admin/viewemployeelogin']);
        // console.log(movie);
    }
}
