import { CommonModule } from "@angular/common";
import { Component, inject } from "@angular/core";
import { Contact, Message } from "../model/user";
import { UserService } from "../user.service";

@Component({
  selector: 'app-chat',
  imports: [CommonModule],
  templateUrl: 'chat.component.html',
  styleUrl: 'chat.component.scss'
})
export class ChatComponent {
	public userService: UserService = inject(UserService);

	public contacts: Contact[] = [
		{id: 1, user: undefined, name: 'Vova', avatar: "",lastMessage: "", online: true}, 
		{id: 2, user: undefined, name: 'Maks', avatar: "",lastMessage: "", online: true},
		{id: 3, user: undefined, name: 'Chmo Ebanoe', avatar: "",lastMessage: "", online: false}
		];
	public messages: Message[] = [
		{id: 1, sender: undefined, receiver: undefined, text: "A", time: new Date()},
		{id: 2, sender: undefined, receiver: undefined, text: "B", time: new Date()},
		{id: 3, sender: undefined, receiver: undefined, text: "V", time: new Date()},
		{id: 4, sender: undefined, receiver: undefined, text: "G", time: new Date()},
		{id: 5, sender: undefined, receiver: undefined, text: "D", time: new Date()}
	]
	public activeContactName: string= this.contacts[0].name;

	public isActive(contactName: string): boolean {
		return this.activeContactName === contactName;
	}

	public setChat(contactName: string): void{
		this.activeContactName = contactName;
	}

	public getFilterMessages() {
		return this.messages.filter((textMessage) => {
			return this.activeContactName === textMessage.sender?.name;
		});

	}

	public sendMessage(): void {
		const inputElement = document.getElementById("message-input") as any;
		const newMessage = {
			userName: this.activeContactName, from: "me", text: inputElement.value, time: new Date()
		};
		this.messages.push(newMessage);
	}


}

