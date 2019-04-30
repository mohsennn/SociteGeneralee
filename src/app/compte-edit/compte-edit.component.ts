import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, NgForm } from "@angular/forms";
import { CompteService } from './../compte/compte.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CompteDetailsComponent } from './../compte-details/compte-details.component';

@Component({
  selector: "app-compte-edit",
  templateUrl: "./compte-edit.component.html",
  styleUrls: ["./compte-edit.component.css"]
})
export class CompteEditComponent implements OnInit {

  compteForm: FormGroup;
  _id: number = null;
  solde: number = null;
  decouvertMax: number = null;
  debitMax: number = null;
  titulaire: number = null;
  intitule: string = "";
  isLoadingResults = false;

  constructor(private compteService:CompteService,
    private route:ActivatedRoute,private formBuilder:FormBuilder,
    private router:Router) {}

  ngOnInit() {
    this.getCompte(this.route.snapshot.params['id']);
    this.compteForm=this.formBuilder.group( {
     'solde': [null, Validators.required],
     'decouvertMax': [null, Validators.required],
     'debitMax': [null, Validators.required],
     'titulaire': [null, Validators.required],
     'intitule': [null, Validators.required]
    });
  }

  getCompte(id){
    this.compteService.getCompte(id).subscribe(
      data =>{
        this._id=data._id;
        this.compteForm.setValue({
        solde:data.solde,
        decouvertMax:data.decouvertMax,
        debitMax:data.debitMax,
        titulaire:data.titulaire,
        intitule:data.intitule
         });
      });
  }

  onFormSubmit(form:NgForm){

    this.isLoadingResults=true;
    this.compteService.updateProduct(this._id,form)
    .subscribe(

      res=>{

        let id = res['_id'];
        console.log("l'iddd 1  est",id);

         this.isLoadingResults=false;
        this.router.navigate(['/compte-details', id]);
      }
    );

  }




  CompteDetails(){

console.log("l'iddd 2 est",this._id);
    this.router.navigate(['/compte-details', this._id]);
  }
}
