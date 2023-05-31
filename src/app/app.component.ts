import { Component, Input } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'czasopisma';
  time = new Date();
  xml: any[] = []

  constructor(private httpClient: HttpClient) {
    this.timer()
    // this.getData()
  }
  

  //todo cors nie działa
  getData() {
    this.httpClient.get<any[]>("https://mendela.pl/ap_web/czasopisma.xml")
      .subscribe(data => {
        this.xml = data;
        console.log(data);
        
      },
        error => {
          console.log("error");
        }
      );
  }

  timer() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

}
