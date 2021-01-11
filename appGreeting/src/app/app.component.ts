import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appGreeting';
  Greetings:string[]= VALUES;
}
const VALUES = [
    "Hello World", 
    "Привет Мир",
    "Привіт Світ", 
    "Hola Mundo", 
    "Bonjour le monde", 
    "Hallo Welt", 
    "Ciao mondo", 
    "Witaj świecie", 
    "Hej världen", 
    "Pozdravljen, svet", 
    "Прывітанне Сусвет"
];





