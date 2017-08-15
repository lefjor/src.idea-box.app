import { Injectable } from '@angular/core';

import {AngularFireModule} from "angularfire2";
import * as firebase from 'firebase';

@Injectable()
export class FileUploadService {

  constructor() { }

  public upload(file:FileList): firebase.Promise<any> {
    // Create a root reference
    let storageRef = firebase.storage().ref();

    let success = false;

    for(let i = 0, length = (<HTMLInputElement>document.getElementById('imageInputFile')).files.length; i < length ; i++) {
      let selectedFile = (<HTMLInputElement>document.getElementById('imageInputFile')).files[i];
      console.log(selectedFile)
      // Make local copies of services because "this" will be clobbered
      //let router = this.router;
      //let af = this.af;
      //let folder = this.folder;
      let path = `/uploadedImages/${selectedFile.name}`;
      var iRef = storageRef.child(path);
      return iRef.put(selectedFile).then((snapshot) => {
        console.log(snapshot);
        const storageRef = firebase.storage().ref().child(path);
        return storageRef.getDownloadURL();
        //console.log('Uploaded a blob or file! Now storing the reference at',`/${this.folder}/images/`);
        //af.database.list(`/${folder}/images/`).push({ path: path, filename: selectedFile.name })
      });
    }
  }

}