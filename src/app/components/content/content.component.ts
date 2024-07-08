import {Component, inject} from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {QuizService} from "../../service/quiz.service";
import {OptionsComponent} from "../options/options.component";

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgForOf,
    OptionsComponent
  ],
  templateUrl: './content.component.html',
  styles: ``
})
export class ContentComponent {
  quizzes = inject(QuizService);

  allQuizzes = this.quizzes.getCurrentQuiz()

  ChooseQuiz(index: number): void {
    this.quizzes.setCurrentQuiz(index);
  }

}
