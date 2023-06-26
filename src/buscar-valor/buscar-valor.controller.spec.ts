import { Test, TestingModule } from '@nestjs/testing';
import { BuscarValorController } from './buscar-valor.controller';

describe('BuscarValorController', () => {
  let controller: BuscarValorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BuscarValorController],
    }).compile( );
    controller = module.get<BuscarValorController>(BuscarValorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined( );
  });
});
