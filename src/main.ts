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
import {HttpClient, provideHttpClient, withInterceptors, withInterceptorsFromDi} from "@angular/common/http";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";


const routes: Routes=[
  {path:'',redirectTo:'/games',pathMatch:'full' },
  {path:'games', component: GameListComponent},
  { path: 'games/:id',
    loadComponent: () =>
      import('./app/game-list-items/game-list-items.component').then(m => m.GameListItemsComponent) },
  { path: 'modify-game',
    loadComponent: () =>
      import('./app/modify-game/modify-game.component').then(m => m.ModifyGameComponent) },
  { path: '**',
    loadComponent: () =>
      import('./app/game-not-found/game-not-found.component').then(m => m.GameNotFoundComponent) },


]

bootstrapApplication(AppComponent,{providers:[
  provideHttpClient(withInterceptorsFromDi()),
  provideRouter(routes),
  importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay:1000}))
  ],
})
  .catch((err) => console.error(err));
