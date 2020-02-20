import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeemployeComponent } from './listeemploye.component';

describe('ListeemployeComponent', () => {
  let component: ListeemployeComponent;
  let fixture: ComponentFixture<ListeemployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeemployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
