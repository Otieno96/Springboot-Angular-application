import { Component } from '@angular/core';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
    users: User[] | undefined;

    constructor(private userService: UserService , private router: Router){
    
    }

    ngOnInit(): void{
      this.getUsers();
    }

    private getUsers(){
      this.userService.getUserList().subscribe(data =>{
        this.users = data;
      });
    }

    updateUser(id: number){
      this.router.navigate(['update-user', id]);
    }

    deleteUser(id: number) {
      this.userService.deleteUser(id).subscribe(data => {
        console.log(data);
        this.getUsers();
      });
    }
}
