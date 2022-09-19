import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataUriToBlob'
})
export class DataUriToBlobPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    var byteString = atob(value.split(',')[1]);

    // separate out the mime component
    var mimeString = value.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ab], { type: mimeString });
  }

}
