import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokemonNav } from '../models/search.model';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  searchPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

  pokemonType: { [key: string]: string } = {
    fire: '../../../../../assets/imgs/typesofpokemon/fire.png',
    steel: '../../../../../assets/imgs/typesofpokemon/steel.png',
    bug: '../../../../../assets/imgs/typesofpokemon/bug.png',
    grass: '../../../../../assets/imgs/typesofpokemon/grass.png',
    ice: '../../../../../assets/imgs/typesofpokemon/ice.png',
    electric: '../../../../../assets/imgs/typesofpokemon/electric.png',
    rock: '../../../../../assets/imgs/typesofpokemon/rock.png',
    normal: '../../../../../assets/imgs/typesofpokemon/normal.png',
    flying: '../../../../../assets/imgs/typesofpokemon/flying.png',
    water: '../../../../../assets/imgs/typesofpokemon/water.png',
    fairy: '../../../../../assets/imgs/typesofpokemon/fairy.png',
    ground: '../../../../../assets/imgs/typesofpokemon/ground.png',
    dark: '../../../../../assets/imgs/typesofpokemon/dark.png',
    ghost: '../../../../../assets/imgs/typesofpokemon/ghost.png',
    dragon: '../../../../../assets/imgs/typesofpokemon/dragon.png',
    poison: '../../../../../assets/imgs/typesofpokemon/poison.png',
    psychic: '../../../../../assets/imgs/typesofpokemon/psychic.png',
    fighting: '../../../../../assets/imgs/typesofpokemon/fighting.png',
  };

  constructor(private http: HttpClient) {}

  getPokemonNav(name: string): Observable<pokemonNav[]> {
    return this.http.get<pokemonNav[]>(`${this.searchPokemonUrl}${name}/`);
  }
}
