import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as xml2js from 'xml2js';

@Component({
  selector: 'app-magazines',
  templateUrl: './magazines.component.html',
  styleUrls: ['./magazines.component.css'],
})
export class MagazinesComponent implements OnInit {
  imgSrc: string[][] = [];
  
  constructor() {}

  ngOnInit(): void {
    fetch('./assets/czasopisma.xml')
      .then((response) => response.text())
      .then((data) => {

        const parser = new xml2js.Parser({ explicitArray: false });
        parser.parseString(data, (err, result) => {
          console.log(result.czasopisma);
          console.log(result.czasopisma.zmienne.Atari_Age.src);

          Object.keys(result.czasopisma.zmienne).forEach(key => {
            let src = [key, result.czasopisma.zmienne[key].src]
            this.imgSrc.push(src)
          });

          console.log(this.imgSrc);

        });
      })
      .catch(console.error);
  }

}
