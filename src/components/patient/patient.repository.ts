import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import PatientEntity from './patient.entity';

@Injectable()
export default class PatientRepository {
  constructor(
    @InjectRepository(PatientEntity)
    private readonly patientModel: Repository<PatientEntity>,
  ) {}

  public save(data: Partial<PatientEntity>) {
    return this.patientModel.save(data);
  }

  public findOne(id: number): Promise<PatientEntity> {
    return this.patientModel.findOne({
      where: { nhi: id },
    });
  }
}
