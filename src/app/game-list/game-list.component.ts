import { Component } from '@angular/core';
import {Games} from "../shared/models/games";
import {NgClass, NgForOf, NgStyle} from "@angular/common";
import {GameListItemsComponent} from "../game-list-items/game-list-items.component";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgForOf, GameListItemsComponent, NgStyle, NgClass],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {
//
  constructor (private gameService: GameService){

  }



}
