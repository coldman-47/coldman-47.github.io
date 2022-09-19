import { DataUriToBlobPipe } from './data-uri-to-blob.pipe';

describe('DataUriToBlobPipe', () => {
  it('create an instance', () => {
    const pipe = new DataUriToBlobPipe();
    expect(pipe).toBeTruthy();
  });
});
