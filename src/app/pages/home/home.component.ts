import { Component } from '@angular/core';
import {ContentComponent} from "../../components/content/content.component";
import {HeaderComponent} from "../../components/header/header.component";
// import {OptionsComponent} from "../../components/options/options.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ContentComponent,
    HeaderComponent,
    // OptionsComponent
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent {

}
