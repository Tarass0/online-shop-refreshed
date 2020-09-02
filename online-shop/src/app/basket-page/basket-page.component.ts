import { Component, DoCheck, OnInit } from '@angular/core';
import { GoodsService } from '../shared/services/goods.service';
import { GoodsItemInBasket } from '../shared/interfaces/goodsItemInBasket-interface';

@Component({
  selector: 'app-basket-page',
  templateUrl: './basket-page.component.html',
  styleUrls: ['./basket-page.component.scss'],
})
export class BasketPageComponent implements OnInit, DoCheck {
  goodsInBasket: Array<GoodsItemInBasket> = [];
  currentFilterSortState = 'default';
  totalPrice = 0;
  constructor(private goodsService: GoodsService) {}

  ngOnInit(): void {
    this.goodsInBasket = this.goodsService.getGoodsAddedToBasket();
    this.totalPrice = this.goodsInBasket.reduce((sum, currentItem) => {
      return sum + currentItem.price * currentItem.count;
    }, 0);
  }
  ngDoCheck(): void {
    this.totalPrice = this.goodsService.getGoodsAddedToBasket().reduce((sum, currentItem) => {
      return sum + currentItem.price * currentItem.count;
    }, 0);
  }

  onRemoveGoodsItem(val): void {
    this.goodsInBasket = this.goodsService.getGoodsAddedToBasket();
  }
}
