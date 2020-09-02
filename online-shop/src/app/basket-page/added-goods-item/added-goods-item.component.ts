import { Component, DoCheck, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { GoodsService } from '../../shared/services/goods.service';
import { Subject } from 'rxjs';
import { GoodsItemInBasket } from '../../shared/interfaces/goodsItemInBasket-interface';

@Component({
  selector: 'app-added-goods-item',
  templateUrl: './added-goods-item.component.html',
  styleUrls: ['./added-goods-item.component.scss'],
})
export class AddedGoodsItemComponent implements OnInit, DoCheck {
  @Input() goodsItem: GoodsItemInBasket;
  @Input() index: number;
  @Output() removedGoodsItem: EventEmitter<any> = new EventEmitter();
  changeCount = new Subject();
  currentCount = null;
  maxCountOrders = 1000;
  totalPriceForGoodsItem = null;
  showInfoMessage = false;
  constructor(private goodsService: GoodsService) {}

  ngOnInit(): void {
    this.currentCount = this.goodsItem.count;
    this.changeCount.subscribe((currentCount: number) => {
      this.totalPriceForGoodsItem = currentCount * this.goodsItem.price;
    });
  }
  ngDoCheck(): void {
    if (this.currentCount > 0 && this.currentCount <= this.maxCountOrders) {
      this.changeCount.next(this.currentCount);
      this.goodsService.updateGoodsItemCountInBasket(this.goodsItem.id, this.currentCount);
    }
  }
  inputValueValidation(): void {
    if (this.currentCount < 0) {
      this.currentCount = 1;
    } else if (this.currentCount > this.maxCountOrders) {
      this.showInfoMessage = true;
      this.currentCount = this.maxCountOrders;
    } else {
      this.showInfoMessage = false;
    }
  }

  checkInputValue(): void {
    if (this.currentCount === null) {
      this.currentCount = 1;
    }
  }
  onChangeCountByArrow(): void {
    this.goodsService.updateGoodsItemCountInBasket(this.goodsItem.id, this.currentCount);
  }

  removeGoodsItemFromBasket(): void {
    this.goodsService.removeGoodsItemFromBasket(this.goodsItem);
    this.removedGoodsItem.emit(null);
  }
}
