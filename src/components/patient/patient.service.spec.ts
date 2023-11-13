import { Test, TestingModule } from '@nestjs/testing';
import { PatientService } from './patient.service';
import PatientRepository from './patient.repository';
import AddMedDto from '../medication/dto/medication.dto';

describe('PatientService', () => {
  let service: PatientService;

  const FakePatientRepository = {
    save: () => Promise.resolve([]),
    findOne: (id: number) => Promise.resolve([]),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PatientService,
        {
          provide: PatientRepository,
          useValue: FakePatientRepository,
        },
      ],
    }).compile();

    service = module.get<PatientService>(PatientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('addPatient', () => {
    it(`addPatient should be defined`, () => {
      expect(service.addPatient).toBeDefined();
    });
    it(`addPatient should be defined`, () => {
      const addPatientSpy = jest.spyOn(service, 'addPatient');
      const dto = new AddMedDto();
      service.addPatient(dto);
      expect(addPatientSpy).toHaveBeenCalled();
    });
  });

  describe('getPatient', () => {
    it(`getPatient should be defined`, () => {
      expect(service.getPatient).toBeDefined();
    });
    it(`getPatient should be called with expected param `, () => {
      const getPatientSpy = jest.spyOn(service, 'getPatient');
      const id = 1;
      service.getPatient(id);
      expect(getPatientSpy).toHaveBeenCalled();
    });
  });
});
