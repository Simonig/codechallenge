import {Component, OnInit} from '@angular/core';
//import {BanksService} from "../banks.service";
import {Bank} from "../interfaces";
import {BanksService} from "../banks.service";

@Component({
  selector: 'app-banks',
  templateUrl: './banks.component.html',
  styleUrls: ['./banks.component.css']
})
export class BanksComponent implements OnInit {

  banks: Bank[];

  constructor(private banksService: BanksService,) {
  }

  ngOnInit() {
    this.getBanks();

  }


  getBanks() {

    this.banksService.getBanks().subscribe((response) => {
     this.banks = response

     })


  }

}
