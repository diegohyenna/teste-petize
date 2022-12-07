import { IProfile } from './profile.interface';
import { IRepository } from './repository.interface';

export interface IProfileApi {
  status: 'success';
  data?: IProfile;
  error?: any;
}

export interface IRepositoryApi {
  status: 'success';
  data?: IRepository[];
  error?: any;
}
