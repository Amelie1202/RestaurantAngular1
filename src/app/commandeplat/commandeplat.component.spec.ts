import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeplatComponent } from './commandeplat.component';

describe('CommandeplatComponent', () => {
  let component: CommandeplatComponent;
  let fixture: ComponentFixture<CommandeplatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandeplatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandeplatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
