import {Component, OnInit} from '@angular/core';
import {Games} from "../shared/models/games";
import {
  CurrencyPipe,
  DatePipe,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgOptimizedImage,
  NgStyle,
  UpperCasePipe
} from "@angular/common";
import {GameListItemsComponent} from "../game-list-items/game-list-items.component";
import {GameService} from "../services/game.service";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ConcatenatePipe} from "../pipes/concatenate.pipe";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgForOf, GameListItemsComponent, NgStyle, NgClass, NgOptimizedImage, RouterLinkActive, RouterLink, DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe, ConcatenatePipe, HoverHighlightDirective, MatCardModule, MatButtonModule],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit{
  games_columns: string[] = ['id', 'Title', 'Developer', 'Release Date', 'Character'];
  game_List: Games[] = [];
  error:string| null=null;

  constructor(private gameService: GameService) {

  }

  ngOnInit() {

    this.gameService.getGames().subscribe({
      next: (data: Games[]) => {
        this.game_List = data;
        this.error = null; // Clear any previous errors
      },
      error: err => {
        this.error = 'Error fetching students'; // Set an error message
        console.error("Error fetching Students", err);
      },
      complete: () => console.log("Student data fetch complete!")
    })



  }

  selectedGame?: Games;
  selectGame(Game:Games):void{
    this.selectedGame=Game;
  }


onEdit():void{

}

onDelete(game:Games):void{
    this.game_List = this.game_List.filter(g => g.id !== game.id)

}
}
