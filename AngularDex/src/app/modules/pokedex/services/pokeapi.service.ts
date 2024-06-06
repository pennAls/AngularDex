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

  pokemonTypeColors: { [key: string]: string } = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#EE99AC',
    normal: '#A8A878',
  };

  constructor(private http: HttpClient) {}

  getPokemonNav(name: string): Observable<pokemonNav[]> {
    return this.http.get<pokemonNav[]>(`${this.searchPokemonUrl}${name}/`);
  }
  getTypeColor(type: string): string {
    return this.pokemonTypeColors[type] || '#000000';
  }
}
