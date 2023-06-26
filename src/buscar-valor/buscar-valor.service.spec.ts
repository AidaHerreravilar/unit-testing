import { Test, TestingModule } from '@nestjs/testing';
import { BuscarValorService } from './buscar-valor.service';

describe('BuscarValorService', () => {
  let service: BuscarValorService;

  beforeEach(async ( ) => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BuscarValorService],
    }).compile();

    service = module.get<BuscarValorService>(BuscarValorService);
  });

  it('should be defined', ( ) => {
    expect(service).toBeDefined();
  });
});
