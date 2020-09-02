import { Component, OnInit } from '@angular/core';
import { GoodsService } from '../shared/services/goods.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  goods = [];
  constructor(private goodsService: GoodsService) {}

  ngOnInit(): void {
    this.goods = this.goodsService.getGoods();
  }
}
