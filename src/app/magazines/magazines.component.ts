import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as xml2js from 'xml2js';
import {ServiceService} from "../service.service"


@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.css'],
})
export class MagazinesComponent implements OnInit {
  imgSrc: string[][] = [];
  
  constructor(private service: ServiceService) {
  }

  ngOnInit(): void {
    
    fetch('./assets/czasopisma.xml')
      .then((response) => response.text())
      .then((data) => {

        const parser = new xml2js.Parser({ explicitArray: false });
        parser.parseString(data, (err, result) => {
          this.service.data = result.czasopisma

          Object.keys(result.czasopisma.zmienne).forEach(key => {
            let src = [key, result.czasopisma.zmienne[key].src]
            this.imgSrc.push(src)
          });

        });
      })
      .catch(console.error);
  }

}
