import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  	selector: 'app-login',
  	imports: [ReactiveFormsModule, NgIf],
  	templateUrl: './login.component.html',
  	styleUrl: './login.component.scss'
})
export class LoginComponent {
  	public emailControl: FormControl = new FormControl;
  	public passwordControl: FormControl = new FormControl;
	private userService: UserService = inject(UserService);
	private router: Router = inject(Router);
	public invalidLogin: boolean = false;

	public login(): void{
		this.router.navigateByUrl("chat"); //TODO: delete
		const loginUser = this.userService.users.find((localUser) => localUser.email === this.emailControl.value && localUser.password === this.passwordControl.value);
		if (loginUser) {
			this.userService.user = loginUser;
			this.router.navigateByUrl("chat");
			return;
		};
		this.invalidLogin = true;

		
	};

	public navigateRegister(): void{
		this.router.navigateByUrl("register");
	}



}

