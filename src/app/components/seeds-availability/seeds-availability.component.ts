import { Component, OnInit } from '@angular/core';
import { Seed } from '../../api/seed';
import { SeedDistrictWise } from '../../api/seeddistrictwise';
import { District } from '../../api/district';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-seeds-availability',
  templateUrl: './seeds-availability.component.html',
  styleUrls: ['./seeds-availability.component.css']
})
export class SeedsAvailabilityComponent implements OnInit {
  filterSeedsList: any[] = [];
  seeds: Seed[] = [
    {
      seedId: 1,
      seedName: 'Seed 1',
      image: './assets/img/olam_icon.png',
      quantity: '10 KG',
      requiredPerCent: 0.2,
    },
    {
      seedId: 2,
      seedName: 'Seed 2',
      image: './assets/img/olam_icon.png',
      quantity: '20 KG',
      requiredPerCent: 0.5,
    },
    {
      seedId: 3,
      seedName: 'Seed 3',
      image: './assets/img/olam_icon.png',
      quantity: '30 KG',
      requiredPerCent: 1.2,
    },
    {
      seedId: 4,
      seedName: 'Seed 4',
      image: './assets/img/olam_icon.png',
      quantity: '40 KG',
      requiredPerCent: 2.2,
    }
  ];

  districtList: District[] = [
    {
      districtId: 1,
      districtName: 'Karur',
    },
    {
      districtId: 2,
      districtName: 'Trichy',
    },
    {
      districtId: 3,
      districtName: 'Namakkal',
    }
  ];

  seedsList: SeedDistrictWise[] = [
    {
      districtId: 1,
      seeds: [
        {
          seedId: 1,
          seedName: 'Seed 1',
          image: './assets/img/olam_icon.png',
          quantity: '10 KG',
          requiredPerCent: 0.2,
        },
        {
          seedId: 2,
          seedName: 'Seed 2',
          image: './assets/img/olam_icon.png',
          quantity: '20 KG',
          requiredPerCent: 0.5,
        },
      ]
    },
    {
      districtId: 2,
      seeds: [
        {
          seedId: 3,
          seedName: 'Seed 3',
          image: './assets/img/olam_icon.png',
          quantity: '30 KG',
          requiredPerCent: 1.2,
        },
        {
          seedId: 4,
          seedName: 'Seed 4',
          image: './assets/img/olam_icon.png',
          quantity: '40 KG',
          requiredPerCent: 2.2,
        }
      ]
    },
    {
      districtId: 3,
      seeds: [
        {
          seedId: 1,
          seedName: 'Seed 1',
          image: './assets/img/olam_icon.png',
          quantity: '10 KG',
          requiredPerCent: 0.2,
        },
        {
          seedId: 2,
          seedName: 'Seed 2',
          image: './assets/img/olam_icon.png',
          quantity: '20 KG',
          requiredPerCent: 0.5,
        },
        {
          seedId: 3,
          seedName: 'Seed 3',
          image: './assets/img/olam_icon.png',
          quantity: '30 KG',
          requiredPerCent: 1.2,
        },
        {
          seedId: 4,
          seedName: 'Seed 4',
          image: './assets/img/olam_icon.png',
          quantity: '40 KG',
          requiredPerCent: 2.2,
        }
      ]
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadSeedsDistrictWise(id: any) {
    this.seedsList.forEach(seed => {
      if(seed.districtId = id) {
        this.filterSeedsList.fill(seed);
      }
    });
  }

  viewData(id: any) {
    this.router.navigate(['/seed/', id]);
  }

}
