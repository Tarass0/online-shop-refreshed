import { Injectable } from '@angular/core';
import { GoodsItem } from '../interfaces/goodsItem-interface';
import { GoodsItemInBasket } from '../interfaces/goodsItemInBasket-interface';

@Injectable({
  providedIn: 'root',
})
export class GoodsService {
  goods: Array<GoodsItem> = [
    {
      id: 1,
      name: 'Sex on the Beach',
      label:
        '«Sex on the Beach» (Секс на пляжі), «Sand in your shorts» ( Пісок в шортах) або «Fun on the Beach» (Веселощі на пляжі) – екзотично м’який смак.',
      price: 25,
      src: '../../../assets/images/Koktejl-Sex-on-the-Beach.jpg',
    },
    {
      id: 2,
      name: 'Long Island Ice Tea',
      label:
        '«Long Island Ice Tea» – коктейль придумано за часів заборони на алкоголь, тому він більш схожий на холодний чай, подавали його в чашках для чаю, офіційно став популярним в 70-і.',
      price: 35,
      src: '../../../assets/images/Koktejl-Long-Island-Ice-Tea.jpg',
    },
    {
      id: 3,
      name: 'Cosmopolitan',
      label:
        '«Cosmopolitan» – яскравий і насичений коктейль світового рівня. За однією з версій коктейль створила Шеріл Кук – дівчина-бармен з міста Південний Берег (Флорида) в 1986 році.',
      price: 45,
      src: '../../../assets/images/Koktejl-Cosmopolitan.jpg',
    },
  ];
  goodsAddedToBasket: Array<GoodsItemInBasket> = [];
  constructor() {}
  getGoods(): Array<GoodsItem> {
    return this.goods;
  }
  getGoodsAddedToBasket(): Array<GoodsItemInBasket> {
    this.setGoodsAddedToBasket();
    return this.goodsAddedToBasket;
  }
  setGoodsAddedToBasket(): void {
    const addedGoodsFromLocalStorage = JSON.parse(localStorage.getItem('goodsInBasket'));
    if (addedGoodsFromLocalStorage) {
      this.goodsAddedToBasket = addedGoodsFromLocalStorage;
    }
  }
  addGoodsItemToBasket(goodsItem): void {
    goodsItem.count = 1;
    this.goodsAddedToBasket.unshift(goodsItem);
    localStorage.setItem('goodsInBasket', JSON.stringify(this.goodsAddedToBasket));
  }
  updateGoodsItemCountInBasket(goodsItemId, count): void {
    const goodsItem = this.goodsAddedToBasket.find((item) => item.id === goodsItemId);
    if (goodsItem) {
      goodsItem.count = count;
    }
    localStorage.setItem('goodsInBasket', JSON.stringify(this.goodsAddedToBasket));
  }
  removeGoodsItemFromBasket(goodsItem): void {
    this.goodsAddedToBasket = this.goodsAddedToBasket.filter(item => item.id !== goodsItem.id);
    this.goodsAddedToBasket.length === 0
      ? localStorage.removeItem('goodsInBasket')
      : localStorage.setItem('goodsInBasket', JSON.stringify(this.goodsAddedToBasket));
  }
}
