import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Subject } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ListenerService {

  data = new Subject();

  constructor(private socket: Socket, private authSrv: AuthService) { }

  listener(entity: string, methods: string[]) {
    methods.forEach((method) =>
      this.socket.on(
        `/api/${entity}/${this.authSrv.user.value?.entreprise}/${method}`,
        (_data: any) => this.data.next({ method, _data })
      )
    );
  }
}
