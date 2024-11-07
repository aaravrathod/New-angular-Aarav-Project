import { Injectable } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Games} from "../shared/models/games";
import  {game_list} from "../shared/mockGame.data"
import {HttpClient,HttpErrorResponse} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private apiUrl='api/Games';
  private  Games:Games[]=game_list;


  constructor(private http:HttpClient) { }

  //Getting Game
  getGames(): Observable<Games[]>{
    return this.http.get<Games[]>(this.apiUrl).pipe(catchError(this.handleError));
  }
//Adding Game
  addGame(newGame:Games) : Observable<Games>{
    newGame.id=this.generateNewId();
    return this.http.post<Games>(this.apiUrl, newGame).pipe(catchError(this.handleError));
  }

//Updating Game Data
  updateGame(updatedGame: Games): Observable<Games> {
    const url = `${this.apiUrl}/${updatedGame.id}`;
    return this.http.put<Games>(url, updatedGame).pipe(catchError(this.handleError));
  }

  //Delete Game Data
  deleteGame(gameId: number): Observable<{}> {
    const url = `${this.apiUrl}/${gameId}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  //Get Game by ID
  getGamesById(gameId: number): Observable<Games> {
    return this.http.get<Games>(`${this.apiUrl}/${gameId}`).pipe(catchError(this.handleError));
  }

  generateNewId(): number {
    return this.Games.length > 0 ? Math.max(...this.Games.map(game => game.id)) + 1 : 1;
  }
  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }

}
