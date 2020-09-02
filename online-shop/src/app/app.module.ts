import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GoodsItemComponent } from './main-page/goods-item/goods-item.component';
import { BasketPageComponent } from './basket-page/basket-page.component';
import { AddedGoodsItemComponent } from './basket-page/added-goods-item/added-goods-item.component';
import { AppRoutingModule } from './app-routing.module';
import { BasketFilterPipe } from './shared/pipes/basket-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GoodsItemComponent,
    BasketPageComponent,
    AddedGoodsItemComponent,
    BasketFilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
