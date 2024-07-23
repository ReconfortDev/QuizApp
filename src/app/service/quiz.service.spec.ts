import { TestBed } from '@angular/core/testing';
import { QuizService } from './quiz.service';
import data from '../data.json';
import {Quiz, Quizzes} from "../models/quiz";

describe('QuizService', () => {
  let service: QuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all quizzes', () => {
    const quizzes: Quizzes = service.getAllQuiz();
    expect(quizzes).toEqual(data.quizzes);
  });

  it('should set current quiz', () => {
    service.setCurrentQuiz(0);
    expect(service.getCurrentQuiz()()).toEqual(data.quizzes[0]);
  });

  it('should get current quiz', () => {
    service.setCurrentQuiz(0);
    const currentQuiz = service.getCurrentQuiz();
    expect(currentQuiz()).toEqual(data.quizzes[0]);
  });

  it('should set current step', () => {
    service.setCurrentStep(2);
    expect(service.getCurrentStep()()).toBe(2);
  });

  it('should increment step', () => {
    service.setCurrentStep(1);
    service.incrementStep();
    expect(service.getCurrentStep()()).toBe(2);
  });

  it('should set score', () => {
    service.setScore(5);
    expect(service.getScore()()).toBe(5);
  });

  it('should get score', () => {
    service.setScore(3);
    const score = service.getScore();
    expect(score()).toBe(3);
  });

  it('should set quiz finished status', () => {
    service.setQuizFinished(true);
    expect(service.getQuizFinished()()).toBe(true);
  });

  it('should get quiz finished status', () => {
    service.setQuizFinished(true);
    const isFinished = service.getQuizFinished();
    expect(isFinished()).toBe(true);
  });

  it('should reset current quiz', () => {
    service.setCurrentQuiz(0);
    service.resetCurrentQuiz();
    expect(service.getCurrentQuiz()()).toEqual({} as Quiz);
  });
});
