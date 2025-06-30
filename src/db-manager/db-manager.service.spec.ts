import { Test, TestingModule } from '@nestjs/testing';
import { DbManagerService } from './db-manager.service';

describe('DbManagerService', () => {
  let service: DbManagerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DbManagerService],
    }).compile();

    service = module.get<DbManagerService>(DbManagerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('operacion getUser db-manager', () => {
    let a: any = 10;
    expect(service.getUser(a)).toEqual({ id: 10, nombre: 'Josefa' });
  });
});
