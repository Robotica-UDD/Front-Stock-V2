import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent {

  items: any = [];

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['refresh']) {
        this.loadItems(); // Cargar los ítems nuevamente
      }
    });
  
    this.loadItems(); // Cargar ítems por primera vez
  }
  
  loadItems() {
    this.http.get('https://xatou-vivobook.tailee72e7.ts.net/item_update').subscribe(
      items => {
        this.items = items;
      },
      error => {
        console.error('Error al obtener los ítems:', error);
      }
    );
  }
}
