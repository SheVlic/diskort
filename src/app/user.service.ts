import { Injectable } from '@angular/core';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    public user?: User;
    public users: User[] = [];
  constructor() { }
}
