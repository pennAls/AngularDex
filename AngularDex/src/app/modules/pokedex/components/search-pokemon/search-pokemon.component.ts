import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../../services/pokeapi.service';
import { pokemonNav } from '../../models/search.model';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs/operators';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [ReactiveFormsModule,MatListModule],
  templateUrl: './search-pokemon.component.html',
  styleUrl: './search-pokemon.component.css',
})
export class SearchPokemonComponent implements OnInit {
  pokemonsnav?: pokemonNav[] = [];
  searchform!: FormGroup;

  ngOnInit(): void {
    this.buildform();
    this.observeNav();
  }

  private buildform(): void {
    this.searchform = new FormGroup({
      search: new FormControl(''),
    });
  }

  constructor(private pokeApiService: PokeapiService) {}

  private observeNav(): void {
    this.searchform.controls['search'].valueChanges.subscribe((value) => {
      console.log(value);
      this.getPokemonsNav(value);
    });
  }

  private getPokemonsNav(name: string): void {
    this.pokeApiService
      .getPokemonNav(name)
      .pipe(
        map((response: any) => {
          return {
            name: response.name,
            sprites: response.sprites,
            type: response.type,
          };
        })
      )
      .subscribe({
        next: (filteredResponse: pokemonNav) => {
          this.pokemonsnav = [filteredResponse];
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
