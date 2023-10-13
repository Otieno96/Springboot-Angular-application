import { Component } from '@angular/core';
import { User } from '../user.model';
import { Router,Route, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import * as $ from 'jquery';
declare var $: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {

    id!: number;
    userslist: User[] = [];
    public user: User = new User();
    public editUser!: User;
    registerForm!: FormGroup;
    submitted = false;
    currentDate: Date | undefined;
    updateForm!:FormGroup;
  //FormBuilder: any;
    
    
    constructor(
      private userService: UserService , 
      private router: Router,
      private route:ActivatedRoute,
      private fb: FormBuilder,
      private fn: FormBuilder){this.currentDate = new Date();}

    ngOnInit(): void{
      this.getUsers();
      this.getUserById();
    //Add User form validations
    this.registerForm = this.fn.group({
    firstname: ['', [Validators.required]],
    middlename: ['', [Validators.required]],
    lastname: ['', [Validators.required]],
    username: ['', [Validators.required]],
    DOB: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.pattern( /^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    });
    }
 //Add user form implementation section
 public onSubmit(): void {
      this.submitted = true;
        // stop here if form is invalid
      if (this.registerForm.invalid) {
            return;
        }
        //True if all the fields are filled
      if(this.submitted)
        {
          console.log(this.user);
          this.saveUser();
          $('#registermodal').modal("hide");
      }

 }

 //Add user form actions
get f() { return this.registerForm.controls; }

 saveUser() {
  this.userService.createUser(this.user).subscribe({
    next: (data) =>
    {
      console.log(data);
      this.registerForm.reset();
    },
    error: (e) => {
      console.log(e);
      this.registerForm.reset();
    }
  });
}

//Display  Users 
 public getUsers(){
      this.userService.getUserList().subscribe(data =>{
        this.userslist = data;
      });
  }

    deleteUser(id: number) {
      this.userService.deleteUser(id).subscribe(data => {
        console.log(data);
        this.getUsers();
      });
    }
 //Retrive user infor by Id
 public getUserById() {
  this.id = this.route.snapshot.params['id'];
  this.userService.getUserById(this.id).subscribe({
    next:(data) => {
      this.user = data;
    },
    error:(e) => {
      console.log(e);
    }
  });
}
  //Update User form implementation
public onUpdate(){
  console.log(this.user);
  this.editUsers();
}
 

editUsers() {
  this.userService.updateUser(this.id, this.user).subscribe({
    next:(data) =>{
      console.log(data);
      //this.redirectToUserList();
    },
    error: (e) => {
      console.log(e);
    }
  });
}

public onOpenModal(user:User): void{
   
}


}
