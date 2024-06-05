import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pokemonNav } from '../models/search.model';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  searchPokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemonNav(name: string): Observable<pokemonNav[]> {
    return this.http.get<pokemonNav[]>(`${this.searchPokemonUrl}${name}/`);
  }
}
