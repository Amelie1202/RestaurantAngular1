import { TestBed } from '@angular/core/testing';

import { CommandeplatService } from './commandeplat.service';

describe('CommandeplatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommandeplatService = TestBed.get(CommandeplatService);
    expect(service).toBeTruthy();
  });
});
