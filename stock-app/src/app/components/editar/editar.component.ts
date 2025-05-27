import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent {
  itemName: string = '';
  itemId: number = 0;
  action: string = '';
  quantity: number = 0;
  isAdd: boolean = false;
  observation: string = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.itemName = params['name'];
      this.itemId = params['id'];
      this.action = params['action'];

      // Lógica para determinar si es "add" o "remove"
      if (this.action === 'add') {
        this.isAdd = true;
      } else  {
        this.isAdd = false;
      }
    });
  }

  // Usamos el servicio HttpService para enviar la solicitud POST
  submitForm() {
    // Validar que la cantidad y otros campos sean válidos antes de enviar
    if (this.quantity <= 0) {
      console.error('Cantidad inválida');
      return;
    }

    const data = {
      NombreItem: this.itemName,
      idItem: this.itemId,
      Movimiento: this.isAdd,
      cantidad: this.quantity,
      observacion: this.observation
    };

    this.http.post('item_update/', data).subscribe(
      response => {
        console.log('Respuesta recibida:', response);
        this.router.navigate(['/'], { queryParams: { refresh: true } }); // Redirigir a la página principal
      },
      error => {
        console.error('Error al hacer el POST:', error);
      }
    );
  }
}
