import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchPokemonComponent } from './modules/pokedex/components/search-pokemon/search-pokemon.component';
import { PokedexComponent } from './modules/pokedex/pokedex.component';
import { PosterComponent } from './commons/poster/poster.component';



export const routes: Routes = [
  {
    path: 'AngularDex',
    component: PokedexComponent,
    children: [
      {

        path: 'menu',
        component: PosterComponent,
      },
      {

        path: 'search-pokemon',
        component: SearchPokemonComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/AngularDex/menu',
    pathMatch: 'full',
  },
];
