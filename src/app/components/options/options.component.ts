import { Component, WritableSignal, inject, signal } from '@angular/core';
import { NgClass, NgForOf, NgIf, NgOptimizedImage } from '@angular/common';
import { Question, Quiz, Quizzes } from '../../models/quiz';
import { QuizService } from '../../service/quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf,
    NgClass,
  ],
  templateUrl: './options.component.html',
  styles: ``
})
export class OptionsComponent {
  quizzes = inject(QuizService);
  currentQuiz: Quiz = {} as Quiz;
  currentQuestion: Question = {} as Question;
  correctAnswer: number = -1;
  totalCorrectAnswers: number = 0;
  submittedOption: boolean = false;
  answerSubmitted: boolean = false;
  selectedOption: WritableSignal<number> = signal(-1);
  errorMsg: WritableSignal<boolean> = signal(false);

  constructor(private router: Router) {
    this.initializeQuiz();
  }

  private initializeQuiz(): void {
    this.currentQuiz = this.quizzes.getCurrentQuiz()();
    this.loadQuestion();
  }

  private loadQuestion(): void {
    const currentStep = this.quizzes.getCurrentStep()();
    if (this.currentQuiz.questions && this.currentQuiz.questions.length > currentStep) {
      this.currentQuestion = this.currentQuiz.questions[currentStep];
      this.correctAnswer = this.currentQuestion.options.indexOf(this.currentQuestion.answer);
    }
  }

  ProgressBarTracker(): number {
    return (
      (100 * (this.quizzes.getCurrentStep()() + 1)) /
      this.currentQuiz.questions.length
    );
  }

  getAnswerId(index: number): void {
    this.selectedOption.set(this.selectedOption() !== index ? index : -1);
  }

  answering(): void {
    if (this.selectedOption() !== -1) {
      this.submitAnswer();
    } else {
      this.errorMsg.set(true);
    }
  }

  submitAnswer(): void {
    this.errorMsg.set(false);
    this.submittedOption = true;
    this.answerSubmitted = true;
    if (this.correctAnswer === this.selectedOption()) {
      this.totalCorrectAnswers++;
    }
  }

  nextQuestion(): void {
    const currentStep = this.quizzes.getCurrentStep()();
    if (currentStep < this.currentQuiz.questions.length - 1) {
      this.quizzes.incrementStep();
      this.submittedOption = false;
      this.selectedOption.set(-1);
      this.loadQuestion();
      this.answerSubmitted = false;
    } else {
      console.log('reached else');
      this.quizzes.setScore(this.totalCorrectAnswers);
      this.quizzes.resetCurrentQuiz();
      this.quizzes.setQuizFinished(true);
      this.router.navigate(['/quiz-results']);
    }
  }
}
