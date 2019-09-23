import { Component, OnInit } from '@angular/core';
import{InterestService} from '../Services/interest.service'
@Component({
  selector: 'app-mortgage',
  templateUrl: './mortgage.component.html',
  styleUrls: ['./mortgage.component.css']
})
export class MortgageComponent implements OnInit {

  constructor(private interestservice:InterestService) { }
  Total: number;
  years: number;
/*  Total: number;
  Amount: number = 5000;
  interestRate: number = 0.01;
  annualCompound: number = 1;
  years: number;
  calaulateinterest(): void {
  for (var counter: number = 1; counter < this.years + 1; counter++) {
  this.Total = this.Amount * Math.pow((1 +
  this.interestRate / this.annualCompound),
  (this.annualCompound * counter));
  }
}*/

calaulateinterest(): void{
  this.Total = this.interestservice.calaulateinterest(this.years);
}
  ngOnInit() {
  }

}
