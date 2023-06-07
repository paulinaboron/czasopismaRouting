import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as xml2js from 'xml2js';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-years',
  templateUrl: './years.component.html',
  styleUrls: ['./years.component.css']
})
export class YearsComponent implements OnInit {

  selectedMag: string = "";
  years: string[] = [];
  selectedYear: string | null | undefined;
  data: any;
  array: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private service: ServiceService,
    private router: Router) {
  }

  async ngOnInit(): Promise<void> {

    this.route.paramMap.subscribe(params => { 
      this.selectedMag = params.get("mag")!
      this.selectedYear = params.get("year")
      if(this.data) this.displayContent()
    })
    await this.fetchData()
  }

  async fetchData(): Promise<void> {
    fetch('./assets/czasopisma.xml')
      .then((response) => response.text())
      .then((data) => {

        const parser = new xml2js.Parser({ explicitArray: false });
        parser.parseString(data, (err, result) => {
          if(result.czasopisma.lata[this.selectedMag] == null){
            this.redirect()
            return
          }
          this.data = result.czasopisma
          this.years = result.czasopisma.lata[this.selectedMag].split(',')
          this.displayContent()        
        });
      })
      .catch(console.error);
  }

  displayContent(): void {

    if (this.selectedYear) {
      Object.keys(this.data[this.selectedMag]).forEach(key => {
        let obj = [key, this.data[this.selectedMag][key]]
        this.array.push(obj)
      });

      let temp: any[] = [];
      this.array.forEach(e => {
        if (e[1].$.rok == this.selectedYear)
          temp.push(e)
      })
      if(temp.length == 0) this.redirect()
      this.array = temp
    }
  }

  redirect(): void{
    this.router.navigate(['/'])
  }
}
