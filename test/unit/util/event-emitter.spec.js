import EventEmitter from '../../../src/util/eventEmitter';

describe('Util EventEmitter', () => {
  beforeEach(() => {
    EventEmitter.removeAllListeners();
  });

  it('instantiates', () => {
    const emitter = new EventEmitter();
    expect(emitter).to.be.an.instanceof(EventEmitter);
  });

  it('add event listener', () => {
    const emitter = new EventEmitter();
    expect(Object.keys(EventEmitter.getEvents()).length).to.be.equal(0);
    emitter.$on('event', () => {});
    expect(Object.keys(EventEmitter.getEvents()).length).to.be.equal(1);
  });

  it('remove event listener', () => {
    const emitter = new EventEmitter();
    const callback = () => {};
    emitter.$on('event', callback);
    expect(EventEmitter.getEvents().event.length).to.be.equal(1);
    emitter.$off('event', callback);
    expect(EventEmitter.getEvents().event.length).to.be.equal(0);
  });

  it('emit event', () => {
    const emitter = new EventEmitter();
    let count = 0;
    emitter.$on('event', (data) => {
      count = data.count;
    });
    emitter.$emit('event', {
      count: 1
    });
    expect(count).to.be.equal(1);
  });
});
