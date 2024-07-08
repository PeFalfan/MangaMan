import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
      password1: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      // continuar con formulario correcto, falta validar credenciales con servicio.
      alert("REGISTRO OK" + this.registerForm.get('name')!.value);
    } else {
      alert("Algun error que tambien hay que trabajar con los servicios.");
    }
  }
}
