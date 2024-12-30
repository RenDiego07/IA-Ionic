import { Injectable, inject } from '@angular/core';

import { Firestore, collection, addDoc, collectionData, CollectionReference} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
    firestoreService = inject(Firestore);
    constructor() { }

createDocument(collectionName: string, data: any): Promise<any> {
  const colRef: CollectionReference = collection(this.firestoreService, collectionName) as CollectionReference;
  return addDoc(colRef, data);
}

readCollection(collectionName: string): Observable<any[]> {
  const colRef: CollectionReference = collection(this.firestoreService, collectionName) as CollectionReference;
  return collectionData(colRef, { idField: 'id' });
}


}
