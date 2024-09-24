import { Component } from '@angular/core';
import {Games} from "../shared/models/games";
import {NgForOf} from "@angular/common";
import {GameListItemsComponent} from "../game-list-items/game-list-items.component";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [NgForOf, GameListItemsComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.css'
})
export class GameListComponent {


  game_1:Games={id:0,title:"GOW",developer:"SANTA MONICO STUDIOS",release_date:"2018 Nov 27",character:"Kratos"};

  game_2:Games={id:1,title:"POP",developer:"UBSISOFT",release_date:"2018 Nov 27",character:"PRINCE"};


  game_3:Games={id:2,title:"DANTE'S INFERNO",developer:"VISCERAL GAMES",release_date:"2018 Nov 27",character:"DANTE"};

  game_4:Games={id:3,title:"BATMAN:ARKHMAN KNIGHT",developer:"ROCKSTEADY STUDIOS",release_date:"2015 Nov 27",character:"BATMAN"};


  game_list:Games[]=[this.game_1,this.game_2,this.game_3,this.game_4];

}
