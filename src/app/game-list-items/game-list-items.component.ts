import {Component, Input, OnInit} from '@angular/core';
import {Games} from "../shared/models/games";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";

@Component({
  selector: 'app-game-list-items',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './game-list-items.component.html',
  styleUrl: './game-list-items.component.css'
})
export class GameListItemsComponent implements OnInit {
  Game: Games | undefined;
  game_list: Games[] = [];
  currentIndex: number = 0;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gameService.getGames().subscribe({
      next: (games: Games[]) => {
        this.game_list = games;
        this.error = null;

        this.route.paramMap.subscribe(params => {
          const id = Number(params.get('id'));
          if (id) {
            this.currentIndex = this.game_list.findIndex(game => game.id === id);
            this.Game = this.game_list[this.currentIndex];
          }
        });
      },
      error: (err) => {
        this.error = "Error Fetching Games";
        console.error("Error fetching games:", err);

      }

    });
  }

  goBack(): void {
    this.router.navigate(['/games']);
  }

  goForward(): void {
    if (this.currentIndex < this.game_list.length - 1) {
      this.currentIndex++;
      this.router.navigate(['/games', this.game_list[this.currentIndex].id]);
    }
  }
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/games', this.game_list[this.currentIndex].id]);
    }
  }

}

