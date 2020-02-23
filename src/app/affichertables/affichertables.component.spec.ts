import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichertablesComponent } from './affichertables.component';

describe('AffichertablesComponent', () => {
  let component: AffichertablesComponent;
  let fixture: ComponentFixture<AffichertablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichertablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichertablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
