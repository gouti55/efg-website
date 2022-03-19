import { Component, OnInit } from '@angular/core';
import { Fertiziler } from '../../api/fertiziler';

@Component({
  selector: 'app-chemical-availability',
  templateUrl: './chemical-availability.component.html',
  styleUrls: ['./chemical-availability.component.scss']
})
export class ChemicalAvailabilityComponent implements OnInit {
  fList: Fertiziler[] = [
    {
      fId: 1,
      fName: 'Fertilizer 1',
      image: './assets/img/olam_icon.png',
      quantity: '10 KG',
      requiredPerCent: 0.2,
    },
    {
      fId: 2,
      fName: 'Fertilizer 2',
      image: './assets/img/olam_icon.png',
      quantity: '10 KG',
      requiredPerCent: 0.2,
    },
    {
      fId: 3,
      fName: 'Fertilizer 3',
      image: './assets/img/olam_icon.png',
      quantity: '10 KG',
      requiredPerCent: 0.2,
    },
    {
      fId: 4,
      fName: 'Fertilizer 4',
      image: './assets/img/olam_icon.png',
      quantity: '10 KG',
      requiredPerCent: 0.2,
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
