import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { MarquesService } from '../../../../services/marques.service';
import { OwnerService } from '../../../../services/owner.service';
import { ServiceService } from '../../../../services/service.service';
import { TypesService } from '../../../../services/types.service';
import { ValidationFormsService } from '../../../forms/validation-forms/validation-forms.service';

@Component({
  selector: 'app-add-materiel',
  templateUrl: './add-materiel.component.html',
  styleUrls: ['./add-materiel.component.css']
})
export class AddMaterielComponent implements OnInit {
  submitted = false;
  formErrors: any;
  myRes: any;
  myTypes: any;
  idTypes: any;
  myMarques: any;
  myfindMarques: any;
  myOwners: any;
  matForm = new FormGroup({
    Nom: new FormControl(''),
    type: new FormControl(''),
    Marque: new FormControl(''),
    service: new FormControl(''),
    SerialNumber: new FormControl(''),
    owner: new FormControl(''),
    accept: new FormControl(false, Validators.requiredTrue)
  });

  constructor(private toasterService: ToasterService,
    private router: Router,
    private ownerservice: OwnerService,
    private serviceservice: ServiceService,
    private typeservice: TypesService,
    private marqueservice: MarquesService,
    public vf: ValidationFormsService) {
    this.formErrors = this.vf.errorMessages;

  }
  ngOnInit(): void {
    this.allservices();
    this.alltypes();
    this.allmarques();
    this.allowners();
  }

  get f() { return this.matForm.controls; }

  //get all services
  allservices() {
    this.serviceservice.allServices().subscribe((response: any) => {
      this.myRes = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //get all types
  alltypes() {
    this.typeservice.alltypes().subscribe((response: any) => {
      this.myTypes = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //get all marques
  allmarques() {
    this.marqueservice.allmarques().subscribe((response: any) => {
      this.myMarques = response
    },
      (error: any) => {
        console.log(error);
      }
    );
  }
  //find marques by type
  findmarques() {
    //.matForm.value.types=this.matForm.controls.type.value

    this.marqueservice.findMarques(this.matForm.value.type).subscribe((response: any) => {
      this.myfindMarques = response
      console.log(this.myfindMarques);

    },
      (error: any) => {
        console.log(error);
      }
    );
  }

  //get all owners
  allowners() {
    this.ownerservice.allowners().subscribe((response: any) => {
      this.myOwners = response
      this.toasterService.pop('success', 'Success Login', response.message);
    },
      (error: any) => {
        this.toasterService.pop('error', 'Error', error.error.message);
        console.log(error);
      }
    );
  }

  affectService(body: any) {
    //   this.ownerservice.affectService(body).subscribe((response: any) => { },
    //     (error: any) => {
    //       this.toasterService.pop('error', 'Error', error.error.message);
    //       console.log(error);
    //     }
    //   );
  }
  addowner() {
    // this.submitted = true;
    // if (this.matForm.invalid) {
    //   return
    // };
    // //with Services
    // const addowner = this.ownerservice.addowner(this.matForm.value).subscribe((response: any) => {
    //   this.toasterService.pop('success', 'Success Login', response.message);
    //   // this.affectService(this.matForm.value)
    //   this.router.navigate(['/owners']);
    // },
    //   (error: any) => {
    //     this.toasterService.pop('error', 'Error', error.error.message);
    //     console.log(error);
    //   }
    // );
  }

  onReset() {

    this.submitted = false;
    this.matForm.reset();

  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.matForm.invalid) {
      return;
    }

  }
}