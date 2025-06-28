import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {
  loginData = {
    email: '',
    password: ''
  };
  
  showPassword = false;
  rememberMe = false;
  isLoading = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    if (this.loginData.email && this.loginData.password) {
      this.isLoading = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Login attempt:', this.loginData);
        this.isLoading = false;
        // Here you would typically navigate to dashboard or show success message
      }, 2000);
    }
  }
}
