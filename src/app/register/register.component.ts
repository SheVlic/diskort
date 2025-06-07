import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [CommonModule],
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

	constructor() {
		for (let i = 1; i <= 31; i++) {
			this.days.push(i);
		}

		for (let i = 1900; i <=2050 ; i++) {
			this.years.push(i);
		}
		
	}

	public register() :void {

	}




}
