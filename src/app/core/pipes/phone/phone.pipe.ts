import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(num: any) {
    if(num){
      let newStr = "";
      const rawNum = num.replaceAll(/\s/g,'');
      for (let i = 0; i < Math.floor(rawNum.length / 2) - 1; i++) {
        newStr = newStr + rawNum.substr(i * 2, 2) + "-";
      }
      return [rawNum.slice(0, 2), ' ', rawNum.slice(2,5), ' ', rawNum.slice(5 , 7), ' ', rawNum.slice(7, 9)].join(' ');
    }
    return num;
  }

}
