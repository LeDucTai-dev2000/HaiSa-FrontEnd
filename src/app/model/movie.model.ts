export class Movie{
    public description : string;
    public duration : number;
    public movieId : number;
    public movieName : string;
    public thumbnail : string;
    public actors : string;
    public status : number;
    public ageLimit : number;
    public director : string;
    public trailer : string;
    public listGenre:any
 
  
    constructor(description : string, duration : number, movieId : number, movieName : string, status : number, thumbnail : string, ageLimit: number,actors: string,director:string, trailer: string,listGenre:any){
      this.description = description;
      this.duration = duration;
      this.movieId = movieId;
      this.movieName = movieName;
      this.status = status;
      this.thumbnail = thumbnail;
      this.director = director;
      this.ageLimit = ageLimit;
      this.actors = actors;
      this.trailer= trailer;
      this.listGenre=listGenre;
      
    }
  }