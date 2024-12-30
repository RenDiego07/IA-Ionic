import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard,IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent,
  ],
})
// no fue necesario agregar las clases importadas porque Ionic si las reconoce, a diferencia con la clase Icons que si se necesitó añadirla en el constructor de la clase
export class Tab3Page {
  constructor() {}
}
