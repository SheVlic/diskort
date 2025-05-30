import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
	title = 'diskort';
	contacts = [
		{name: 'Vova', avatar: "",lastMessage: "", online: true}, 
		{name: 'Maks', avatar: "",lastMessage: "", online: true},
		{name: 'Chmo Ebanoe', avatar: "",lastMessage: "", online: false},
		{name: 'Chmo Ebanoe2', avatar: "",lastMessage: "", online: false}
	];
	messages = [
		{userName: 'Vova', from: "me", text: "A", time: new Date()},
		{userName: 'Maks', from: "other", text: "B", time: new Date()},
		{userName: 'Vova', from: "other", text: "V", time: new Date()},
		{userName: 'Chmo Ebanoe', from: "other", text: "G", time: new Date()},
		{userName: 'Vova', from: "me", text: "D", time: new Date()}
	]
	activeContactName: string= this.contacts[0].name;

	isActive(contactName: string): boolean {
		return this.activeContactName === contactName;
	}

	setChat(contactName: string): void{
		this.activeContactName = contactName;
	}

	getFilterMessages() {
		return this.messages.filter((textMessage) => {
			return this.activeContactName === textMessage.userName;
		});

	}

	sendMessage(): void {
		const inputElement = document.getElementById("message-input") as any;
		const newMessage = {
			userName: this.activeContactName, from: "me", text: inputElement.value, time: new Date()
		};
		this.messages.push(newMessage);
	}


}



