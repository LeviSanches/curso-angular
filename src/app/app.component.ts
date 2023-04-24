import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userName = "Levi";

  userData = {
    email: "levi_sanches@outlook.com",
    role: "Admin"
  }

  title = 'curso-angular';
}
