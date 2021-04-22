import { Component, OnInit } from '@angular/core';
import { Coin } from '../model/coin.model';
import { CoinService } from '../services/coin.service';
import { Router } from '@angular/router';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'list-coin',
  templateUrl: './list-coin.component.html',
  styleUrls: ['./list-coin.component.css']
})
export class ListCoinComponent implements OnInit {

  public loading = false;
  public coins: Coin[] = [];


  constructor(
    private router: Router,
    private alertService: AlertService,
    private coinService: CoinService) { }


  ngOnInit() {
  }

  getAllCoins(): void {
    this.loading = true;
    this.coins = [];

    this.coinService.getCoins()
      .subscribe(data => {
        this.coins = data;

        this.loading = false;
      }, err => {
        this.loading = false;

        this.alertService.error("Ocorreu um erro ao processar sua requisição!");
      });
  }


}
