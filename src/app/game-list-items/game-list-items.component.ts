import {Component, Input} from '@angular/core';
import {Games} from "../shared/models/games";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-game-list-items',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './game-list-items.component.html',
  styleUrl: './game-list-items.component.css'
})
export class GameListItemsComponent {

  @Input() game?:Games;
}
