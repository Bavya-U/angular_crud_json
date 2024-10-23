import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
@ViewChild('myModal') model:ElementRef | undefined

  openModal() {
    const modal = document.getElementById("myModal");
    if (modal != null) {
      modal.style.display = 'block';
    }
  }
  closeModel() {
    if (this.model != null){
      this.model.nativeElement.style.display = 'none';
    }
  }
}
export class Student{
  name: string;
  mobileNo: string;
  email: string;
  city: string;
  state: string;
  pincode: string;
  address: string;

  constructor() {
    name= string;
    mobileNo= string;
    email= string;
    city= string;
    state= string;
    pincode= string;
    address= string;
  
  }
}
