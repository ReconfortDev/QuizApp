import {Component, inject, signal, WritableSignal} from '@angular/core';
import { NgIf } from "@angular/common";
import {QuizService} from "../../service/quiz.service"; // Import OptionsComponent if it's in a different module
import {Router} from "@angular/router";

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
  score: WritableSignal<number> = signal(0);

  quizzes = inject(QuizService);

  constructor(private router: Router) {
    this.score = this.quizzes.getScore()
  }

  playAgain(): void {
    window.location.reload()
  }
}
