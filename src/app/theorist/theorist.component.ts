import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theorist',
  templateUrl: './theorist.component.html',
  styleUrls: ['./theorist.component.css']
})
export class TheoristPage implements OnInit {

  answer!: string;
  correctAnswer: string;
  isErorrMessage: boolean;
  isFirstAnswerGiven!: boolean;

  constructor() {     
    this.correctAnswer = 'точка';
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

  clearError() {
    this.isErorrMessage = false;
  }


}
