import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Answer, Question } from '../question';

@Component({
  selector: 'app-trivia-question',
  templateUrl: './trivia-question.component.html',
  styleUrls: ['./trivia-question.component.css']
})
export class TriviaQuestionComponent implements OnInit {

  @Input() public question: Question;
  @Output() public answeredEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() public shouldDisplay: boolean;

  constructor() { }

  ngOnInit() {
  }

  public onAnswerSelected(index: number): void {

    this.answeredEvent.emit(this.question.answers[index].correct);

  }

}
