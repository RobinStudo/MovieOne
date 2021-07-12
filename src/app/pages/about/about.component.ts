import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title: string = "A propos";
  text: string = "MovieOne est une plateforme video";
  image: string = "/assets/images/landing.jpg";
  bestMovies: Array<string> = ['Pulp Fiction', 'Titanic', 'The Rock'];
  address: any = {
    street: "150 rue de la république",
    city: "Lille",
    zipcode: 59000,
  };
  current: Date = new Date();

  constructor() {}

  ngOnInit(): void {
  }

  showAlert(event: Event){
    console.log(event);
    alert("Venez boire un café");
  }
}
