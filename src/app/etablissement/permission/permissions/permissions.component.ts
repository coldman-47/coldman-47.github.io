import { Component, Input, OnInit } from '@angular/core';
import { PermissionsService } from 'src/app/core/services/permissions/permissions.service';
import { RoleService } from '../../../core/services/role/role.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.sass']
})
export class PermissionsComponent implements OnInit {

  permissions: any[] = [];
  _permissions: any[];
  @Input() role: any;

  constructor(private srv: PermissionsService, private roleSrv: RoleService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: any){
    const role = changes.role.currentValue;
    this._permissions = [];
    this.srv.getPermissions().subscribe({
      next: (res: any) => this.permissions = res
    });
    if(role){
      role.permissions.forEach((permission: any) => {
        const idx = this.permissions.findIndex(_permission => permission._id === _permission._id);
        if(idx !== -1) this.permissions[idx] = permission;
      });
      this._permissions = this.permissions.map(permission => {
        const _permission = {...permission};
        const privileges: any = [];
        _permission.privileges.forEach((privilege: string) => privileges[privilege] = privilege);
        _permission.privileges = privileges;
        return _permission;
      });
    }else this._permissions = [];
  }

  togglePermission(e: any, permission: any){
    const idx = this.role.permissions.findIndex((_permission: any) => _permission._id === permission._id);
    if(idx === -1){
      permission.privileges.push(e.checked);
      this.role.permissions.push(permission);
    }else{
      const privilegeIdx = (<[]>this.role.permissions[idx].privileges).findIndex(_privilege => _privilege === e.checked.toUpperCase());
      if(privilegeIdx === -1){
        this.role.permissions[idx].privileges.push(e.checked);
      }else{
        this.role.permissions[idx].privileges.splice(idx, 1);
      }
    }
    this.roleSrv.updateRole(this.role).subscribe({
      next: (role) => console.log(role)
      
    })
  }

}
