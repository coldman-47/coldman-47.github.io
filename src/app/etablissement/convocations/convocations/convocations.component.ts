import { Component, Input, OnInit } from '@angular/core';
import { ConvocationService } from '../../../core/services/convocation/convocation.service';

@Component({
  selector: 'app-convocations',
  templateUrl: './convocations.component.html',
  styleUrls: ['./convocations.component.sass']
})
export class ConvocationsComponent implements OnInit {
  @Input() apprenantId: any;
  display = false;
  convocation: any = {};  

  constructor(private srv: ConvocationService) { }

  ngOnInit(): void {
    this.srv.getConvocations(this.apprenantId).subscribe({
      next: res => console.log(res)
    });
    this.convocation.apprenant = this.apprenantId;
    
  }

  convene(){
    this.srv.createConvocation(this.convocation).subscribe({
      next: (res) => console.log(res)
      
    })
  }

}
