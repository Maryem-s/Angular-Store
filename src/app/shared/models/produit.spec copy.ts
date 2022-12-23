import { client } from './client';

describe('client', () => {
  it('should create an instance', () => {
    expect(new client()).toBeTruthy();
  });
});
