import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import PatientEntity from './patient.entity';
import AddPatientDto from './dto/addPatient.dto';
import { PatientService } from './patient.service';
@Resolver(() => PatientEntity)
export default class PatientResolver {
  constructor(private readonly patientService: PatientService) {}
  @Query(() => PatientEntity, { name: 'getPrescription' })
  public async getPrescription(
    @Args('nhi', { type: () => Int })
    id: number,
  ): Promise<PatientEntity> {
    return this.patientService.getPatient(id);
  }

  @Mutation(() => PatientEntity, { name: 'addPatient' })
  public async addPatient(
    @Args('input', { type: () => AddPatientDto })
    input: AddPatientDto,
  ): Promise<PatientEntity> {
    return this.patientService.addPatient(input);
  }
}
