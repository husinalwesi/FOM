import { MailToPipe } from './mail-to.pipe';

describe('MailToPipe', () => {
  it('create an instance', () => {
    const pipe = new MailToPipe();
    expect(pipe).toBeTruthy();
  });
});
