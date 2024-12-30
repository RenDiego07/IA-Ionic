import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,      IonCard, IonCardHeader, IonCardTitle, IonCardContent,
  IonSelect, IonSelectOption, IonTextarea,IonButton,
  IonList, IonItem, IonLabel, } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ReactiveFormsModule } from '@angular/forms';   // Este un módulo que permite crear y gestionar formularios reactivos 
                                                        // permite la validación de campos
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonSelect, IonSelectOption, IonTextarea,IonButton,
    IonList, IonItem, IonLabel,ReactiveFormsModule,]
})
export class Tab2Page {

  myForm: FormGroup = new FormGroup({
    score: new FormControl("", Validators.required),
    opinion: new FormControl("", Validators.required)
  });
  
  onSubmit() {
    console.log(this.myForm.value);
    alert(this.myForm.controls["score"].value)
    this.myForm.reset()
}
  constructor() {}

}
