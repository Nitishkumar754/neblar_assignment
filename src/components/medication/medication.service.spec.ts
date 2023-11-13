import { Test, TestingModule } from '@nestjs/testing';
import { MedicationService } from './medication.service';
import MedicationRepository from './medication.repository';
import { IUpdateMed } from './interface/update-med.interface';
import AddMedDto from './dto/medication.dto';

describe('MedicationService', () => {
  let service: MedicationService;

  beforeEach(async () => {
    const FakeMedicationRepository: Partial<MedicationRepository> = {
      save: (data) => Promise.resolve(null),
      findOne: (id: number) => Promise.resolve(null),
      update: (id: number, updateObj: IUpdateMed) => Promise.resolve(null),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MedicationService,
        {
          provide: MedicationRepository,
          useValue: FakeMedicationRepository,
        },
      ],
    }).compile();

    service = module.get<MedicationService>(MedicationService);
  });

  describe('AddMed', () => {
    it('should be defined', () => {
      expect(service).toBeDefined();
    });

    it('addMed should be defined ', () => {
      expect(service.addMed).toBeDefined();
    });

    it(`addMed method should be called with expected param`, () => {
      const addMedSpy = jest.spyOn(service, 'addMed');
      const addMedOption = new AddMedDto();
      service.addMed(addMedOption);
      expect(addMedSpy).toBeCalledWith(addMedOption);
    });
  });

  describe('GetMed', () => {

    it('addMed should be defined ', () => {
      expect(service.getMed).toBeDefined();
    });

    it(`calling getMed by id`, () => {
      const getMedSpy = jest.spyOn(service, 'getMed');

      const dto = new AddMedDto();
      dto.patientNhi = '1';
      service.getMed(dto.patientNhi);
      expect(getMedSpy).toHaveBeenCalled();
    });
  });

  describe('UpdateMed', () => {

    it('UpdateMed should be defined ', () => {
      expect(service.update).toBeDefined();
    });

    it(`Update should be called with expected params`, () => {
      const getMedSpy = jest.spyOn(service, 'update');

      const dto = new IUpdateMed();
      service.update(1, dto);
      expect(getMedSpy).toHaveBeenCalled();
    });
  });
});
