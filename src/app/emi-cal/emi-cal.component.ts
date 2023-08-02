import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-emi-cal',
  templateUrl: './emi-cal.component.html',
  styleUrls: ['./emi-cal.component.css']
})
export class EmiCalComponent implements OnInit {
  min = 100000;
  max = 10000000;
  math = Math;
  monthly_interest_amount: any = 0;
  monthly_principal_amount: any = 0;
  balance_principal: any = 0;
  table_list: any = [];
  convertTxt =''
  data = {};

  @Input() amount = 100000;
  @Input() interestRate = 7
  @Input() tenure = 1;
  @Input() emi = 0;
  @Input() extraPreEmi = 1;

  // charts
  monthsTenure: any;
  totalInterest: any;
  totalPayable: any;
  no_Months: any = [];
  monthNames: any =[];
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    console.log(changes);
    // this.description = this.getDescription();

  }


  ngOnInit() {
    this.calculate()
  }


  calculate() {
    if (this.tenure > 30 || this.tenure == 0) {
      this.tenure = 1;
      return
    }
    const principal = this.amount;
    const rateOfInterest = this.interestRate / 100 / 12;
    const tenureInMonths = this.tenure * 12;
    const numerator = rateOfInterest * Math.pow(1 + rateOfInterest, tenureInMonths);
    const denominator = Math.pow(1 + rateOfInterest, tenureInMonths) - 1;
    this.emi = principal * (numerator / denominator);
    //this.emi= Math.round(this.emi)
    this.totalInterest = this.emi * tenureInMonths - principal;
    //this.emi = Math.round(this.emi)
    this.totalInterest = Math.round(this.totalInterest)
    console.log(this.totalInterest);
    this.totalPayable = 0;
    this.totalPayable = Number(this.amount) + Number(this.totalInterest);
    console.log(this.totalPayable);
    this.totalPayable = this.emi * (this.tenure * 12) + this.extraPreEmi;
    this.monthNames = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    this.pieChartFnc()

    // initialization
    this.balance_principal = 0;
    this.monthly_interest_amount = 0;
    this.monthly_principal_amount = 0;
    this.balance_principal = 0;
    this.balance_principal = this.amount;
    this.table_list = [];

    for (let i = 1; i <= tenureInMonths; i++) {
      this.monthly_interest_amount = (this.interestRate / 12) * this.balance_principal / 100;

      this.monthly_principal_amount = this.emi - this.monthly_interest_amount;

      this.balance_principal = this.balance_principal - this.monthly_principal_amount;

      this.table_list.push({ 'year': this.monthNames[i-1], 'monthly_interest': this.monthly_interest_amount, 'month_principal': this.monthly_principal_amount,'totalPaid': this.monthly_interest_amount + this.monthly_principal_amount, 'balance': this.balance_principal });

    }
    console.log(this.table_list)
  }

  pieChartFnc() {
    this.data = {
      labels: ['Total Ineterest', 'Pricipal Amount'],
      datasets: [
        {
          data: [this.totalInterest, this.amount],
          backgroundColor: [
            "#66BB6A",
            "#42A5F5"
            // "#FFA726"
          ],

        }
      ]
    };
  }

  // convertTenure(val:any){
  //   if(val=='Y'){
  //     this.tenure = this.tenure % 12
  //     console.log(this.tenure)
  //     //this.tenure = Math.floor(val / 12),
  //   }
  // }

}

