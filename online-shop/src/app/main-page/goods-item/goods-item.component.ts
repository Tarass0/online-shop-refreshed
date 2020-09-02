import { Component, Input, OnInit } from '@angular/core';
import { GoodsItem } from '../../shared/interfaces/goodsItem-interface';
import { GoodsService } from '../../shared/services/goods.service';

@Component({
  selector: 'app-goods-item',
  templateUrl: './goods-item.component.html',
  styleUrls: ['./goods-item.component.scss'],
})
export class GoodsItemComponent implements OnInit {
  @Input() goodsItem: GoodsItem;
  isGoodsItemAlreadyInBasket = false;
  messageForAddBth = '';
  constructor(private goodsService: GoodsService) {}

  ngOnInit(): void {
    const goodsItemInBasket = this.goodsService
      .getGoodsAddedToBasket()
      .find((goodsItem) => goodsItem.id === this.goodsItem.id);
    if (goodsItemInBasket) {
      this.isGoodsItemAlreadyInBasket = true;
      this.messageForAddBth = 'Already added to basket';
    } else {
      this.messageForAddBth = 'Add to basket';
    }
  }

  addGoodsItemToBasket(): void {
    const goodsItemInBasket = this.goodsService
      .getGoodsAddedToBasket()
      .find((goodsItem) => goodsItem.id === this.goodsItem.id);
    if (goodsItemInBasket) {
      this.isGoodsItemAlreadyInBasket = true;
      this.messageForAddBth = 'Add to basket';
    } else {
      this.goodsService.addGoodsItemToBasket(this.goodsItem);
      this.isGoodsItemAlreadyInBasket = true;
      this.messageForAddBth = 'Already added to basket';
    }
  }
  removeGoodsItemFromBasket(): void {
    this.goodsService.removeGoodsItemFromBasket(this.goodsItem);
    this.isGoodsItemAlreadyInBasket = false;
    this.messageForAddBth = 'Add to basket';
  }
}
