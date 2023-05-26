import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'czasopisma';
  time = new Date();
  showMagazines = true  //zmienic na false
  showYears = false
  showTable = false

  selectedMag: string = '';
  selectedYear: string = '';

  constructor(){
    this.timer()
  }

  timer(){
    setInterval(() =>{
      this.time = new Date();
       }, 1000);
  }

  onPassCreated(eventData: { password: string }) {
    this.showMagazines = eventData.password == "123";
  }

  onMagazineSelected(eventData: {name: string}){
    this.showYears = true;
    this.showMagazines = false

    this.selectedMag = eventData.name
  }

  goBack(eventData: {}) {
    console.log("backkkkk");
    
    this.showMagazines = true;
    this.showYears = false;
  }

  selectYear(eventData: {year: string}){
    console.log(eventData.year + " apppp");

    this.showTable = true;
    
  }

}
