import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListetablesComponent } from './listetables.component';

describe('ListetablesComponent', () => {
  let component: ListetablesComponent;
  let fixture: ComponentFixture<ListetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
