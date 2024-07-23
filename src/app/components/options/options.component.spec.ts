import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { Router } from '@angular/router';
import { OptionsComponent } from './options.component';
// import { QuizService } from '../../service/quiz.service';

describe('OptionsComponent', () => {
  let component: OptionsComponent;
 let fixture: ComponentFixture<OptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(OptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });



});
