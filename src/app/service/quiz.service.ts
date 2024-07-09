import {Injectable, signal, WritableSignal} from '@angular/core';
import data from '../data.json'
import {Quiz, Quizzes} from "../models/quiz";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quizzes = data.quizzes
  currentQuiz = signal({} as Quiz);

  correctAnswers = signal(0)
  correctAnswer:number = 0;
  currentStep = signal(0);

  isQuizFinished = signal(false)

  getAllQuiz(): Quizzes {
    return this.quizzes;
  }

  setCurrentQuiz(index: number): void {
    console.log('setting current quiz')
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

  setScore(score: number): void {
    this.correctAnswers.set(score);
  }

  getScore(): WritableSignal<number>  {
    return this.correctAnswers;
  }

  getQuizFinished(): WritableSignal<Boolean> {
    return this.isQuizFinished;
  }

  setQuizFinished(status: boolean): void {
    this.isQuizFinished.set(status);
  }

  resetCurrentQuiz(): void {
    this.currentQuiz.set({} as Quiz)
  }
}
