import { Component } from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
  ],
  templateUrl: './options.component.html',
  styles: ``
})
export class OptionsComponent {

}
