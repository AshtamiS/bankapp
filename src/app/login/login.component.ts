import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {// 3rd execution  

  // it contains ---- 
  //properties ,,

  aim = "your perfect banking partner"

  accounts = "Enter your account here"
  // user defined function  - 4th execution

  acno=""
  pswd=""
  acnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
  }

  pswdChange(event:any){
    this.pswd=event.target.value
    console.log(this.pswd)
  }
  login() {
   // alert("login clicked")
   var acno=this.acno
   var pswd=this.pswd
   var userDetails=this.userDetails
   if(acno in userDetails){
if(pswd==userDetails[acno]['password']){
alert("login successfully")
   }
   else{
    alert("invalid password")
   }
  }
   else{
alert("invalid user details")
   }
  }
  userDetails:any = {// object of objects
    1000: { acno: 1000, username: "jees", password: 1000, balance: 1000 },
    1001: { acno: 1000, username: "amal", password: 1001, balance: 1000 },
    1002: { acno: 1000, username: "ashi", password: 1002, balance: 1000 }

  }

  constructor() { }   //1st execute
  //sql member function,autoatically invoks when an object created

  ngOnInit(): void {// 2nd execute  --life cycle hooks of angular- initial process of component initialization
  }

}
