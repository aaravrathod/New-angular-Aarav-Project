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

  getGames(): Observable<Games[]>{

    return of (game_list);
  }
}
