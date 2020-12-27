import { BasicAuthenInterceptorService } from 'src/service/authen-service/basic-authen-interceptor.service';
import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Movie } from '../../../model/movie.model';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MovieService } from '../../../../service/admin-service/movie/movieservice.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
  modalRef: BsModalRef;
  public movie1: Movie[] = [];
  public movie2: Movie[] = [];
  public movie3: Movie[] = [];
  public status: number;
  movieId:number;
  totalRecord:string;
  totalRecord2:string;
  totalRecord3:string;
  name1:string;
  name2:string;
  name3:string;
  p: number = 1;
  p2: number = 1;
  p3: number = 1;
  constructor(
    public routerService : Router,
    private modalService: BsModalService,
  private movieService : MovieService,
  private basic:BasicAuthenInterceptorService
  ) {  }

  check = true;

  ngOnInit(): void {

    let checkRole = sessionStorage.getItem('ROLE');
    console.log(checkRole)
    
    
    if(checkRole == 'Staff'){
      this.check = true
      console.log('Staff ne ')
    }else {
      this.check = false
      console.log('Admin ne')
    }

   ;
    this.onSearch(this.name1)
    this.onSearch2(this.name2)
    this.onSearch3(this.name3)
    
  }
  openModaladd(templateAdd: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateAdd);
  }
  openModalupdate(templateUpdate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateUpdate);
  }
  openModaldelete(templateDelete: TemplateRef<any>) {
    this.modalRef = this.modalService.show(templateDelete);
  }

  loadAllMovie1(): void {
    this.movieService.getAll(null,null,null,null,1).subscribe(
      (data) => {
        this.movie1 = data.data;
        this.totalRecord=data.data.length;
       

      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadAllMovie2(): void {
    this.movieService.getAll(null,null,null,null,2).subscribe(
      (data) => {
        this.movie2 = data.data;
        this.totalRecord2=data.data.length;
      
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadAllMovie3(): void {
    this.movieService.getAll(null,null,null,null,3).subscribe(
      (data) => {
        this.movie3 = data.data;
        this.totalRecord3=data.data.length;
      
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onUpdate(movie){

  this.routerService.navigate(['/admin/listmovie/update'], { queryParams: {id: movie.movieId} });
      // console.log(movie);
  }
  onView(movie){

    this.routerService.navigate(['/admin/listmovie/view'], { queryParams: {id: movie.movieId} });
        // console.log(movie);
    }
  onDelete(movie){

    this.routerService.navigate(['/admin/listmovie/delete'], { queryParams: {id: movie.movieId} });
        console.log(movie);
    }

   onSearch(name1: string){
   if(name1){
    this.movieService.getAll(name1,null,null,null,1).subscribe(
      (data) => {
        this.movie1 = data.data;
    
      },
      (error) => {
        console.log(error);
      }
    );
    }else{
      this.loadAllMovie1();
    }
   }
   onSearch2(name2: string){
    if(name2){
     this.movieService.getAll(null,name2,null,null,2).subscribe(
       (data) => {
         this.movie2 = data.data;
       
       },
       (error) => {
         console.log(error);
       }
     );
     }else{
       this.loadAllMovie2();
     }
    }
    onSearch3(name3: string){
      if(name3){
       this.movieService.getAll(null,null,name3,null,3).subscribe(
         (data) => {
           this.movie3 = data.data;
          
         },
         (error) => {
           console.log(error);
         }
       );
       }else{
         this.loadAllMovie3();
       }
      }
  }
