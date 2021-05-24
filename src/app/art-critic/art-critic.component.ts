import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-art-critic',
  templateUrl: './art-critic.component.html',
  styleUrls: ['./art-critic.component.css']
})
export class ArtCriticComponent implements OnInit {

  answer!: string;
  secondAnswer!: string;
  correctAnswer: string;
  secondCorrectAnswer: string;
  secondCorrectAnswer2: string;
  isErorrMessage: boolean;
  isSecondErorrMessage!: boolean;
  isFirstAnswerGiven!: boolean;
  isSecondAnswerGiven!: boolean;

  constructor() {     
    this.correctAnswer = 'пейзаж';
    this.secondCorrectAnswer = 'айфон';
    this.secondCorrectAnswer2 = 'iphone';
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
    if((this.secondAnswer.trim().toLowerCase() === this.secondCorrectAnswer) || (this.secondAnswer.trim().toLowerCase() === this.secondCorrectAnswer2)) {
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
