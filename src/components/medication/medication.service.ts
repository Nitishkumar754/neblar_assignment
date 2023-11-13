import { Injectable } from '@nestjs/common';
import MedicationRepository from './medication.repository';
import { IUpdateMed } from './interface/update-med.interface';

@Injectable()
export class MedicationService {
  constructor(private readonly medicationRepo: MedicationRepository) {}

  public async addMed(data) {
    return this.medicationRepo.save(data);
  }

  public async getMed(id) {
    return this.medicationRepo.findOne(id);
  }
  public async update(id: number, updateObj: IUpdateMed) {
    return this.medicationRepo.update(id, updateObj);
  }
}
