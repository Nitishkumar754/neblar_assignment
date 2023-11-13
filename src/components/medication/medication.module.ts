import { Module } from '@nestjs/common';
import { MedicationService } from './medication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import MedicationEntity from './medication.entity';
import MedicationRepository from './medication.repository';
import MedicationResolver from './medication.resolver';
import { PatientModule } from '../patient/patient.module';
@Module({
  imports: [TypeOrmModule.forFeature([MedicationEntity]), PatientModule],
  providers: [MedicationService, MedicationRepository, MedicationResolver],
})
export class MedicationModule {}
