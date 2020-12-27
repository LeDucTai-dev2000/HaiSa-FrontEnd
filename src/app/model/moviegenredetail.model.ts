export class MovieGenreDetail{
public movieGenreMovieDetailId: number;
public genreMovieId:number;
public movieId:number

constructor(movieGenreMovieDetailId: number,genreMovieId:number,movieId:number){
    this.movieGenreMovieDetailId=movieGenreMovieDetailId;
    this.genreMovieId=genreMovieId;
    this.movieId=movieId
}
}