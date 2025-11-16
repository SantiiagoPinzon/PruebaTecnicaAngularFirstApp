import {Component, input} from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-housing-location',
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exterior photo of {{ housingLocation().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
      
       <a [routerLink]="['/details', housingLocation().id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.css'],
  standalone: true,
  imports: [RouterModule, CommonModule]
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
