import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { pokemonNav } from '../../models/search.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatListModule,
    CommonModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.css',
})
export class SearchPokemonComponent implements OnInit {
  pokemonsnav?: pokemonNav[] = [];
  searchform!: FormGroup;
  isDivOpen: boolean = false;

  ngOnInit(): void {
    this.buildform();
    this.observeNav();
  }

  private buildform(): void {
    this.searchform = new FormGroup({
      search: new FormControl(''),
    });
  }

  constructor(private pokeApiService: PokeapiService, private router: Router) {}

  observeNav(): void {
    this.searchform.controls['search'].valueChanges.subscribe((value) => {
      if (value.trim() === '') {
        this.isDivOpen = false;
        this.pokemonsnav = [];
      } else {
        this.getPokemonsNav(value);
      }
    });
  }

  getPokemonsNav(name: string): void {
    this.pokeApiService
      .getPokemonNav(name)
      .pipe(
        map((response: any) => {
          return {
            name: response.name,
            sprites: response.sprites,
            types: response.types,
          };
        })
      )
      .subscribe({
        next: (filteredResponse: pokemonNav) => {
          this.pokemonsnav = [filteredResponse];
          this.isDivOpen = true;
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  getTypeImageUrl(typeName: string): string {
    return this.pokeApiService.pokemonType[typeName] || '';
  }

  getBorderColor(types: { type: { name: string } }[]): string {
    if (types && types.length > 0) {
      return this.pokeApiService.getTypeColor(types[0].type.name);
    }
    return '#000000';
  }
  goToPokemon(pokemonName: string): void {
    this.router.navigate([`/AngularDex/search-pokemon/${pokemonName}`]);
  }
}
