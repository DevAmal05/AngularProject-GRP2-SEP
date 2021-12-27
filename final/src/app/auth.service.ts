import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signUpuser(email:string,password:string) {
    return new Promise(
      (resolve,reject) => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(
          ()=> {
            resolve(true)
          },
          (error) => {
            reject(error)
          }
        )

      }
    )
  }

  signInuser(email:string,password:string) {

    return new Promise(
      (resolve,reject) => {
        firebase.auth().signInWithEmailAndPassword(email,password).then(
          () =>{
            resolve(true)
          },
          (error) =>{
            reject(error)
         
          }
          
        )
      }
    )

  }

  signOutuser(){
    firebase.auth().signOut()
  }

}
