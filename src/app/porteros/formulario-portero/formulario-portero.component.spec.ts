import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPorteroComponent } from './formulario-portero.component';

describe('FormularioPorteroComponent', () => {
  let component: FormularioPorteroComponent;
  let fixture: ComponentFixture<FormularioPorteroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPorteroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioPorteroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
