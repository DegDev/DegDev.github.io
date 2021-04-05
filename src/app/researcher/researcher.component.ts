import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-researcher',
  templateUrl: './researcher.component.html',
  styleUrls: ['./researcher.component.css']
})
export class ResearcherPage implements OnInit {

  answer!: string;
  correctAnswer: string;
  isErorrMessage: boolean;
  isFirstAnswerGiven!: boolean;

  constructor() { 
    this.correctAnswer = '16';
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
