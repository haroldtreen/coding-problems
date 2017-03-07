import { CallHandler } from './CallHandler';
import { Caller } from './Caller';

const callHandler = new CallHandler();

for (let i = 0; i < 50; i++) {
  const caller = new Caller(i, `${i}`);
  callHandler.dispatchCall(caller);
}
