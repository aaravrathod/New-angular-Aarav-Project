import { Pipe, PipeTransform } from '@angular/core';
import {Games} from "../shared/models/games";

@Pipe({
  name: 'concatenate',
  standalone: true
})
export class ConcatenatePipe implements PipeTransform {

  //Created a pipe called concatenate to join the title and character of the game
  transform(Game:Games): string {
    return `${Game.title}+${Game.character}`;
  }

}
