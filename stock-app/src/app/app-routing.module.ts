import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { StockComponent } from './pages/stock/stock.component';
import { EditarComponent } from './components/editar/editar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stock', component: StockComponent },
  { path: 'stock/editar', component: EditarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
