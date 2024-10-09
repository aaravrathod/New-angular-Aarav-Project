import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {GameService} from "../services/game.service";
import {Games} from "../shared/models/games";

@Component({
  selector: 'app-modify-game',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './modify-game.component.html',
  styleUrl: './modify-game.component.css'
})
export class ModifyGameComponent {
  gameForm: FormGroup;
  game: Games | undefined;


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
  navigateToGameList(): void {
    this.router.navigate(['/games']);
  }


}
