import {Injectable, signal, WritableSignal} from '@angular/core';
import data from '../data.json'
import {Quiz, Quizzes} from "../models/quiz";

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes: Quizzes = data.quizzes
  currentQuiz = signal({} as Quiz);

  getCurrentQuiz(): Quizzes {
    return this.quizzes;
  }

  setCurrentQuiz(index: number): void {
    this.currentQuiz.set(this.quizzes[index]);
  }

  getCurrentQuizInstance(): WritableSignal<Quiz> {
    return this.currentQuiz;
  }
}
