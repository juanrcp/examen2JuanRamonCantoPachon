import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPorterosComponent } from './lista-porteros.component';

describe('ListaPorterosComponent', () => {
  let component: ListaPorterosComponent;
  let fixture: ComponentFixture<ListaPorterosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPorterosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPorterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
