import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  @Input() selectedMag = '';
  years: string[] = [];

  @Output()
  goingBack = new EventEmitter<string>();

  @Output()
  yearSelected = new EventEmitter<{ year: string }>();
  selectedYear = "";
  data: any;
  array: any[] = [];

  ngOnInit(): void {
    fetch('./assets/czasopisma.xml')
      .then((response) => response.text())
      .then((data) => {

        const parser = new xml2js.Parser({ explicitArray: false });
        parser.parseString(data, (err, result) => {
          this.data = result.czasopisma
          console.log(result.czasopisma.lata[this.selectedMag]);

          this.years = result.czasopisma.lata[this.selectedMag].split(',')
          console.log(this.years);
          

        });
      })
      .catch(console.error);
  }

  goBack(){
    this.goingBack.emit('back');
  }

  clickYear(y: string){
    this.yearSelected.emit({year: y});
    console.log(this.data[this.selectedMag]);
    Object.keys(this.data[this.selectedMag]).forEach(key => {
      let obj = [key, this.data[this.selectedMag][key]]
      this.array.push(obj)
    });

    let temp: any[] = [];
    this.array.forEach(e =>{
      if(e[1].$.rok == y)
      temp.push(e)
    })
    this.array = temp

    console.log(this.array);
  }

}
