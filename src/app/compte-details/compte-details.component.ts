import { Component, OnInit } from "@angular/core";
import { CompteService } from "./../compte/compte.service";
import { Compte } from "../compte";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-compte-details",
  templateUrl: "./compte-details.component.html",
  styleUrls: ["./compte-details.component.css"]
})
export class CompteDetailsComponent implements OnInit {
  compte: Compte = {
   _id: null,
    solde: null,
    decouvertMax: null ,
    debitMax: null,
    titulaire: null,
    intitule: ''
  };
  isLoadingResults: boolean = true;

  constructor(private compteService: CompteService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getProductDetails(this.route.snapshot.params["id"]);
   }
  getProductDetails(id) {
    this.compteService.getCompte(id)
      .subscribe(data => {
        this.compte = data;
         this.isLoadingResults = false;
      });
  }

  deleteCompte(id){

  }



}
