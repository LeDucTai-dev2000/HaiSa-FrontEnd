import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../model/movie.model';
import { GenreMovie } from '../../../model/genremovie.model';
import { MovieGenreDetail } from '../../../model/moviegenredetail.model';
import { MovieService } from '../../../../service/admin-service/movie/movieservice.service';
import { GenremovieService } from '../../../../service/admin-service/genremovie/genremovie.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, Form } from '@angular/forms';
@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {


  public movies: Movie[] = [];
  description: string;
  duration: number;
  movieid: number;
  movieName: string;
  thumbnail: string;
  actors: string;
  status: number;
  ageLimit: number;
  director: string;
  trailer: string;
  listGenre: any

  public genres: GenreMovie[] = [];
  genreId: number;
  name: string;

  public moviegenredetail: MovieGenreDetail[] = [];
  movieGenreMovieDetailId: number;
  genreMovieId: number;
  movieId: number

  masterSelected: boolean;
  form: FormGroup;

  constructor(
    public movieService: MovieService,
    public routerService: Router,
    public genremovieService: GenremovieService,
    private fb: FormBuilder

  ) {


  }



  ngOnInit(): void {
    this.loadAllGenre();
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
  }

  onaddMovie() {
    

  this.movieService.addMovie(this.form.value).subscribe(
    data => {
      this.movies = data.data;
      alert('The movie has been added successfully')
      this.routerService.navigate(['/admin/listmovie']);
     
    },
    error => {
      console.log(error);
    }
  )

  
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

  onChange(genreId: number, isChecked: boolean) {
    const genres = (this.form.controls.listGenre as FormArray);

    if (isChecked) {
      genres.push(new FormControl({ genreId }));
    } else {
      const index = genres.controls.findIndex(x => x.value === { genreId });
      genres.removeAt(index);
    }
  }
  submit() {
   
  }
back(){
  this.routerService.navigate(['/admin/listmovie'])
}

}
