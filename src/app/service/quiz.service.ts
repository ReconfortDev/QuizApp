import {Injectable, signal, WritableSignal} from '@angular/core';
import data from '../data.json'
import {Quiz, Quizzes} from "../models/quiz";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quizzes = data.quizzes
  currentQuiz = signal({} as Quiz);

  correctAnswers:number = 0
  correctAnswer:number = 0;
  currentStep = signal(0);

  getAllQuiz(): Quizzes {
    return this.quizzes;
  }

  setCurrentQuiz(index: number): void {
    this.currentQuiz.set(this.quizzes[index]);
  }

  getCurrentQuiz(): WritableSignal<Quiz> {
    // console.log(this.currentQuiz())
    return this.currentQuiz;
  }

  setCurrentStep(step: number): void {
    this.currentStep.set(step);
  }

  getCurrentStep(): WritableSignal<number> {
    return this.currentStep;
  }

  incrementStep(): void {
    this.currentStep.set(this.currentStep() + 1);
  }

  getScore(): number {
    return this.correctAnswers;
  }

}
