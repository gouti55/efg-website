import { Component, OnInit } from '@angular/core';
import { Seed } from '../../api/seed'
import { SeedDetail } from '../../api/seeddetail'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seed-availability-details',
  templateUrl: './seed-availability-details.component.html',
  styleUrls: ['./seed-availability-details.component.css']
})
export class SeedAvailabilityDetailsComponent implements OnInit {
  private seedId: any

  seedsList: Seed[] = [
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
      quantity: '10 KG',
      requiredPerCent: 0.2,
    },
    {
      seedId: 3,
      seedName: 'Seed 3',
      image: './assets/img/olam_icon.png',
      quantity: '10 KG',
      requiredPerCent: 0.2,
    },
    {
      seedId: 4,
      seedName: 'Seed 4',
      image: './assets/img/olam_icon.png',
      quantity: '10 KG',
      requiredPerCent: 0.2,
    }
  ];

  constructor(private route: ActivatedRoute) { }

  selectedSeed: SeedDetail = {}

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      this.seedId = data['id'];

      this.seedsList.forEach(seed => {
        console.info('inpurscreenService', data);
        if (seed.seedId == this.seedId) {
          console.info('inpurscreenService', data);
          this.selectedSeed = seed;
        }
      });
    })
  }
}
