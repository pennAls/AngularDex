import { Component } from '@angular/core';
import { PosterComponent } from '../../commons/poster/poster.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [PosterComponent,RouterOutlet],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent {

}
