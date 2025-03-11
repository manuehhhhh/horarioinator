import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaTotalComponent } from './lista-total.component';

describe('ListaTotalComponent', () => {
  let component: ListaTotalComponent;
  let fixture: ComponentFixture<ListaTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
