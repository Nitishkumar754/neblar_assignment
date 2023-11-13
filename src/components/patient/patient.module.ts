import { Module } from '@nestjs/common';
import { PatientService } from './patient.service';
import PatientRepository from './patient.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import PatientEntity from './patient.entity';
import PatientResolver from './patient.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PatientEntity])],
  providers: [PatientService, PatientRepository, PatientResolver],
  exports: [PatientRepository, PatientService],
})
export class PatientModule {}
