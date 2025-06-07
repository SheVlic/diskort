import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user-profile',
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
	
    userInformation: string = "Вова";
	
	saveNameNickname (){
		const localSaveName = document.getElementById("input-user-name") as any;
		this.userInformation  = localSaveName.value;
	}

	// saveInformation() :void {
	// const inputElement = document.getElementById("input-user-name") as any;
	// const saveInfo = {}
	// };
}


