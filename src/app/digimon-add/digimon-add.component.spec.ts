import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigimonAddComponent } from './digimon-add.component';

describe('DigimonAddComponent', () => {
  let component: DigimonAddComponent;
  let fixture: ComponentFixture<DigimonAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigimonAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigimonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
