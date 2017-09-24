/**
 * Check if passed parameter is a function
 * @param obj
 * @returns {boolean}
 */
const isFunction = (obj) => {
  return typeof obj === 'function' || false;
};

/**
 * Simple Event Emitter implementation
 */
class EventEmitter {
  /**
   * @constructor
   */
  constructor() {
    this._listeners = new Map();
  }

  /**
   * Add event listener to the map
   * @param {string} label
   * @param {Function} callback
   */
  addListener(label, callback) {
    if (!this._listeners.has(label)) {
      this._listeners.set(label, []);
    }
    this._listeners.get(label).push(callback);
  }

  /**
   * Remove event listener from registry
   * @param {string} label
   * @param {Function} callback
   * @returns {boolean}
   */
  removeListener(label, callback) {
    const listeners = this._listeners.get(label);

    if (listeners && listeners.length) {
      const index = listeners.reduce((i, listener, ind) => {
        return (isFunction(listener) && listener === callback) ? i = ind : i;
      }, -1);

      if (index > -1) {
        listeners.splice(index, 1);
        this._listeners.set(label, listeners);
        return true;
      }
    }
    return false;
  }

  /**
   * Notifies liteners attached to event
   * @param {string} label
   * @param args
   * @returns {boolean}
   */
  emit(label, ...args) {
    const listeners = this._listeners.get(label);

    if (listeners && listeners.length) {
      listeners.forEach((listener) => {
        listener(...args);
      });
      return true;
    }
    return false;
  }
}

export default EventEmitter;
