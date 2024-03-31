import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent, HomeComponent } from './pages';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, AuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'gather';
}
