import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDeputadoComponent } from './buscar-deputado.component';

describe('BuscarDeputadoComponent', () => {
  let component: BuscarDeputadoComponent;
  let fixture: ComponentFixture<BuscarDeputadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuscarDeputadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarDeputadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
