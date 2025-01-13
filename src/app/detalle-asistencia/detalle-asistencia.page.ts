import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-asistencia',
  templateUrl: './detalle-asistencia.page.html',
  styleUrls: ['./detalle-asistencia.page.scss'],
  standalone: false,
})
export class DetalleAsistenciaPage implements OnInit {

 constructor(private popoverCtrl: DetalleAsistenciaPage) {}

  aplicarFiltros() {
    // Implementar lógica de filtrado
    
  }

  limpiarFiltros() {
    // Implementar lógica de limpieza
    
  }

  ngOnInit() {
  }

}
