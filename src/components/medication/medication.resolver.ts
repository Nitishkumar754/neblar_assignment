import { Resolver, Mutation, Args } from '@nestjs/graphql';
import MedicationEntity from './medication.entity';
import AddMedDto from './dto/medication.dto';
import UpdateMedDto from './dto/update-medication.dto';
import { IUpdateMed } from './interface/update-med.interface';
import { GraphQLError } from 'graphql';
import { MedicationService } from './medication.service';
import { PatientService } from '../patient/patient.service';
import { Logger } from '@nestjs/common';
@Resolver()
export default class MedicationResolver {
  private readonly logger = new Logger(MedicationResolver.name);
  constructor(
    private readonly medService: MedicationService,
    private readonly patientService: PatientService,
  ) {}

  @Mutation(() => MedicationEntity, { name: 'AddPrescription' })
  public async AddMedication(
    @Args('input', { type: () => AddMedDto })
    payload: AddMedDto,
  ): Promise<any> {
    try {
      const { patientNhi, dosage } = payload;

      const patient = await this.patientService.getPatient(Number(patientNhi));
      if (!patient) throw new GraphQLError('Invalid patientNhi');
      const medPayload = {
        patient: patientNhi,
        dosage,
      };
      return this.medService.addMed(medPayload);
    } catch (e) {
      return e;
    }
  }

  @Mutation(() => MedicationEntity, { name: 'UpdatePrescription' })
  public async updateMedication(
    @Args('input', { type: () => UpdateMedDto })
    payload: UpdateMedDto,
  ): Promise<any> {
    const { medId } = payload;
    this.logger.debug(`UpdatePrescription Called!`);
    try {
      const medication = await this.medService.getMed(Number(medId));
      if (!medication) throw new GraphQLError('Invalid medId provided');
      const updateObj: IUpdateMed = {};
      if (payload.dosage) updateObj.dosage = payload.dosage;
      await this.medService.update(Number(medId), updateObj);
      return this.medService.getMed(Number(medId));
    } catch (e) {
      return e;
    }
  }
}
