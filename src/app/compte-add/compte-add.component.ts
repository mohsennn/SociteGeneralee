import { Component, OnInit } from "@angular/core";
import { NgForm,FormGroup,
  FormBuilder,
  Validators,
  FormControl } from "@angular/forms";
import { CompteService } from "./../compte/compte.service";
import { Router } from "@angular/router";
import { ErrorStateMatcher } from "@angular/material/core";



@Component({
  selector: "app-compte-add",
  templateUrl: "./compte-add.component.html",
  styleUrls: ["./compte-add.component.css"]
})
export class CompteAddComponent implements OnInit {
  compteForm: FormGroup;
   solde: number = null;
  decouvertMax: number = null;
  debitMax: number = null;
  titulaire: number = null;
  intitule: string = "";
  isLoadingResults = false;

  constructor(
    private compteService: CompteService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {  }

  ngOnInit() {
    this.compteForm = this.formBuilder.group({
      solde: [null, Validators.required],
      decouvertMax: [null, Validators.required],
      debitMax: [null, Validators.required],
      titulaire: [null, Validators.required],
      intitule: [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.compteService.addCompte(form).subscribe(res => {
      let id = res["id"];
       this.isLoadingResults = false;
      this.router.navigate(["/compte-details", id]);
    });
  }
}
