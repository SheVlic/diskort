import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../model/user';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

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
	public nameControl: FormControl = new FormControl();
	public emailControl: FormControl = new FormControl();
	public nicknameControl: FormControl = new FormControl();
	public passwordControl: FormControl = new FormControl();
	public passwordConfirmControl: FormControl = new FormControl();
	public birthDayControl: FormControl = new FormControl(1);
	public birthMonthControl: FormControl = new FormControl("Январь");
	public birthYearControl: FormControl = new FormControl(2000);

	constructor() {
		for (let i = 1; i <= 31; i++) {
			this.days.push(i);
		}

		for (let i = 1900; i <=2050 ; i++) {
			this.years.push(i);
		}
		
	}

	public register() :void {
		const date: Date = new Date(this.birthYearControl.value, this.months.indexOf(this.birthMonthControl.value), this.birthDayControl.value);
		const newUser: User = {
			email: this.emailControl.value,
			name: this.nameControl.value,
			nickname: this.nicknameControl.value,
			password: this.passwordControl.value,
			birthDate: date
		};

		console.log(newUser);
	}




}
