import {Component, OnInit} from '@angular/core';
import {MageComponent} from '../mage/mage.component';
import {AddMageComponent} from '../add-mage/add-mage.component';
import {MagesService} from '../../services/mages.service';

@Component({
  selector: 'app-mages',
  templateUrl: './mages.component.html',
  styleUrls: ['./mages.component.css'],
})
export class MagesComponent implements OnInit {
  mages = [];

  constructor(private service: MagesService) {
  }

  ngOnInit(): void {
    this.mages = this.service.mages;
  }


}
