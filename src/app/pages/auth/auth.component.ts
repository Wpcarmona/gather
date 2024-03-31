import { Component} from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    LoginComponent,
    RegisterComponent,
    ResetpasswordComponent
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent  {

  public login: boolean = true;

  constructor() {}


  

  


}
