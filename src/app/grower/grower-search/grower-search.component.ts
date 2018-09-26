import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-grower-search',
  templateUrl: './grower-search.component.html',
  styleUrls: ['./grower-search.component.css']
})
export class GrowerSearchComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<GrowerSearchComponent>,
               @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
