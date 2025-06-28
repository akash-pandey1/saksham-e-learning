import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})
export class Signup {
  signupData = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  
  showPassword = false;
  showConfirmPassword = false;
  agreeToTerms = false;
  isLoading = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  toggleConfirmPassword() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  onSignup() {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    if (!this.agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    if (this.signupData.fullName && this.signupData.email && this.signupData.password) {
      this.isLoading = true;
      
      // Simulate API call
      setTimeout(() => {
        console.log('Signup attempt:', this.signupData);
        this.isLoading = false;
        // Here you would typically navigate to dashboard or show success message
      }, 2000);
    }
  }
}
