import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservaService } from '../reserva.service';

@Component({
  selector: 'app-reservas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {
  reservas: any[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit() {
    this.reservaService.getReservas().subscribe(data => {
      this.reservas = data;
    });
  }
}
