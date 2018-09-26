import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

import {JsonDataService} from '../json-data.service';
import {GrowerSearchComponent} from './grower-search/grower-search.component';
import {MatDialog} from '@angular/material';

export interface GrowerModel {
  name: string;
  no: number;
}


@Component({
  selector: 'app-grower',
  templateUrl: './grower.component.html',
  styleUrls: ['./grower.component.css']
})
export class GrowerComponent implements OnInit {

  @ViewChild('growerNumber') growerNumber: ElementRef;
  growerData: GrowerModel;

  allGrowerData: GrowerModel[];

  constructor(private service: JsonDataService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.getJSON().subscribe(
      (value: GrowerModel[]) => {
        console.log(value[0]);
        this.allGrowerData = value;

      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(GrowerSearchComponent, {
      height: '300px',
      width: '500px'
      ,
      data: {no: ''}
    });

    dialogRef.afterClosed().subscribe(result => {
      result = +result;
      let valueFound: boolean = false;
      for (let value1 of  this.allGrowerData) {
        if (value1.no === result) {
          this.growerData = value1;
          this.growerNumber.nativeElement.value = result;
          valueFound = true;
        }
      }
      if (!valueFound){
        console.log('wrong input');
        alert(' no data found');
      }
    });
  }
}
