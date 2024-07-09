import {RouterModule, Routes} from '@angular/router';
import {ContentComponent} from "./components/content/content.component";
import {ScoresComponent} from "./components/scores/scores.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: 'quiz', component: ContentComponent },
  { path: 'scores', component: ScoresComponent },
  { path: '**', redirectTo: '/quiz' }
];
