import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchPokemonComponent } from './modules/pokedex/components/search-pokemon/search-pokemon.component';
import { PokedexComponent } from './modules/pokedex/pokedex.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/AngularDex',
    pathMatch: 'full',
  },

  {
    path: 'AngularDex',
    component: PokedexComponent,
    children: [
      {
        path: 'Search-Pokemon',
        component: SearchPokemonComponent,
      },
    ],
  },

  {
    path: '**',
    redirectTo: '/AngularDex',
    pathMatch: 'full',
  },
];
