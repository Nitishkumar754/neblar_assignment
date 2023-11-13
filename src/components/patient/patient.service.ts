import { Injectable } from '@nestjs/common';
import PatientRepository from './patient.repository';

@Injectable()
export class PatientService {
  constructor(private readonly patientRepo: PatientRepository) {}

  public async addPatient(data) {
    return this.patientRepo.save(data);
  }

  public async getPatient(id) {
    const data = await this.patientRepo.findOne(id);
    return data;
  }
}
