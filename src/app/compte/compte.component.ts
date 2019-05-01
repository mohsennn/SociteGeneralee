import { CompteService } from "./compte.service";
import { Compte } from "./../compte";
import { Component, OnInit, ViewChild } from "@angular/core";
import {
  MatPaginator,
  MatSort,
  MatDialog,
  MatTableDataSource
} from "@angular/material";
           import { empty } from "rxjs";
import { DialogOverviewExampleDialogComponent } from './../dialog-overview-example-dialog/dialog-overview-example-dialog.component';

@Component({
  selector: "app-compte",
  templateUrl: "./compte.component.html",
  styleUrls: ["./compte.component.css"]
})
export class CompteComponent implements OnInit {

  data;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = [
    "id",
    "solde",
    "debitMax",
    "titulaire",
    "intitule"
  ];

  isLoadingResults:boolean = true;
  compteList :Compte[]=[];
  constructor(private compteService: CompteService,public dialog: MatDialog) {


  }

  ngOnInit() {
    this.compteService.getCompteList()
      .subscribe(resss => {  this.compteList = resss;
        this.isLoadingResults = false;
        console.log("ajout de log sur la branche develop 04/30/2019 ici c'est branche feature ");

      },
       err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
