import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchPokemonComponent } from './modules/pokedex/components/search-pokemon/search-pokemon.component';
import { PokedexComponent } from './modules/pokedex/pokedex.component';
import { MenuComponent } from './modules/menu/menu.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'AngularDex/menu',
    pathMatch: 'full',
  },

  {
    path: 'AngularDex/menu',
    component: MenuComponent,
  },
  {
    path: 'AngularDex',
    component: PokedexComponent,
    children: [
      {
        path: 'search-pokemon',
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
