import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.css']
})
export class BmiComponent{
public height:number;
public weight:number;
public bmi:number;
  constructor() {
    this.bmi = 0;
    this.height = 0;
    this.weight = 0;
  }




  calculateBmi(){
    this.bmi = this.weight / (this.height*this.height);
  }
  getBmi():number{
    return this.bmi;
}
}
