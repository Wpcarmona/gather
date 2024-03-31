import { Component } from '@angular/core';
import { CardviewlargeComponent, PagecontainerComponent } from '../../shared/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ PagecontainerComponent, CardviewlargeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(){


  }


  

}
