import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signUpForm : FormGroup;
  forbiddenProjectnames = ['Test'];

  ngOnInit(){
    this.signUpForm = new FormGroup({
      'projectName' : new FormControl(null,[Validators.required , this.forbiddenProjectNames.bind(this)]),
      'email' : new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails),
      'Status' : new FormControl('Stable')
    })
  }

  forbiddenProjectNames(control : FormControl) : {[s : string] : boolean}{
    console.log(control.value);
    if(this.forbiddenProjectnames.indexOf(control.value)  !== -1){
      return {'nameIsForbidden' : true}
    }
    return null;
  }

  forbiddenEmails(control : FormControl) : Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve ,reject) => {
      setTimeout(() => {
        if(control.value === 'test@test.com'){
          resolve({'emailIsForbidden' : true});
        }else{
          resolve(null);
        }
      },1000)
    })
    return promise;
  }
}
