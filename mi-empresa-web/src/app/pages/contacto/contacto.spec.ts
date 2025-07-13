import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Contacto } from './contacto';

describe('Contacto', () => {
  let component: Contacto;
  let fixture: ComponentFixture<Contacto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contacto]
    }).compileComponents();

    fixture = TestBed.createComponent(Contacto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should send the form and show thank you message', () => {
    component.nombre = 'Juan';
    component.email = 'juan@test.com';
    component.mensaje = 'Hola';
    component.enviarFormulario();

    expect(component.enviado).toBeTrue();
  });
});
