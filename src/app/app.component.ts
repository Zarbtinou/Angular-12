import { Component } from '@angular/core';
import { NasaService } from './nasa.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular12';
  public imgOfTheDay:string;
  private service: NasaService;
  constructor(p_service: NasaService){
    this.service = p_service
    this.imgOfTheDay = ""
  }
  public ngOnInit(){
    this.service.getImageOfTheDay().subscribe(
      (p_apod: string) => {
        this.imgOfTheDay = p_apod;
      }
    )
  }
}
