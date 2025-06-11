import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { User } from '../model/user';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
	public days: number[] = []; 
	public months: string[] = [
		"Январь", "Февраль", "Март", "Апрель", "Май",
		"Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
	];
	public years: number[] = [];
	//
	// public nameControl: FormControl = new FormControl();
	// public emailControl: FormControl = new FormControl();
	// public nicknameControl: FormControl = new FormControl();
	// public passwordControl: FormControl = new FormControl();
	// public passwordConfirmControl: FormControl = new FormControl();
	// public birthDayControl: FormControl = new FormControl(1);
	// public birthMonthControl: FormControl = new FormControl("Январь");
	// public birthYearControl: FormControl = new FormControl(2000);
	//
	public formGroup: FormGroup = new FormGroup({
		email: new FormControl("", [Validators.required]),
		name: new FormControl("", [Validators.required]),
		nickname: new FormControl("", [Validators.required, Validators.maxLength(40)]),
		password: new FormControl("", [Validators.required]),
		passwordConfirm: new FormControl("", [Validators.required]),
		birthDay: new FormControl(1),
		birthMonth: new FormControl("Январь"),
		birthYear: new FormControl(2000)

	});

	private userService: UserService = inject(UserService);
	private router: Router = inject(Router);

	constructor() {
		for (let i = 1; i <= 31; i++) {
			this.days.push(i);
		}

		for (let i = 1900; i <=2050 ; i++) {
			this.years.push(i);
		}
		
	}

	public register(): void {
		if (
			this.formGroup.get("password")?.value != this.formGroup.get("passwordConfirm")?.value || this.formGroup.invalid
		) return;
		const date: Date = new Date(this.formGroup.get("birthDay")?.value, this.months.indexOf(this.formGroup.get("birtMonth")?.value), this.formGroup.get("birthYear")?.value);
		const newUser: User = {
			email: this.formGroup.get("email")?.value,
			name: this.formGroup.get("name")?.value,
			nickname: this.formGroup.get("nickname")?.value,
			password: this.formGroup.get("password")?.value,
			birthDate: date
		};
		this.userService.user =  newUser;
		console.log(newUser);
		this.router.navigateByUrl("");
	}

	public navigateLogin(): void {
		this.router.navigateByUrl("");
	}




}
