import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagecontainer',
  standalone: true,
  imports: [],
  templateUrl: './pagecontainer.component.html',
  styleUrl: './pagecontainer.component.scss'
})
export class PagecontainerComponent implements OnInit, OnDestroy, OnChanges {

  constructor() {}

  ngOnInit(): void {
   }

  ngOnChanges(changes: SimpleChanges): void {
  }
  ngOnDestroy(): void {
  }

  
}
