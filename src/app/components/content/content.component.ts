import {Component, inject} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {QuizService} from "../../service/quiz.service";
import {OptionsComponent} from "../options/options.component";
import {ScoresComponent} from "../scores/scores.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    OptionsComponent,
    NgIf,
    ScoresComponent
  ],
  templateUrl: './content.component.html',
  styles: ``
})
export class ContentComponent {
  quizzes = inject(QuizService);

  allQuizzes = this.quizzes.getAllQuiz()


  ChooseQuiz(index: number): void {
    this.quizzes.setCurrentQuiz(index);
  }

  protected readonly Object = Object;
}
