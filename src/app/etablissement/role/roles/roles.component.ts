import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../../core/services/role/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.sass']
})
export class RolesComponent implements OnInit {

  roles: any[] = []
  selected: any;
  constructor(srv: RoleService) {
    srv.getRoles().subscribe({
      next: (res: any) => this.roles = res
      
    })
  }

  ngOnInit(): void {
  }

}
