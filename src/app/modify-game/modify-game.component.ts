import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {GameService} from "../services/game.service";
import {Games} from "../shared/models/games";
import {GameListComponent} from "../game-list/game-list.component";
import {game_list} from "../shared/mockGame.data";
import {AutoFocusDirective} from "../directives/auto-focus.directive";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-modify-game',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterLink, AutoFocusDirective, HoverHighlightDirective, MatInputModule, MatTooltipModule, MatButtonModule],
  templateUrl: './modify-game.component.html',
  styleUrl: './modify-game.component.css'
})
export class ModifyGameComponent implements OnInit{
  gameForm: FormGroup;
  game: Games|undefined;


  constructor(
      private fb:FormBuilder,
      private route:ActivatedRoute,
      private gameService:GameService,
      private router:Router,
  ) {
     this.gameForm=this.fb.group({
       id: ['', Validators.required],
       title: ['', Validators.required],
       developers: ['', Validators.required],
       release_date: ['', Validators.required],
       character: ['', Validators.required],
     });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.gameService.getGamesById(+id).subscribe(game => {
        if(game) {
          this.game = game;
          this.gameForm.patchValue(game);
        }
      });
    }
  }
  navigateToGameList(): void {
    this.router.navigate(['/games']);
  }

  onSubmit(): void {
    if (this.gameForm.valid){
      const game: Games = this.gameForm.value;
      if (game.id){
        console.log(game.id)
        this.gameService.updateGame(game).subscribe(()=>this.router.navigate(['/games']))
      }
    }
  }


    protected readonly onfocus = onfocus;
}
