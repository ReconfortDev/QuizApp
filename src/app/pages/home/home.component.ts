import { Component } from '@angular/core';
import {ContentComponent} from "../../components/content/content.component";
import {HeaderComponent} from "../../components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContentComponent,
    HeaderComponent,
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
