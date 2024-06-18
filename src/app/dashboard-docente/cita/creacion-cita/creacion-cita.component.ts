import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DdNavbarComponent } from '../../../shared/dd-navbar/dd-navbar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CitaService } from '../../../services/cita.service';
import { Router } from '@angular/router';
import { Cita } from '../../../interfaces/cita';
// import { CitaService } from '../../../../../../../back-end-odontologia-master/src/cita/cita.service';  // Importa el servicio

@Component({
  selector: 'app-creacion-cita',
  standalone: true,
  imports: [
      CommonModule, DdNavbarComponent, ReactiveFormsModule
  ],
  templateUrl: './creacion-cita.component.html',
  styleUrl: './creacion-cita.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreacionCitaComponent {
citaForm: FormGroup;

  constructor(
      private fb: FormBuilder,
      private citaService: CitaService,
      private router: Router
  ) {
      this.citaForm = this.fb.group({
          fecha: ['', Validators.required],
          hora: ['', Validators.required],
          odontologo: ['', [Validators.required]],
          motivo: ['', [Validators.required]],
          sede: ['', Validators.required],
          extras: ['', Validators.required],
      });
  }

  onSubmit() {
    if (this.citaForm.valid) {
      const newCita: Cita = this.citaForm.value;
      this.citaService.addCita(newCita).subscribe(response => {
        console.log('Cita creada', response);
      });
    }
  }
}
