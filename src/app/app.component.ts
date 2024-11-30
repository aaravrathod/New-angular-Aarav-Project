import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Games} from "./shared/models/games";
import {NgForOf} from "@angular/common";
import {NgIf} from "@angular/common";
import {GameListComponent} from "./game-list/game-list.component";
import {GameListItemsComponent} from "./game-list-items/game-list-items.component";
import {GameService} from "./services/game.service";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, GameListComponent, GameListItemsComponent, RouterLink, RouterLinkActive, MatToolbarModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularProject';


  constructor(private gameService: GameService) {
   this.gameService.getGamesById(1)
  }




}
