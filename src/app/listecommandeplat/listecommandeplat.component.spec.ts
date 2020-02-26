import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecommandeplatComponent } from './listecommandeplat.component';

describe('ListecommandeplatComponent', () => {
  let component: ListecommandeplatComponent;
  let fixture: ComponentFixture<ListecommandeplatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListecommandeplatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecommandeplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
