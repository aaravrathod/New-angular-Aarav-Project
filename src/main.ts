import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from
    '@angular/router';
import {game_list} from "./app/shared/mockGame.data";
import {GameListComponent} from "./app/game-list/game-list.component";
import {GameListItemsComponent} from "./app/game-list-items/game-list-items.component";
import {ModifyGameComponent} from "./app/modify-game/modify-game.component";
import {GameNotFoundComponent} from "./app/game-not-found/game-not-found.component";


const routes: Routes=[
  {path:'',redirectTo:'/games',pathMatch:'full' },
  {path:'games', component: GameListComponent},
  {path:'games/:id', component: GameListItemsComponent},
  {path:'modify-game', component: ModifyGameComponent},
  {path: '**', component:GameNotFoundComponent}



]

bootstrapApplication(AppComponent,{providers:[provideRouter(routes)]})
  .catch((err) => console.error(err));
