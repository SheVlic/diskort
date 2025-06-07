import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { ChatComponent } from "./chat/chat.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, ChatComponent, UserProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
 }) 

 export class AppComponent {
	
}