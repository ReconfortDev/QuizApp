import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {ContentComponent} from "./components/content/content.component";
import {HomeComponent} from "./pages/home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ContentComponent, HomeComponent],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'my-app';
}
