import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Games} from "../shared/models/games";
import  {game_list} from "../shared/mockGame.data"


@Injectable({
  providedIn: 'root'
})
export class GameService {
  private  Games:Games[]=game_list;


  constructor() { }

  //Getting Game
  getGames(): Observable<Games[]>{
    return of (game_list);
  }
//Adding Game
  addGame(newGame:Games) : Observable<Games[]>{
    this.Games.push(newGame)
    return of(this.Games);
  }

//Updating Game Data
  updateGame(updatedGame: Games): Observable<Games[]> {
    const index = this.Games.findIndex(game_list => game_list.id === updatedGame.id);
    if (index !== -1) {
      this.Games[index] = updatedGame;
    }
    return of(this.Games);
  }

  //Delete Game Data
  deleteGame(gameId: number): Observable<Games[]> {
    this.Games = this.Games.filter(game_list => game_list.id !== gameId);
    return of(this.Games);
  }

  //Get Game by ID
  getGamesById(gameId: number): Observable<Games[]> {
    const game = this.Games.find(game_list => game_list.id === gameId);
    return of(game_list);
  }

}
