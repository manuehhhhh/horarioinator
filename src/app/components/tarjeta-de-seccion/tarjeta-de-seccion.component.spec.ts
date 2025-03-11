import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaDeSeccionComponent } from './tarjeta-de-seccion.component';

describe('TarjetaDeSeccionComponent', () => {
  let component: TarjetaDeSeccionComponent;
  let fixture: ComponentFixture<TarjetaDeSeccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaDeSeccionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarjetaDeSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
