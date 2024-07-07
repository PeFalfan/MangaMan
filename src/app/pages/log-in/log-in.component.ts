import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

  formularioLogIn!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formularioLogIn = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  submitForm() {
    if (this.formularioLogIn.valid) {
      alert('Bienvenido: ' + this.formularioLogIn.get('email')!.value)
    } else {
      alert('Error al iniciar sesión')
    }
  }

}
