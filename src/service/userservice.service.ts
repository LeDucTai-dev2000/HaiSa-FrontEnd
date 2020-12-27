import { environment } from './../environments/environment.prod';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserserviceService {
  private apiUrl = environment.apiUrl;
  movieid: string;
  moviename: string;
  showtimeId: string;
  seatQuality: number;
  totalPriceofSeat: number;
  searchName: string;


  constructor(private http: HttpClient) {}

  getAllCinema(): Observable<any> {
    return this.http.get(`${this.apiUrl}/cinema`);
  }

  getAllMovie(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie`);
  }

  getMovieComing(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/2`);
  }

  getMovie(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/1`);
  }

  getMovieById(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/findbyid?id=` + this.getMovieId);
  }

  getGenreByMovieId(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/getgenre?id=` + this.getMovieId);
  }

  getShowtimeByMovieId(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/showtimes/getshowtimesbymovieid?id=` + sessionStorage.getItem('movieId')
    );
  }

  getShowtimeById(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/showtimes/findbyid?id=` +
        sessionStorage.getItem('showtimeId')
    );
  }

  getSeatStatus(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/seatstatus/findbyshowtimeid?id=` +
        sessionStorage.getItem('showtimeId')
    );
  }

  getFood(): Observable<any> {
    return this.http.get(`${this.apiUrl}/food/1`);
  }

  getMovieFromSearch(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/findbymoviename?name=`+ sessionStorage.getItem('searchName'))
  }

  getTicketByMemberId(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/view/historytrans?id=` +
        sessionStorage.getItem('memberId')
    );
  }

  getHotMovie(): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/movieofweek`)
  }

  getCode(email: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/member/getcodeverify?email=`+ email)
  }


  checkPrice(data:any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ticket/checkticket`, data)
  }

  addFB(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/feedback/add`, data);
  }

  addTicket(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/ticket/book`, data);
  }

  addMembers(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/member/add`, data);
  }
  updateMembers(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/member/update`, data)
  }
  changePassword(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/changepassword`, data)
  }
  forgotPassword(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/forgotpassword`, data)
  }


  setMovieId(id: string) {
    this.movieid = id;
    sessionStorage.setItem('movieId', this.movieid);
  }
  setMovieName(name: string) {
    this.moviename = name;
    sessionStorage.setItem('movieName', this.moviename);
  }
  setShotimeId(id: string) {
    this.showtimeId = id;
    sessionStorage.setItem('showtimeId', this.showtimeId);
  }
  setSetSeatQuality(quality: number) {
    this.seatQuality = quality;
    sessionStorage.setItem('seatQuality', String(this.seatQuality));
  }
  setTotalPriceofSeat(total: number) {
    this.totalPriceofSeat = total;
    sessionStorage.setItem('totalPriceofSeat', String(this.totalPriceofSeat));
  }
  setSearchName(name: string) {
    this.searchName = name;
    sessionStorage.setItem('searchName',name)
  }


  get getMovieId() {
    return this.movieid;
  }
  get getMovieName() {
    return this.moviename;
  }
  get getShowtimeId() {
    return this.showtimeId;
  }
  get getSeatQuanlity() {
    return this.seatQuality;
  }
  get getSearchName(){
    return this.searchName;
  }
  getShowtimeByCinemaId(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/showtimes/getshowtimesbycinema?id=`+ id)
  }
  getNameMember(email: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/member/getmemberbyemail?email=`+ email)
  }
}
