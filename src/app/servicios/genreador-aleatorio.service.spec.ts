import { TestBed } from '@angular/core/testing';

import { GenreadorAleatorioService } from './genreador-aleatorio.service';

describe('GenreadorAleatorioService', () => {
  let service: GenreadorAleatorioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenreadorAleatorioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
