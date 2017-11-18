import {Component, OnInit} from '@angular/core';
//import {BanksService} from "../banks.service";
import {Bank} from "../interfaces";

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  banks: Bank[];

  constructor(/*private banksService: BanksService,*/) {
  }

  ngOnInit() {
    this.getBanks();

    this.banks = [{
      bank: "Barclaycard",
      interestMin: 1.89,
      interestMax: 4.99,
      monthlyRate: 873.63,
      totalLoanAmount: 55348.58,
      flags: [
        "videoident",
        "docupload"
      ]
    },
      {
        bank: "Bank of Scotland",
        interestMin: 1.95,
        interestMax: 5.25,
        monthlyRate: 874.92,
        totalLoanAmount: 54957.20,
        flags: [
          "videoident"
        ]
      },
    ];
  }


  getBanks() {

    /*this.banksService.getBanks().subscribe((response) => {
     this.banks = response

     })*/


  }

}
