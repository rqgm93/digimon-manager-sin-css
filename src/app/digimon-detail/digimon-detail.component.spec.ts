import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonDetailComponent } from './digimon-detail.component';

describe('DigimonDetailComponent', () => {
  let component: DigimonDetailComponent;
  let fixture: ComponentFixture<DigimonDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
