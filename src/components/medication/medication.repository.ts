import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import MedicationEntity from './medication.entity';
import { Repository, InsertResult } from 'typeorm';
import { IUpdateMed } from './interface/update-med.interface';

@Injectable()
export default class MedicationRepository {
  constructor(
    @InjectRepository(MedicationEntity)
    private readonly medicationModel: Repository<MedicationEntity>,
  ) {}

  public async save(data): Promise<any> {
    const medication = await this.medicationModel.create(data);
    const saved = await this.medicationModel.save(medication);
    return saved;
  }

  public async findOne(id: number) {
    return this.medicationModel.findOne({ where: { id } });
  }

  public async update(id: number, updateObj: IUpdateMed) {
    return this.medicationModel.update({ id }, updateObj);
  }
}
