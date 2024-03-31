import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  public email: string | undefined
  public password: string | undefined;
  public hidePassword: boolean = true;

  constructor() {
    
  }

  onSubmit = () => {

  }

  togglePasswordVisibility = (): boolean => this.hidePassword = !this.hidePassword;


}
