import {Component, OnInit} from '@angular/core';
import {Games} from "../shared/models/games";
import {NgClass, NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {GameListItemsComponent} from "../game-list-items/game-list-items.component";
import {GameService} from "../services/game.service";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgForOf, GameListItemsComponent, NgStyle, NgClass, NgOptimizedImage, RouterLinkActive, RouterLink],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent implements OnInit{
  games_columns: string[] = ['id', 'Title', 'Developer', 'Release Date', 'Character'];
  game_List: Games[] = [];

  constructor(private gameService: GameService) {

  }

  ngOnInit() {

    this.gameService.getGames().subscribe({
      next: (data: Games[]) => this.game_List = data,
      error: err => console.error("Error fetching games", err),
      complete: () => console.log("Game data fetch complete!")
    })



  }


onEdit():void{

}

onDelete(game:Games):void{
    this.game_List = this.game_List.filter(g => g.id !== game.id)

}
}
