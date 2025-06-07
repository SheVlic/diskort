import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ChatComponent } from "./chat/chat.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { RegisterComponent } from "./register/register.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, ChatComponent, UserProfileComponent, RegisterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
 }) 

 export class AppComponent {
	
}