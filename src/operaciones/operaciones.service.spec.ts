import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

    beforeEach(async () => {
      const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  //Test Suma
  it('operacion deberia sumar', () => {
    let a: any = 10;
    let b = 30;

    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = 50;
    expect(service.operar('suma', a, b)).toBe(40);

    a = -10;
    b = -50;
    expect(service.operar('suma', a, b)).not.toBe(-100);

    a = Math.PI;
    b = 30;
    expect(service.operar('suma', a, b)).toBeCloseTo(33.14, 2);

    a = null;
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('suma', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('suma', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });
//Test Resta
  it('operacion deberia restar', () => {
    let a: any = 50;
    let b: any = 30;

    expect(service.operar('resta', a, b)).toBe(20);

    a = -10;
    b = 50;
    expect(service.operar('resta', a, b)).toBe(-60);

    a = 10;
    b = -50;
    expect(service.operar('resta', a, b)).not.toBe(-40);

    a = 50;
    b = -10;
    expect(service.operar('resta', a, b)).not.toBe(40);

    a = -Math.PI;
    b = 30;
    expect(service.operar('resta', a, b)).toBeCloseTo(-33.14, 2);

    a = null;
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = 50;
    b = null;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('resta', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('resta', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  //Test multiplicacion
  it('operacion deberia multiplicar', () => {
    let a: any = 50;
    let b: any = 30;

    expect(service.operar('multiplicacion', a, b)).toBe(1500);

    a = -10;
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBe(-500);

    a = 10;
    b = -50;
    expect(service.operar('multiplicacion', a, b)).not.toBe(-40);

    a = Math.PI;
    b = 30;
    expect(service.operar('multiplicacion', a, b)).toBeCloseTo(94.25, 2);

    a = null;
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = 50;
    b = null;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('multiplicacion', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('multiplicacion', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

    a = 50;
    b = undefined;
    expect(() => {
      service.operar('multiplicacion', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  });

  //Test division
  it('operacion deberia division', () => {
    let a: any = 20;
    let b: any = 10;

    expect(service.operar('division', a, b)).toBe(2);

    a = -20;
    b = 10;
    expect(service.operar('division', a, b)).toBe(-2);

    a = 10;
    b = -50;
    expect(service.operar('division', a, b)).toBe(-0.2);

    a = 10;
    b = -50;
    expect(service.operar('division', a, b)).not.toBe(-40);

    a = Math.PI;
    b = 30;
    expect(service.operar('division', a, b)).toBeCloseTo(0.10, 2);

    a = null;
    b = 50;
    expect(service.operar('division', a, b)).toBeNaN();

    a = 50;
    b = null;
    expect(service.operar('division', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('division', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

    a = 50;
    b = undefined;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

    a = 50;
    b = 0;
    expect(() => {
      service.operar('division', a, b);
    }).toThrow('No se puede dividir entre cero.');
  });

  //Test potencia
  it('operacion deberia elevar en potencia, un numero elevado a otro.', () => {
    let a: any = 2;
    let b: any = 3;

    expect(service.operar('potencia', a, b)).toBe(8);

    a = -2;
    b = 3;
    expect(service.operar('potencia', a, b)).toBe(-8);

    a = 2;
    b = -3;
    expect(service.operar('potencia', a, b)).toBe(0.125);

    a = -2;
    b = 3;
    expect(service.operar('potencia', a, b)).not.toBe(-40);

    a = Math.PI;
    b = 2;
    expect(service.operar('potencia', a, b)).toBeCloseTo(9.87, 2);

    a = null;
    b = 50;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = 50;
    b = null;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = '10';
    b = 50;
    expect(service.operar('potencia', a, b)).toBeNaN();

    a = undefined;
    b = 50;
    expect(() => {
      service.operar('potencia', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

    a = 50;
    b = undefined;
    expect(() => {
      service.operar('potencia', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');

  });


  //Test factorial
  it('operacion factorial', () => {
    let a: any = 5;
    let b=0;
    expect(service.operar('factorial', a, b)).toBe(120);

    a = 4;
    b=0;
    expect(service.operar('factorial', a, b)).not.toBe(1);

    a = null;
    b=0;
    expect(service.operar('factorial', a, b)).toBeNaN();

    a = -2;
    b=0;
    expect(() => {
      service.operar('factorial', a, b);
    }).toThrow('El factorial permite números negativos.');

    a = '10';
    b=0;
    expect(service.operar('factorial', a, b)).toBeNaN();

    a = undefined;
    b=0;
    expect(() => {
      service.operar('factorial', a, b);
    }).toThrow('No se puede llamar con numeros indefinidos.');
  }); 

});
