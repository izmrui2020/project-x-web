import { Role } from './role';

export class User {
  id: string;
  nickname: string;
  avatar: {
    url: string
  }
  //token:string;
  //role!: Role;
}
