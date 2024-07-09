import {Component, inject} from '@angular/core';
import { Router } from '@angular/router';
import { NgIf } from "@angular/common";
import { OptionsComponent } from '../options/options.component';
import {QuizService} from "../../service/quiz.service"; // Import OptionsComponent if it's in a different module

@Component({
  selector: 'app-scores',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './scores.component.html',
  styles: ``
})
export class ScoresComponent {
  score: number = 0;

  quizzes = inject(QuizService);

  constructor(private router: Router, private optionsComponent: OptionsComponent) {
    this.score = this.quizzes.getScore()
  }

  playAgain(): void {
    // Reset quiz state and navigate back to the quiz start
    this.router.navigateByUrl('/quiz');
  }
}
