import { NgModule } from '@angular/core';
import { MainPageComponent } from './main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { BasketPageComponent } from './basket-page/basket-page.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'basket', component: BasketPageComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
