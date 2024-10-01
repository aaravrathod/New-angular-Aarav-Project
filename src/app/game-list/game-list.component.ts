import { Component } from '@angular/core';
import {Games} from "../shared/models/games";
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {GameListItemsComponent} from "../game-list-items/game-list-items.component";
import {GameService} from "../services/game.service";
import {game_list} from "../shared/mockGame.data";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgForOf, GameListItemsComponent, NgStyle, NgClass],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
  games_columns: string[] = ['id', 'Title', 'Developer', 'Release Date', 'Character'];
  game_List: Games[] = [];

  constructor(private gameService: GameService) {
    //this constructor is primarily used for dependency injection
  }

  ngOnInit() {

    this.gameService.getGames().subscribe({
      next: (data: Games[]) => this.game_List = data,
      error: err => console.error("Error fetching games", err),
      complete: () => console.log("Game data fetch complete!")
    })

  }

//For Searching the game using an ID
  getGamesById(Game_id: number): Observable<Games | undefined> {
    const game = this.game_List.find(Games => Games.id === Game_id);
    return of (game);
  }

//For adding to the array
  addGame(new_Game:Games) : Observable<Games[]>{
    this.game_List.push(new_Game)
    return of(this.game_List);
  }

  //Updating Game
  updateGame(updatedGame: Games): Observable<Games[]> {
    const index = this.game_List.findIndex(Games => Games.id === Games.id);
    if (index !== -1) {
      this.game_List[index] = updatedGame;
    }
    return of(this.game_List);
  }

  //Deleting Game
  deleteGame(Game_Id: number): Observable<Games[]> {
    this.game_List = this.game_List.filter(Games=> Games.id !== Game_Id);
    return of(this.game_List);
  }

}
