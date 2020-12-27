import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Movie } from '../../../model/movie.model';
import { MovieService } from '../../../../service/admin-service/movie/movieservice.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, Form } from '@angular/forms';
import { GenreMovie } from '../../../model/genremovie.model';
import { GenremovieService } from '../../../../service/admin-service/genremovie/genremovie.service';
import { from } from 'rxjs';
import { data } from 'jquery';
@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
  form: FormGroup;
  public movies: Movie[] = [];

  public description: string;
  public duration: number;
  public movieId: number;
  public movieName: string;
  public thumbnail: string;
  public actors: string;
  public status: number;
  public ageLimit: number;
  public director: string;
  public trailer: string;
  listGenre = [];



  constructor(
    public movieService: MovieService,
    public routerService: Router,
    public activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    public genremovieService: GenremovieService,
  ) { }
  public genres: GenreMovie[] = [];
  genreId: number;
  name: string;
  genre : {
    genreId : any;
    name : any;
    check : any;
  }

 
  ngOnInit(): void {
    this.onLoad();
    this.form = this.fb.group({
      description: ['',[Validators.required, Validators.pattern(/[!^\w\s]$/)]],
      duration: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      movieid: [''],
      movieName: ['',[Validators.required,Validators.pattern(/[!^\w\s]$/)]],
      thumbnail: ['',Validators.required],
      actors: ['',[Validators.required, Validators.pattern(/[!^\w\s]$/)]],
      status: [''],
      ageLimit: ['',[Validators.required,Validators.pattern("^[0-9]*$")]],
      director: ['',[Validators.required, Validators.pattern(/[!^\w\s]$/)]],
      trailer: ['',Validators.required],
      listGenre: this.fb.array([])
    })
    this.loadAllGenre();


  }


  loadAllGenre(): void {
    this.genremovieService.getAll(null, null).subscribe(
      (data) => {
        this.genres = data.data;


      },
      (error) => {
        console.log(error);
      }
    );
  }

  onLoad() {
    this.activatedRoute.queryParams.subscribe(data => {
      let id: number = data.id;
     
      this.movieService.getAll(null, null, null, id, null).subscribe(data => {
        this.movies = data.data;
        this.movieId = data.data.movieId
        this.description = data.data.description
        this.director = data.data.director
        this.movieName = data.data.movieName
        this.thumbnail = data.data.thumbnail
        this.actors = data.data.actors
        this.status = data.data.status
        this.ageLimit = data.data.ageLimit
        this.trailer = data.data.trailer
        this.duration = data.data.duration
        console.log(data);
        this.form = this.fb.group({
          description: this.description,
          duration: this.duration,
          movieId: this.movieId,
          movieName: this.movieName,
          thumbnail: this.thumbnail,
          actors: this.actors,
          status: this.status,
          ageLimit: this.ageLimit,
          director: this.director,
          trailer: this.trailer,
          listGenre: this.fb.array([])
        })


      }, error => {
        console.log(error);
      })

      this.genremovieService.getAll(null, null, id).subscribe(data => {
        let list = data.data;
        for (let i = 0; i < list.length; i++) {
          let check = false;
          for (let j = 0; j < this.genres.length; j++) {
            if (list[i].genreMovie.genreId == this.genres[j].genreId) {
              check = true;
            }
          }
          this.genre = {
            genreId : list[i].genreMovie.genreId,
            name : list[i].genreMovie.name,
            check : check
          }
          this.listGenre.push(this.genre);
        }
        console.log(this.listGenre)
        this.form = this.fb.group({
          description: this.description,
          duration: this.duration,
          movieId: this.movieId,
          movieName: this.movieName,
          thumbnail: this.thumbnail,
          actors: this.actors,
          status: this.status,
          ageLimit: this.ageLimit,
          director: this.director,
          trailer: this.trailer,
          listGenre: this.fb.array([])
        })


      })
    })
  }

  onupdateMovie() {
 

    this.movieService.updateMovie(this.form.value).subscribe(data => {
      console.log(data)
      this.routerService.navigate(['/admin/listmovie']);
      alert('The movie has been updated successfully')
    }, error => {
      console.log(error);
    })
  }

  onChange(genreId: number, isChecked: boolean) {
    const genres = (this.form.controls.listGenre as FormArray);

    if (isChecked) {
      genres.push(new FormControl({ genreId }));
    } else {
      const index = genres.controls.findIndex(x => x.value === { genreId });
      genres.removeAt(index);
    }
  }
checkgenre(){
  

}
back(){
  this.routerService.navigate(['/admin/listmovie'])
}
}

