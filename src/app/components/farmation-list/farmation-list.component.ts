import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import *  as _ from 'lodash';
import { forkJoin, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
//import { DashboardService } from '../../../shared/services/dashboard.service';
import { Seed } from '../../api/seed';
import { DatePipe } from '@angular/common';
// import { PageChangedEvent } from 'ngx-bootstrap/pagination';

@Component({
  selector: 'app-farmation',
  templateUrl: './farmation-list.component.html',
  styleUrls: ['./farmation-list.component.scss']
})
export class FarmationListComponent implements OnInit {
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
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToFarmationDetail(id: any) {
    this.router.navigate(['/farmation', id]);
  }

}
