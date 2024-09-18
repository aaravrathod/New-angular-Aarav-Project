import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Games} from "./shared/models/games";
import {NgForOf} from "@angular/common";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyAngularProject';

  game_1:Games={id:0,title:"GOW",developer:"SANTA MONICO STUDIOS",release_date:"2018 Nov 27",character:"Kratos"};

  game_2:Games={id:1,title:"POP",developer:"UBSISOFT",release_date:"2018 Nov 27",character:"PRINCE"};


  game_3:Games={id:2,title:"DANTE'S INFERNO",developer:"VISCERAL GAMES",release_date:"2018 Nov 27",character:"DANTE"};

  game_4:Games={id:3,title:"BATMAN:ARKHMAN KNIGHT",developer:"ROCKSTEADY STUDIOS",release_date:"2015 Nov 27",character:"BATMAN"};

  game_5:Games={id:4,title:"BLACKMIGHT WUKONG",developer:"GAME SCEINCE",release_date:"2024 Nov 27",character:"SUN GOD:WUKONG"};

  game_list:Games[]=[this.game_1,this.game_2,this.game_3,this.game_4,this.game_5];


}
