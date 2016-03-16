'use strict';

import factory from './VideoPlayerFactory';

//function hasSetter(instance, setterName) {
//
//  const instanceClass = Object.getPrototypeOf(instance);
//  const descriptor = Object.getOwnPropertyDescriptor(instanceClass, setterName);
//
//  if (!descriptor || !descriptor.set) {
//    return false;
//  }
//}

function compose(composedClass) {

  const proto = composedClass.prototype;

  const attributeChangedCallbacks = {};
  proto.attributeChangedCallback = function (attrName, oldValue, newValue) {
    if (attributeChangedCallbacks[attrName]) {
      attributeChangedCallbacks[attrName].call(this, newValue, oldValue);
    }
  };

  return {
    addBooleanAttribute(name, onAttributeChange = void 0) {

      if (typeof onAttributeChange === 'function') {
        attributeChangedCallbacks[name] = function (newValue, oldValue) {
          onAttributeChange.call(this, !!newValue, !!oldValue);
        };
      }

      Object.defineProperty(proto, name, {
        get: function () {
          return this.hasAttribute(name);
        },

        set: function (booleanValue) {
          if (booleanValue) {
            this.setAttribute(name, name);
          } else {
            this.removeAttribute(name);
          }

          return this;
        }
      });

      return this;
    },

    addStringAttribute(name, onAttributeChange = void 0) {

      if (typeof onAttributeChange === 'function') {
        attributeChangedCallbacks[name] = onAttributeChange;
      }

      Object.defineProperty(proto, name, {
        get: function () {
          return this.getAttribute(name);
        },

        set: function (value) {
          this.setAttribute(name, value);
          return this;
        }
      });

      return this;
    },

    build() {
      return composedClass;
    }
  };
}

function _updateAdapter(name) {
  return function (newValue, oldValue) {
    if (this._adapter) {
      this._adapter[name] = newValue;
    }
  }
}

const SVPElement = compose(class extends HTMLElement {
  createdCallback() {
    this.createShadowRoot();
  }

  attachedCallback() {
    this._createAdapter();
  }

  _createAdapter() {
    if (this._adapter) {
      this.shadowRoot.removeChild(this._adapter.playerElement);
    }

    const url = this.src;
    if (!url) {
      this._adapter = null;
      return;
    }

    /**
     * @type {VideoAdapter}
     * @private
     */
    this._adapter = factory.getAdapterFor(url, {
      autoplay: this.autoplay,
      controls: this.controls
    });

    this.shadowRoot.appendChild(this._adapter.playerElement);
  }
})
  .addBooleanAttribute('controls', _updateAdapter('controls'))
  .addBooleanAttribute('autoplay')
  .addStringAttribute('src', function () {
    this._createAdapter();
  })
  .build();

export default function (elementName = 'x-svp-player') {

  factory.ready().then(() => {
    return document.registerElement(elementName, {
      prototype: SVPElement.prototype
    });
  });
};
