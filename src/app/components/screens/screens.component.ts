import { Component, OnInit } from '@angular/core';
import {ScreensService} from './screens.service'

@Component({
  selector: 'app-screens',
  templateUrl: './screens.component.html',
  styleUrls: ['./screens.component.css']
})
export class ScreensComponent implements OnInit {
  input:string = ""

  constructor(private screenService:ScreensService) { }

  ngOnInit(): void {
  }

  getSample(type:any) {
    this.screenService.getSample(type);
  }

}
