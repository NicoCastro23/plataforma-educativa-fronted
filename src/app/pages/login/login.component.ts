// src/app/pages/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { LoginRequestDto } from '../../models/login-request.dto';
import { AuthResponseDto } from '../../models/auth-response.dto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    const data: LoginRequestDto = { email: this.email, password: this.password };
    this.authService.login(data).subscribe({
      next: (res: AuthResponseDto) => {
        if (res.ok && res.token) {
          localStorage.setItem('token', res.token);
          this.message = `Bienvenido, ${res.name} (${res.role})`;
        } else {
          this.message = res.message || 'Error en la autenticación';
        }
      },
      error: (err) => {
        this.message = err.error?.message || 'Error de red o servidor';
      },
    });
  }
}