'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var mapValues = _interopDefault(require('lodash.mapvalues'));
var invert = _interopDefault(require('lodash.invert'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var isEmpty = _interopDefault(require('lodash.isempty'));
var React = require('react');
var React__default = _interopDefault(React);
var CSSTransition = _interopDefault(require('react-transition-group/CSSTransition'));
require('@babel/polyfill');

// 
// Thanks to ReactDOMFactories for this handy list!

var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr',

// SVG
'circle', 'clipPath', 'defs', 'ellipse', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 
var styled$1 = (function (styledComponent, constructWithOptions) {
  var styled$$1 = function styled$$1(tag) {
    return constructWithOptions(styledComponent, tag);
  };

  // Shorthands for all valid HTML Elements
  domElements.forEach(function (domElement) {
    styled$$1[domElement] = styled$$1(domElement);
  });

  return styled$$1;
});

var STATES = {
  appear: "appear",
  appearActive: "appear-active",
  enter: "enter",
  enterActive: "enter-active",
  exit: "exit",
  exitActive: "exit-active"
};

var classNames = function classNames(id) {
  return mapValues(STATES, function (type) {
    return id + "-" + type;
  });
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};





var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();



var taggedTemplateLiteral = function (strings, raw) {
  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
};









var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var transitionProps = ["in",
// Pass timeout through to use in css templates
// "timeout",
"mountOnEnter", "unmountOnExit", "onEnter", "onEntering", "onEntered", "onExit", "onExited", "onExiting", "onExit", "onExited", "onExiting", "onAppear"];

function partition(props) {
  var groups = { transition: {}, props: {} };
  Object.entries(props).forEach(function (_ref) {
    var _ref2 = slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (transitionProps.includes(key)) {
      groups.transition[key] = value;
    } else {
      groups.props[key] = value;
    }
  });
  return groups;
}

var STATES_BY_NAME = invert(STATES);

var PATTERN = new RegExp("([^\\s;}]+|^):(" + Object.values(STATES).join("|") + ")(?=[\\s\\+~,{])", "g");

var getClassName = function getClassName(state) {
  return function (props) {
    return "&." + props.transitionClassNames[state];
  };
};

// Replace &:state with a class name selector
var walkChunk = function walkChunk(_ref) {
  var strings = _ref.strings,
      interpolations = _ref.interpolations;
  return function (_, chunk) {
    var match = void 0;
    var lastIndex = 0;
    // eslint-disable-next-line no-cond-assign
    while (match = PATTERN.exec(chunk)) {
      var _match$slice = match.slice(1),
          _match$slice2 = slicedToArray(_match$slice, 2),
          target = _match$slice2[0],
          element = _match$slice2[1];

      var state = STATES_BY_NAME[element];
      var len = match[0].length;
      if (target === "&") {
        strings.push(chunk.substring(lastIndex, match.index));
        interpolations.splice(strings.length - 1, 0, getClassName(state));
      } else if (target === "") {
        var targetIndex = strings.length - 1;
        var Target = interpolations[targetIndex];
        if (!isAnimatedComponent(Target)) {
          var name = Target && Target.constructor ? Target.constructor.name : Target;
          throw new Error("Invalid transition target \"" + name + "\". Target must be an AnimatedComponent.");
        }
        interpolations.splice(targetIndex, 1, "." + Target.classNames[state]);
      } else {
        throw new Error("Invalid transition target \"" + target + "\".");
      }
      lastIndex = match.index + len;
    }
    strings.push(chunk.substring(lastIndex, chunk.length));
  };
};

function parseCss(strings) {
  for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var next = {
    strings: [],
    interpolations: [].concat(interpolations)
  };
  strings.reduce(walkChunk(next), null);
  return styled.css.apply(undefined, [next.strings].concat(toConsumableArray(next.interpolations)));
}

var _templateObject = taggedTemplateLiteral(["", ""], ["", ""]);

var delegate = function delegate(animated) {
  return function (fun) {
    return function () {
      return animated(fun(_templateObject, parseCss.apply(undefined, arguments)));
    };
  };
};

var groupConfig = function groupConfig(_ref) {
  var attrs = _ref.attrs,
      config = objectWithoutProperties(_ref, ["attrs"]);

  var groups = { transition: {}, styled: _extends({}, config) };
  if (attrs) {
    var _groupProps = partition(attrs),
        transition = _groupProps.transition,
        props = _groupProps.props;

    groups.transition.attrs = transition;
    if (!isEmpty(props)) groups.styled.attrs = props;
  }
  return groups;
};

var extend = function extend(animated, target) {
  var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var _groupConfig = groupConfig(config),
      transition = _groupConfig.transition,
      styledConfig = _groupConfig.styled;

  var delegateThis = function delegateThis(cfg) {
    return delegate(animated(_extends({}, transition, cfg)));
  };
  if (!isEmpty(styledConfig)) {
    return extend(animated, target.withConfig(styledConfig), transition);
  }
  var result = delegateThis({})(target);
  result.withConfig = function (options) {
    var cfg = groupConfig(options);
    return delegateThis(cfg.transition)(target.withConfig(cfg.styled));
  };
  result.attrs = function (attrs) {
    var cfg = groupConfig({ attrs: attrs });
    return delegateThis(cfg.transition)(target.attrs(cfg.styled.attrs));
  };
  return result;
};

var construct = (function (animated, Tag, config) {
  return extend(animated, styled__default(Tag), config);
});

var animated = function animated(options) {
  return function animatedWithOptions(Target) {
    var _class, _temp;

    var attrs = options.attrs;

    return _temp = _class = function (_Component) {
      inherits(_class, _Component);

      function _class() {
        classCallCheck(this, _class);
        return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      createClass(_class, [{
        key: "renderTarget",
        value: function renderTarget(props) {
          return React__default.createElement(Target, _extends({ transitionClassNames: this.constructor.classNames }, props));
        }
      }, {
        key: "renderChildren",
        value: function renderChildren(_ref) {
          var _this2 = this;

          var children = _ref.children,
              props = objectWithoutProperties(_ref, ["children"]);

          if (typeof children === "function") {
            return function (state) {
              return _this2.renderTarget(_extends({}, props, {
                children: children(state)
              }));
            };
          }
          return this.renderTarget(_extends({ children: children }, props));
        }
      }, {
        key: "render",
        value: function render() {
          var _groupProps = partition(this.props),
              transition = _groupProps.transition,
              props = _groupProps.props;

          var transitionClassNames = this.constructor.classNames;

          return React__default.createElement(
            CSSTransition,
            _extends({}, transition, props, this.constructor.attrs || {}, Target.attrs || {}, {
              classNames: transitionClassNames }),
            this.renderChildren(_extends({}, props, { transitionClassNames: transitionClassNames }))
          );
        }
      }], [{
        key: "withComponent",
        value: function withComponent() {
          return animatedWithOptions(Target.withComponent.apply(Target, arguments));
        }
      }, {
        key: "classNames",
        get: function get$$1() {
          return classNames(this.styledComponentId);
        }
      }, {
        key: "extend",
        get: function get$$1() {
          return extend(animated, Target.extend, options);
        }
      }]);
      return _class;
    }(React.Component), _class.Target = Target, _class.displayName = "Animated(" + Target.displayName + ")", _class.styledComponentId = Target.styledComponentId, _class.attrs = attrs, _temp;
  };
};

var isAnimatedComponent = function isAnimatedComponent(Klass) {
  return "styledComponentId" in Klass && "classNames" in Klass;
};

var index = styled$1(animated, construct);

exports.default = index;
exports.css = parseCss;
//# sourceMappingURL=bundle.js.map
