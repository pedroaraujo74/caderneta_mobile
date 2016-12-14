import { Injectable } from '@angular/core';
import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';

import { Platform } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import { GooglePlus } from 'ionic-native';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(public auth$: FirebaseAuth, private platform: Platform) {
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signInWithFacebook(): firebase.Promise<FirebaseAuthState> {
    if (this.platform.is('cordova')) {
      Facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      });
    } else {
      return this.auth$.login({
        provider: AuthProviders.Facebook,
        method: AuthMethods.Popup
      });
    }

  }

   signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    if (this.platform.is('cordova')) {
      GooglePlus.login(['email', 'public_profile']).then(res => {
        const googleCredential = firebase.auth.GoogleAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(googleCredential);
      });
    } else {
      return this.auth$.login({
        provider: AuthProviders.Google,
        method: AuthMethods.Popup
      });
    }

  }

  signOut(): void {
    this.auth$.logout();
  }

  uid(): string {
    if (this.authState != null) {
      return this.authState.uid
    } else {
      return '';
    }
  }

  displayName(): string {
    if (this.authState != null) {
      return this.authState.facebook.displayName;
    } else {
      return 'teste';
    }
  }
}