import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historian',
  templateUrl: './historian.component.html',
  styleUrls: ['./historian.component.css']
})
export class HistorianComponent implements OnInit {

  answer!: string;
  secondAnswer!: string;
  correctAnswer: string;
  secondCorrectAnswer: string;
  isErorrMessage: boolean;
  isSecondErorrMessage!: boolean;
  isFirstAnswerGiven!: boolean;
  isSecondAnswerGiven!: boolean;

  constructor() {     
    this.correctAnswer = '1968';
    this.secondCorrectAnswer = '1955';
    this.isErorrMessage = false;
  }

  ngOnInit(): void {
  }

  check() {
    if(this.answer.trim().toLowerCase() === this.correctAnswer) {
      console.log('Ответ верен!');
      this.isErorrMessage = false;
      this.isFirstAnswerGiven = true;
    } else {
      this.answer = '';
      this.isErorrMessage = true;
    }
  }

  secondCheck() {
    if(this.secondAnswer.trim().toLowerCase() === this.secondCorrectAnswer) {
      console.log('Ответ верен!');
      this.isSecondErorrMessage = false;
      this.isSecondAnswerGiven = true;
    } else {
      this.secondAnswer = '';
      this.isSecondErorrMessage = true;
    }
  }

  clearError() {
    this.isErorrMessage = false;
    this.isSecondErorrMessage = false;
  }

}
