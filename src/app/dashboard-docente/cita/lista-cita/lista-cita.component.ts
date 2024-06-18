import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';
import { FormsModule } from '@angular/forms';
import { CitaService } from '../../../services/cita.service';
import { Cita } from '../../../interfaces/cita';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-cita',
  standalone: true,
  imports: [CommonModule, DdNavbarComponent, FormsModule],
  templateUrl: './lista-cita.component.html',
  styleUrl: './lista-cita.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ListaCitaComponent implements OnInit {
  public citaResults$!: Observable<Cita[]>;

  constructor(private service: CitaService) { }

  ngOnInit(): void {
    this.citaResults$ = this.service.getCitaList();
    this.citaResults$.subscribe((response: Cita[]) => {
      console.log('response', response);
    });
  }
}