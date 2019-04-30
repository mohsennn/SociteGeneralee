import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogOverviewExampleDialogComponent } from './../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: 'app-dialog-overview-example',
  templateUrl: './dialog-overview-example.component.html',
  styleUrls: ['./dialog-overview-example.component.css']
})



export class DialogOverviewExampleComponent  {

  animal: string;
  name: string;


  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialogComponent, {
      width: '250px',
      data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
       this.animal = result;
    });
  }
}

export interface DialogData {
  animal: string;
  name: string;
}
