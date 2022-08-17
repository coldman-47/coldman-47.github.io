import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.sass'],
})
export class LayoutComponent implements OnInit {
  user: any;
  display = false;
  submitted = false;

  constructor(private authSrv: AuthService, private messageSrv: MessageService) {
    // this.user = authSrv.user.getValue();
  }

  ngOnInit(): void {}

  logout() {
    if (confirm('Êtes vous sûr(e) de bien vouloir vous déconnecté?').valueOf())
      this.authSrv.logout();
  }

}
