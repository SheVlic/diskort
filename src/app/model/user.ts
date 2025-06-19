export interface User{
    id: number;
    email: string;
    name: string;
    nickname: string;
    password: string;
    birthDate: Date;


}

export interface Contact{
    id?: number;
    user?: User;
    name: string;
    avatar: any;
    lastMessage: string; 
    online: boolean;

}

export interface Message{
    id?: number;
    sender?: User;
    receiver?: User;
    text: string;
    time: Date;
}
