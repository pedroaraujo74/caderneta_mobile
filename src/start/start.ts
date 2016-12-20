import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthProviders, FirebaseAuth, FirebaseAuthState, AuthMethods, AngularFire } from 'angularfire2';
import { Http } from '@angular/http'
import { AuthService } from './registo-service';
import { RegistoPage_1 } from '../registo/registo_page1/registo1';
import { RegistoSocial } from '../registo/registo_social/registo_social';
import { Facebook } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs'


@Component({
  templateUrl: 'start.html'
})
export class StartPage {
  teste : any = false;
  private authState: FirebaseAuthState;

  constructor(public navCtrl: NavController, public af: AngularFire, private http: Http, private _auth: AuthService) {
  

  }


  goregisto(){
     this.navCtrl.push(LoginPage);
  }

  
    loginGoogle() {

      this._auth.signInWithGoogle()
      .then(() => { 

        this.http.get('https://caderneta-2b6e4.firebaseio.com/encarregados/' + this._auth.uid() + '.json')
                .subscribe(data => {
                    console.log(data.json());
                    if (data.json() == null) {
                            this.navCtrl.push(RegistoSocial);
                            console.log("ja deu")
                    } else {
                        console.log("ja tem conta");
                    }

                });




       })
}


signInWithFacebook() {
    
    
    
       
  }



   

  


}