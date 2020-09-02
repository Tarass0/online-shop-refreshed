import { Pipe, PipeTransform } from '@angular/core';
import { GoodsItem } from '../interfaces/goodsItem-interface';

@Pipe({
  name: 'basketFilter',
})
export class BasketFilterPipe implements PipeTransform {
  transform(goodsItems: GoodsItem[], filterState: string = 'default'): GoodsItem[] {
    switch (filterState) {
      case 'default':
        return goodsItems;
      case 'byLittlePrice':
        return goodsItems.slice().sort((prev, next) => prev.price - next.price);
      case 'byBiggestPrice':
        return goodsItems.slice().sort((prev, next) => next.price - prev.price);
    }
  }
}
