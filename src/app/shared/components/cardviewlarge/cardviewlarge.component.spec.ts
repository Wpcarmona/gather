import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardviewlargeComponent } from './cardviewlarge.component';

describe('CardviewlargeComponent', () => {
  let component: CardviewlargeComponent;
  let fixture: ComponentFixture<CardviewlargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardviewlargeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardviewlargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
