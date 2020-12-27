import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { GenreMovie } from '../../../model/genremovie.model';
import { GenremovieService } from '../../../../service/admin-service/genremovie/genremovie.service';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-genremovie',
  templateUrl: './update-genremovie.component.html',
  styleUrls: ['./update-genremovie.component.css']
})
export class UpdateGenremovieComponent implements OnInit {

  public genres: GenreMovie ={
    "genreId":null,
    "name":""

  }
  constructor(
    public genremovieService : GenremovieService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute
  ) { }
  formcheck = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.pattern(/[!^\w\s]$/)])
  })
  ngOnInit(): void {
    this.onLoad()
  }

  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
       let id : number = data.id;
    
      this.genremovieService.getAll(null,id).subscribe(data => {
        this.genres = data.data;
        
      }, error => {
        console.log(error);
      })
    })
  }
  onUpdateGenre(){
    this.genremovieService.updateGenre(this.genres).subscribe(data => {
  
      alert('The genre movie has been updated successfully')
      this.routerService.navigate(['/admin/listgenremovie']);
    }, error => {
      console.log(error);
    })
  }
  back(){
    this.routerService.navigate(['/admin/listgenremovie'])
  }
  }

