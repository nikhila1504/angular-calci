import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private firstNumber:number;
  private secondNumber:number;
  private result:number;
  
  public add():void{
   this.result=this.firstNumber + this.secondNumber;
  }
  public sub():void{
    this.result=this.firstNumber - this.secondNumber;
  }
  public mul():void{
    this.result=this.firstNumber * this.secondNumber;
  }
  public div():void{
    this.result=this.firstNumber/this.secondNumber;
}
}
