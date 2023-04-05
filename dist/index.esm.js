function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var reactExports = {};
var react = {
  get exports(){ return reactExports; },
  set exports(v){ reactExports = v; },
};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;
	react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
	react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};
	react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};
	react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.2.0";
	return react_production_min;
}

var react_developmentExports = {};
var react_development = {
  get exports(){ return react_developmentExports; },
  set exports(v){ react_developmentExports = v; },
};

/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_development;

function requireReact_development () {
	if (hasRequiredReact_development) return react_developmentExports;
	hasRequiredReact_development = 1;
	(function (module, exports) {

		if (process.env.NODE_ENV !== "production") {
		  (function() {

		/* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
		}
		          var ReactVersion = '18.2.0';

		// ATTENTION
		// When adding new symbols to this file,
		// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
		// The Symbol used to tag the ReactElement-like types.
		var REACT_ELEMENT_TYPE = Symbol.for('react.element');
		var REACT_PORTAL_TYPE = Symbol.for('react.portal');
		var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
		var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
		var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
		var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
		var REACT_CONTEXT_TYPE = Symbol.for('react.context');
		var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
		var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
		var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
		var REACT_MEMO_TYPE = Symbol.for('react.memo');
		var REACT_LAZY_TYPE = Symbol.for('react.lazy');
		var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
		var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
		var FAUX_ITERATOR_SYMBOL = '@@iterator';
		function getIteratorFn(maybeIterable) {
		  if (maybeIterable === null || typeof maybeIterable !== 'object') {
		    return null;
		  }

		  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

		  if (typeof maybeIterator === 'function') {
		    return maybeIterator;
		  }

		  return null;
		}

		/**
		 * Keeps track of the current dispatcher.
		 */
		var ReactCurrentDispatcher = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		/**
		 * Keeps track of the current batch's configuration such as how long an update
		 * should suspend for if it needs to.
		 */
		var ReactCurrentBatchConfig = {
		  transition: null
		};

		var ReactCurrentActQueue = {
		  current: null,
		  // Used to reproduce behavior of `batchedUpdates` in legacy mode.
		  isBatchingLegacy: false,
		  didScheduleLegacyUpdate: false
		};

		/**
		 * Keeps track of the current owner.
		 *
		 * The current owner is the component who should own any components that are
		 * currently being constructed.
		 */
		var ReactCurrentOwner = {
		  /**
		   * @internal
		   * @type {ReactComponent}
		   */
		  current: null
		};

		var ReactDebugCurrentFrame = {};
		var currentExtraStackFrame = null;
		function setExtraStackFrame(stack) {
		  {
		    currentExtraStackFrame = stack;
		  }
		}

		{
		  ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
		    {
		      currentExtraStackFrame = stack;
		    }
		  }; // Stack implementation injected by the current renderer.


		  ReactDebugCurrentFrame.getCurrentStack = null;

		  ReactDebugCurrentFrame.getStackAddendum = function () {
		    var stack = ''; // Add an extra top frame while an element is being validated

		    if (currentExtraStackFrame) {
		      stack += currentExtraStackFrame;
		    } // Delegate to the injected renderer-specific implementation


		    var impl = ReactDebugCurrentFrame.getCurrentStack;

		    if (impl) {
		      stack += impl() || '';
		    }

		    return stack;
		  };
		}

		// -----------------------------------------------------------------------------

		var enableScopeAPI = false; // Experimental Create Event Handle API.
		var enableCacheElement = false;
		var enableTransitionTracing = false; // No known bugs, but needs performance testing

		var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
		// stuff. Intended to enable React core members to more easily debug scheduling
		// issues in DEV builds.

		var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

		var ReactSharedInternals = {
		  ReactCurrentDispatcher: ReactCurrentDispatcher,
		  ReactCurrentBatchConfig: ReactCurrentBatchConfig,
		  ReactCurrentOwner: ReactCurrentOwner
		};

		{
		  ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
		  ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
		}

		// by calls to these methods by a Babel plugin.
		//
		// In PROD (or in packages without access to React internals),
		// they are left as they are instead.

		function warn(format) {
		  {
		    {
		      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		        args[_key - 1] = arguments[_key];
		      }

		      printWarning('warn', format, args);
		    }
		  }
		}
		function error(format) {
		  {
		    {
		      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
		        args[_key2 - 1] = arguments[_key2];
		      }

		      printWarning('error', format, args);
		    }
		  }
		}

		function printWarning(level, format, args) {
		  // When changing this logic, you might want to also
		  // update consoleWithStackDev.www.js as well.
		  {
		    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
		    var stack = ReactDebugCurrentFrame.getStackAddendum();

		    if (stack !== '') {
		      format += '%s';
		      args = args.concat([stack]);
		    } // eslint-disable-next-line react-internal/safe-string-coercion


		    var argsWithFormat = args.map(function (item) {
		      return String(item);
		    }); // Careful: RN currently depends on this prefix

		    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
		    // breaks IE9: https://github.com/facebook/react/issues/13610
		    // eslint-disable-next-line react-internal/no-production-logging

		    Function.prototype.apply.call(console[level], console, argsWithFormat);
		  }
		}

		var didWarnStateUpdateForUnmountedComponent = {};

		function warnNoop(publicInstance, callerName) {
		  {
		    var _constructor = publicInstance.constructor;
		    var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
		    var warningKey = componentName + "." + callerName;

		    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
		      return;
		    }

		    error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);

		    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
		  }
		}
		/**
		 * This is the abstract API for an update queue.
		 */


		var ReactNoopUpdateQueue = {
		  /**
		   * Checks whether or not this composite component is mounted.
		   * @param {ReactClass} publicInstance The instance we want to test.
		   * @return {boolean} True if mounted, false otherwise.
		   * @protected
		   * @final
		   */
		  isMounted: function (publicInstance) {
		    return false;
		  },

		  /**
		   * Forces an update. This should only be invoked when it is known with
		   * certainty that we are **not** in a DOM transaction.
		   *
		   * You may want to call this when you know that some deeper aspect of the
		   * component's state has changed but `setState` was not called.
		   *
		   * This will not invoke `shouldComponentUpdate`, but it will invoke
		   * `componentWillUpdate` and `componentDidUpdate`.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueForceUpdate: function (publicInstance, callback, callerName) {
		    warnNoop(publicInstance, 'forceUpdate');
		  },

		  /**
		   * Replaces all of the state. Always use this or `setState` to mutate state.
		   * You should treat `this.state` as immutable.
		   *
		   * There is no guarantee that `this.state` will be immediately updated, so
		   * accessing `this.state` after calling this method may return the old value.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} completeState Next state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} callerName name of the calling function in the public API.
		   * @internal
		   */
		  enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
		    warnNoop(publicInstance, 'replaceState');
		  },

		  /**
		   * Sets a subset of the state. This only exists because _pendingState is
		   * internal. This provides a merging strategy that is not available to deep
		   * properties which is confusing. TODO: Expose pendingState or don't use it
		   * during the merge.
		   *
		   * @param {ReactClass} publicInstance The instance that should rerender.
		   * @param {object} partialState Next partial state to be merged with state.
		   * @param {?function} callback Called after component is updated.
		   * @param {?string} Name of the calling function in the public API.
		   * @internal
		   */
		  enqueueSetState: function (publicInstance, partialState, callback, callerName) {
		    warnNoop(publicInstance, 'setState');
		  }
		};

		var assign = Object.assign;

		var emptyObject = {};

		{
		  Object.freeze(emptyObject);
		}
		/**
		 * Base class helpers for the updating state of a component.
		 */


		function Component(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
		  // renderer.

		  this.updater = updater || ReactNoopUpdateQueue;
		}

		Component.prototype.isReactComponent = {};
		/**
		 * Sets a subset of the state. Always use this to mutate
		 * state. You should treat `this.state` as immutable.
		 *
		 * There is no guarantee that `this.state` will be immediately updated, so
		 * accessing `this.state` after calling this method may return the old value.
		 *
		 * There is no guarantee that calls to `setState` will run synchronously,
		 * as they may eventually be batched together.  You can provide an optional
		 * callback that will be executed when the call to setState is actually
		 * completed.
		 *
		 * When a function is provided to setState, it will be called at some point in
		 * the future (not synchronously). It will be called with the up to date
		 * component arguments (state, props, context). These values can be different
		 * from this.* because your function may be called after receiveProps but before
		 * shouldComponentUpdate, and this new state, props, and context will not yet be
		 * assigned to this.
		 *
		 * @param {object|function} partialState Next partial state or function to
		 *        produce next partial state to be merged with current state.
		 * @param {?function} callback Called after state is updated.
		 * @final
		 * @protected
		 */

		Component.prototype.setState = function (partialState, callback) {
		  if (typeof partialState !== 'object' && typeof partialState !== 'function' && partialState != null) {
		    throw new Error('setState(...): takes an object of state variables to update or a ' + 'function which returns an object of state variables.');
		  }

		  this.updater.enqueueSetState(this, partialState, callback, 'setState');
		};
		/**
		 * Forces an update. This should only be invoked when it is known with
		 * certainty that we are **not** in a DOM transaction.
		 *
		 * You may want to call this when you know that some deeper aspect of the
		 * component's state has changed but `setState` was not called.
		 *
		 * This will not invoke `shouldComponentUpdate`, but it will invoke
		 * `componentWillUpdate` and `componentDidUpdate`.
		 *
		 * @param {?function} callback Called after update is complete.
		 * @final
		 * @protected
		 */


		Component.prototype.forceUpdate = function (callback) {
		  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
		};
		/**
		 * Deprecated APIs. These APIs used to exist on classic React classes but since
		 * we would like to deprecate them, we're not going to move them over to this
		 * modern base class. Instead, we define a getter that warns if it's accessed.
		 */


		{
		  var deprecatedAPIs = {
		    isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
		    replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
		  };

		  var defineDeprecationWarning = function (methodName, info) {
		    Object.defineProperty(Component.prototype, methodName, {
		      get: function () {
		        warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);

		        return undefined;
		      }
		    });
		  };

		  for (var fnName in deprecatedAPIs) {
		    if (deprecatedAPIs.hasOwnProperty(fnName)) {
		      defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
		    }
		  }
		}

		function ComponentDummy() {}

		ComponentDummy.prototype = Component.prototype;
		/**
		 * Convenience component with default shallow equality check for sCU.
		 */

		function PureComponent(props, context, updater) {
		  this.props = props;
		  this.context = context; // If a component has string refs, we will assign a different object later.

		  this.refs = emptyObject;
		  this.updater = updater || ReactNoopUpdateQueue;
		}

		var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
		pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

		assign(pureComponentPrototype, Component.prototype);
		pureComponentPrototype.isPureReactComponent = true;

		// an immutable object with a single mutable value
		function createRef() {
		  var refObject = {
		    current: null
		  };

		  {
		    Object.seal(refObject);
		  }

		  return refObject;
		}

		var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

		function isArray(a) {
		  return isArrayImpl(a);
		}

		/*
		 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
		 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
		 *
		 * The functions in this module will throw an easier-to-understand,
		 * easier-to-debug exception with a clear errors message message explaining the
		 * problem. (Instead of a confusing exception thrown inside the implementation
		 * of the `value` object).
		 */
		// $FlowFixMe only called in DEV, so void return is not possible.
		function typeName(value) {
		  {
		    // toStringTag is needed for namespaced types like Temporal.Instant
		    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
		    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
		    return type;
		  }
		} // $FlowFixMe only called in DEV, so void return is not possible.


		function willCoercionThrow(value) {
		  {
		    try {
		      testStringCoercion(value);
		      return false;
		    } catch (e) {
		      return true;
		    }
		  }
		}

		function testStringCoercion(value) {
		  // If you ended up here by following an exception call stack, here's what's
		  // happened: you supplied an object or symbol value to React (as a prop, key,
		  // DOM attribute, CSS property, string ref, etc.) and when React tried to
		  // coerce it to a string using `'' + value`, an exception was thrown.
		  //
		  // The most common types that will cause this exception are `Symbol` instances
		  // and Temporal objects like `Temporal.Instant`. But any object that has a
		  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
		  // exception. (Library authors do this to prevent users from using built-in
		  // numeric operators like `+` or comparison operators like `>=` because custom
		  // methods are needed to perform accurate arithmetic or comparison.)
		  //
		  // To fix the problem, coerce this object or symbol value to a string before
		  // passing it to React. The most reliable way is usually `String(value)`.
		  //
		  // To find which value is throwing, check the browser or debugger console.
		  // Before this exception was thrown, there should be `console.error` output
		  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
		  // problem and how that type was used: key, atrribute, input value prop, etc.
		  // In most cases, this console output also shows the component and its
		  // ancestor components where the exception happened.
		  //
		  // eslint-disable-next-line react-internal/safe-string-coercion
		  return '' + value;
		}
		function checkKeyStringCoercion(value) {
		  {
		    if (willCoercionThrow(value)) {
		      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

		      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
		    }
		  }
		}

		function getWrappedName(outerType, innerType, wrapperName) {
		  var displayName = outerType.displayName;

		  if (displayName) {
		    return displayName;
		  }

		  var functionName = innerType.displayName || innerType.name || '';
		  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
		} // Keep in sync with react-reconciler/getComponentNameFromFiber


		function getContextName(type) {
		  return type.displayName || 'Context';
		} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


		function getComponentNameFromType(type) {
		  if (type == null) {
		    // Host root, text node or just invalid type.
		    return null;
		  }

		  {
		    if (typeof type.tag === 'number') {
		      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
		    }
		  }

		  if (typeof type === 'function') {
		    return type.displayName || type.name || null;
		  }

		  if (typeof type === 'string') {
		    return type;
		  }

		  switch (type) {
		    case REACT_FRAGMENT_TYPE:
		      return 'Fragment';

		    case REACT_PORTAL_TYPE:
		      return 'Portal';

		    case REACT_PROFILER_TYPE:
		      return 'Profiler';

		    case REACT_STRICT_MODE_TYPE:
		      return 'StrictMode';

		    case REACT_SUSPENSE_TYPE:
		      return 'Suspense';

		    case REACT_SUSPENSE_LIST_TYPE:
		      return 'SuspenseList';

		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_CONTEXT_TYPE:
		        var context = type;
		        return getContextName(context) + '.Consumer';

		      case REACT_PROVIDER_TYPE:
		        var provider = type;
		        return getContextName(provider._context) + '.Provider';

		      case REACT_FORWARD_REF_TYPE:
		        return getWrappedName(type, type.render, 'ForwardRef');

		      case REACT_MEMO_TYPE:
		        var outerName = type.displayName || null;

		        if (outerName !== null) {
		          return outerName;
		        }

		        return getComponentNameFromType(type.type) || 'Memo';

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            return getComponentNameFromType(init(payload));
		          } catch (x) {
		            return null;
		          }
		        }

		      // eslint-disable-next-line no-fallthrough
		    }
		  }

		  return null;
		}

		var hasOwnProperty = Object.prototype.hasOwnProperty;

		var RESERVED_PROPS = {
		  key: true,
		  ref: true,
		  __self: true,
		  __source: true
		};
		var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;

		{
		  didWarnAboutStringRefs = {};
		}

		function hasValidRef(config) {
		  {
		    if (hasOwnProperty.call(config, 'ref')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.ref !== undefined;
		}

		function hasValidKey(config) {
		  {
		    if (hasOwnProperty.call(config, 'key')) {
		      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

		      if (getter && getter.isReactWarning) {
		        return false;
		      }
		    }
		  }

		  return config.key !== undefined;
		}

		function defineKeyPropWarningGetter(props, displayName) {
		  var warnAboutAccessingKey = function () {
		    {
		      if (!specialPropKeyWarningShown) {
		        specialPropKeyWarningShown = true;

		        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingKey.isReactWarning = true;
		  Object.defineProperty(props, 'key', {
		    get: warnAboutAccessingKey,
		    configurable: true
		  });
		}

		function defineRefPropWarningGetter(props, displayName) {
		  var warnAboutAccessingRef = function () {
		    {
		      if (!specialPropRefWarningShown) {
		        specialPropRefWarningShown = true;

		        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
		      }
		    }
		  };

		  warnAboutAccessingRef.isReactWarning = true;
		  Object.defineProperty(props, 'ref', {
		    get: warnAboutAccessingRef,
		    configurable: true
		  });
		}

		function warnIfStringRefCannotBeAutoConverted(config) {
		  {
		    if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
		      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

		      if (!didWarnAboutStringRefs[componentName]) {
		        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);

		        didWarnAboutStringRefs[componentName] = true;
		      }
		    }
		  }
		}
		/**
		 * Factory method to create a new React element. This no longer adheres to
		 * the class pattern, so do not use new to call it. Also, instanceof check
		 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
		 * if something is a React Element.
		 *
		 * @param {*} type
		 * @param {*} props
		 * @param {*} key
		 * @param {string|object} ref
		 * @param {*} owner
		 * @param {*} self A *temporary* helper to detect places where `this` is
		 * different from the `owner` when React.createElement is called, so that we
		 * can warn. We want to get rid of owner and replace string `ref`s with arrow
		 * functions, and as long as `this` and owner are the same, there will be no
		 * change in behavior.
		 * @param {*} source An annotation object (added by a transpiler or otherwise)
		 * indicating filename, line number, and/or other information.
		 * @internal
		 */


		var ReactElement = function (type, key, ref, self, source, owner, props) {
		  var element = {
		    // This tag allows us to uniquely identify this as a React Element
		    $$typeof: REACT_ELEMENT_TYPE,
		    // Built-in properties that belong on the element
		    type: type,
		    key: key,
		    ref: ref,
		    props: props,
		    // Record the component responsible for creating this element.
		    _owner: owner
		  };

		  {
		    // The validation flag is currently mutative. We put it on
		    // an external backing store so that we can freeze the whole object.
		    // This can be replaced with a WeakMap once they are implemented in
		    // commonly used development environments.
		    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
		    // the validation flag non-enumerable (where possible, which should
		    // include every environment we run tests in), so the test framework
		    // ignores it.

		    Object.defineProperty(element._store, 'validated', {
		      configurable: false,
		      enumerable: false,
		      writable: true,
		      value: false
		    }); // self and source are DEV only properties.

		    Object.defineProperty(element, '_self', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: self
		    }); // Two elements created in two different places should be considered
		    // equal for testing purposes and therefore we hide it from enumeration.

		    Object.defineProperty(element, '_source', {
		      configurable: false,
		      enumerable: false,
		      writable: false,
		      value: source
		    });

		    if (Object.freeze) {
		      Object.freeze(element.props);
		      Object.freeze(element);
		    }
		  }

		  return element;
		};
		/**
		 * Create and return a new ReactElement of the given type.
		 * See https://reactjs.org/docs/react-api.html#createelement
		 */

		function createElement(type, config, children) {
		  var propName; // Reserved names are extracted

		  var props = {};
		  var key = null;
		  var ref = null;
		  var self = null;
		  var source = null;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      ref = config.ref;

		      {
		        warnIfStringRefCannotBeAutoConverted(config);
		      }
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    }

		    self = config.__self === undefined ? null : config.__self;
		    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        props[propName] = config[propName];
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    {
		      if (Object.freeze) {
		        Object.freeze(childArray);
		      }
		    }

		    props.children = childArray;
		  } // Resolve default props


		  if (type && type.defaultProps) {
		    var defaultProps = type.defaultProps;

		    for (propName in defaultProps) {
		      if (props[propName] === undefined) {
		        props[propName] = defaultProps[propName];
		      }
		    }
		  }

		  {
		    if (key || ref) {
		      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

		      if (key) {
		        defineKeyPropWarningGetter(props, displayName);
		      }

		      if (ref) {
		        defineRefPropWarningGetter(props, displayName);
		      }
		    }
		  }

		  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
		}
		function cloneAndReplaceKey(oldElement, newKey) {
		  var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
		  return newElement;
		}
		/**
		 * Clone and return a new ReactElement using element as the starting point.
		 * See https://reactjs.org/docs/react-api.html#cloneelement
		 */

		function cloneElement(element, config, children) {
		  if (element === null || element === undefined) {
		    throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
		  }

		  var propName; // Original props are copied

		  var props = assign({}, element.props); // Reserved names are extracted

		  var key = element.key;
		  var ref = element.ref; // Self is preserved since the owner is preserved.

		  var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
		  // transpiler, and the original source is probably a better indicator of the
		  // true owner.

		  var source = element._source; // Owner will be preserved, unless ref is overridden

		  var owner = element._owner;

		  if (config != null) {
		    if (hasValidRef(config)) {
		      // Silently steal the ref from the parent.
		      ref = config.ref;
		      owner = ReactCurrentOwner.current;
		    }

		    if (hasValidKey(config)) {
		      {
		        checkKeyStringCoercion(config.key);
		      }

		      key = '' + config.key;
		    } // Remaining properties override existing props


		    var defaultProps;

		    if (element.type && element.type.defaultProps) {
		      defaultProps = element.type.defaultProps;
		    }

		    for (propName in config) {
		      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
		        if (config[propName] === undefined && defaultProps !== undefined) {
		          // Resolve default props
		          props[propName] = defaultProps[propName];
		        } else {
		          props[propName] = config[propName];
		        }
		      }
		    }
		  } // Children can be more than one argument, and those are transferred onto
		  // the newly allocated props object.


		  var childrenLength = arguments.length - 2;

		  if (childrenLength === 1) {
		    props.children = children;
		  } else if (childrenLength > 1) {
		    var childArray = Array(childrenLength);

		    for (var i = 0; i < childrenLength; i++) {
		      childArray[i] = arguments[i + 2];
		    }

		    props.children = childArray;
		  }

		  return ReactElement(element.type, key, ref, self, source, owner, props);
		}
		/**
		 * Verifies the object is a ReactElement.
		 * See https://reactjs.org/docs/react-api.html#isvalidelement
		 * @param {?object} object
		 * @return {boolean} True if `object` is a ReactElement.
		 * @final
		 */

		function isValidElement(object) {
		  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
		}

		var SEPARATOR = '.';
		var SUBSEPARATOR = ':';
		/**
		 * Escape and wrap key so it is safe to use as a reactid
		 *
		 * @param {string} key to be escaped.
		 * @return {string} the escaped key.
		 */

		function escape(key) {
		  var escapeRegex = /[=:]/g;
		  var escaperLookup = {
		    '=': '=0',
		    ':': '=2'
		  };
		  var escapedString = key.replace(escapeRegex, function (match) {
		    return escaperLookup[match];
		  });
		  return '$' + escapedString;
		}
		/**
		 * TODO: Test that a single child and an array with one item have the same key
		 * pattern.
		 */


		var didWarnAboutMaps = false;
		var userProvidedKeyEscapeRegex = /\/+/g;

		function escapeUserProvidedKey(text) {
		  return text.replace(userProvidedKeyEscapeRegex, '$&/');
		}
		/**
		 * Generate a key string that identifies a element within a set.
		 *
		 * @param {*} element A element that could contain a manual key.
		 * @param {number} index Index that is used if a manual key is not provided.
		 * @return {string}
		 */


		function getElementKey(element, index) {
		  // Do some typechecking here since we call this blindly. We want to ensure
		  // that we don't block potential future ES APIs.
		  if (typeof element === 'object' && element !== null && element.key != null) {
		    // Explicit key
		    {
		      checkKeyStringCoercion(element.key);
		    }

		    return escape('' + element.key);
		  } // Implicit key determined by the index in the set


		  return index.toString(36);
		}

		function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
		  var type = typeof children;

		  if (type === 'undefined' || type === 'boolean') {
		    // All of the above are perceived as null.
		    children = null;
		  }

		  var invokeCallback = false;

		  if (children === null) {
		    invokeCallback = true;
		  } else {
		    switch (type) {
		      case 'string':
		      case 'number':
		        invokeCallback = true;
		        break;

		      case 'object':
		        switch (children.$$typeof) {
		          case REACT_ELEMENT_TYPE:
		          case REACT_PORTAL_TYPE:
		            invokeCallback = true;
		        }

		    }
		  }

		  if (invokeCallback) {
		    var _child = children;
		    var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
		    // so that it's consistent if the number of children grows:

		    var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

		    if (isArray(mappedChild)) {
		      var escapedChildKey = '';

		      if (childKey != null) {
		        escapedChildKey = escapeUserProvidedKey(childKey) + '/';
		      }

		      mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
		        return c;
		      });
		    } else if (mappedChild != null) {
		      if (isValidElement(mappedChild)) {
		        {
		          // The `if` statement here prevents auto-disabling of the safe
		          // coercion ESLint rule, so we must manually disable it below.
		          // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		          if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
		            checkKeyStringCoercion(mappedChild.key);
		          }
		        }

		        mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
		        // traverseAllChildren used to do for objects as children
		        escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
		        mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
		        // eslint-disable-next-line react-internal/safe-string-coercion
		        escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
		      }

		      array.push(mappedChild);
		    }

		    return 1;
		  }

		  var child;
		  var nextName;
		  var subtreeCount = 0; // Count of children found in the current subtree.

		  var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

		  if (isArray(children)) {
		    for (var i = 0; i < children.length; i++) {
		      child = children[i];
		      nextName = nextNamePrefix + getElementKey(child, i);
		      subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		    }
		  } else {
		    var iteratorFn = getIteratorFn(children);

		    if (typeof iteratorFn === 'function') {
		      var iterableChildren = children;

		      {
		        // Warn about using Maps as children
		        if (iteratorFn === iterableChildren.entries) {
		          if (!didWarnAboutMaps) {
		            warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
		          }

		          didWarnAboutMaps = true;
		        }
		      }

		      var iterator = iteratorFn.call(iterableChildren);
		      var step;
		      var ii = 0;

		      while (!(step = iterator.next()).done) {
		        child = step.value;
		        nextName = nextNamePrefix + getElementKey(child, ii++);
		        subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
		      }
		    } else if (type === 'object') {
		      // eslint-disable-next-line react-internal/safe-string-coercion
		      var childrenString = String(children);
		      throw new Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). " + 'If you meant to render a collection of children, use an array ' + 'instead.');
		    }
		  }

		  return subtreeCount;
		}

		/**
		 * Maps children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
		 *
		 * The provided mapFunction(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} func The map function.
		 * @param {*} context Context for mapFunction.
		 * @return {object} Object containing the ordered map of results.
		 */
		function mapChildren(children, func, context) {
		  if (children == null) {
		    return children;
		  }

		  var result = [];
		  var count = 0;
		  mapIntoArray(children, result, '', '', function (child) {
		    return func.call(context, child, count++);
		  });
		  return result;
		}
		/**
		 * Count the number of children that are typically specified as
		 * `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrencount
		 *
		 * @param {?*} children Children tree container.
		 * @return {number} The number of children.
		 */


		function countChildren(children) {
		  var n = 0;
		  mapChildren(children, function () {
		    n++; // Don't return anything
		  });
		  return n;
		}

		/**
		 * Iterates through children that are typically specified as `props.children`.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
		 *
		 * The provided forEachFunc(child, index) will be called for each
		 * leaf child.
		 *
		 * @param {?*} children Children tree container.
		 * @param {function(*, int)} forEachFunc
		 * @param {*} forEachContext Context for forEachContext.
		 */
		function forEachChildren(children, forEachFunc, forEachContext) {
		  mapChildren(children, function () {
		    forEachFunc.apply(this, arguments); // Don't return anything.
		  }, forEachContext);
		}
		/**
		 * Flatten a children object (typically specified as `props.children`) and
		 * return an array with appropriately re-keyed children.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
		 */


		function toArray(children) {
		  return mapChildren(children, function (child) {
		    return child;
		  }) || [];
		}
		/**
		 * Returns the first child in a collection of children and verifies that there
		 * is only one child in the collection.
		 *
		 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
		 *
		 * The current implementation of this function assumes that a single child gets
		 * passed without a wrapper, but the purpose of this helper function is to
		 * abstract away the particular structure of children.
		 *
		 * @param {?object} children Child collection structure.
		 * @return {ReactElement} The first and only `ReactElement` contained in the
		 * structure.
		 */


		function onlyChild(children) {
		  if (!isValidElement(children)) {
		    throw new Error('React.Children.only expected to receive a single React element child.');
		  }

		  return children;
		}

		function createContext(defaultValue) {
		  // TODO: Second argument used to be an optional `calculateChangedBits`
		  // function. Warn to reserve for future use?
		  var context = {
		    $$typeof: REACT_CONTEXT_TYPE,
		    // As a workaround to support multiple concurrent renderers, we categorize
		    // some renderers as primary and others as secondary. We only expect
		    // there to be two concurrent renderers at most: React Native (primary) and
		    // Fabric (secondary); React DOM (primary) and React ART (secondary).
		    // Secondary renderers store their context values on separate fields.
		    _currentValue: defaultValue,
		    _currentValue2: defaultValue,
		    // Used to track how many concurrent renderers this context currently
		    // supports within in a single renderer. Such as parallel server rendering.
		    _threadCount: 0,
		    // These are circular
		    Provider: null,
		    Consumer: null,
		    // Add these to use same hidden class in VM as ServerContext
		    _defaultValue: null,
		    _globalName: null
		  };
		  context.Provider = {
		    $$typeof: REACT_PROVIDER_TYPE,
		    _context: context
		  };
		  var hasWarnedAboutUsingNestedContextConsumers = false;
		  var hasWarnedAboutUsingConsumerProvider = false;
		  var hasWarnedAboutDisplayNameOnConsumer = false;

		  {
		    // A separate object, but proxies back to the original context object for
		    // backwards compatibility. It has a different $$typeof, so we can properly
		    // warn for the incorrect usage of Context as a Consumer.
		    var Consumer = {
		      $$typeof: REACT_CONTEXT_TYPE,
		      _context: context
		    }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

		    Object.defineProperties(Consumer, {
		      Provider: {
		        get: function () {
		          if (!hasWarnedAboutUsingConsumerProvider) {
		            hasWarnedAboutUsingConsumerProvider = true;

		            error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
		          }

		          return context.Provider;
		        },
		        set: function (_Provider) {
		          context.Provider = _Provider;
		        }
		      },
		      _currentValue: {
		        get: function () {
		          return context._currentValue;
		        },
		        set: function (_currentValue) {
		          context._currentValue = _currentValue;
		        }
		      },
		      _currentValue2: {
		        get: function () {
		          return context._currentValue2;
		        },
		        set: function (_currentValue2) {
		          context._currentValue2 = _currentValue2;
		        }
		      },
		      _threadCount: {
		        get: function () {
		          return context._threadCount;
		        },
		        set: function (_threadCount) {
		          context._threadCount = _threadCount;
		        }
		      },
		      Consumer: {
		        get: function () {
		          if (!hasWarnedAboutUsingNestedContextConsumers) {
		            hasWarnedAboutUsingNestedContextConsumers = true;

		            error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
		          }

		          return context.Consumer;
		        }
		      },
		      displayName: {
		        get: function () {
		          return context.displayName;
		        },
		        set: function (displayName) {
		          if (!hasWarnedAboutDisplayNameOnConsumer) {
		            warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);

		            hasWarnedAboutDisplayNameOnConsumer = true;
		          }
		        }
		      }
		    }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

		    context.Consumer = Consumer;
		  }

		  {
		    context._currentRenderer = null;
		    context._currentRenderer2 = null;
		  }

		  return context;
		}

		var Uninitialized = -1;
		var Pending = 0;
		var Resolved = 1;
		var Rejected = 2;

		function lazyInitializer(payload) {
		  if (payload._status === Uninitialized) {
		    var ctor = payload._result;
		    var thenable = ctor(); // Transition to the next state.
		    // This might throw either because it's missing or throws. If so, we treat it
		    // as still uninitialized and try again next time. Which is the same as what
		    // happens if the ctor or any wrappers processing the ctor throws. This might
		    // end up fixing it if the resolution was a concurrency bug.

		    thenable.then(function (moduleObject) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var resolved = payload;
		        resolved._status = Resolved;
		        resolved._result = moduleObject;
		      }
		    }, function (error) {
		      if (payload._status === Pending || payload._status === Uninitialized) {
		        // Transition to the next state.
		        var rejected = payload;
		        rejected._status = Rejected;
		        rejected._result = error;
		      }
		    });

		    if (payload._status === Uninitialized) {
		      // In case, we're still uninitialized, then we're waiting for the thenable
		      // to resolve. Set it as pending in the meantime.
		      var pending = payload;
		      pending._status = Pending;
		      pending._result = thenable;
		    }
		  }

		  if (payload._status === Resolved) {
		    var moduleObject = payload._result;

		    {
		      if (moduleObject === undefined) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))\n\n" + 'Did you accidentally put curly braces around the import?', moduleObject);
		      }
		    }

		    {
		      if (!('default' in moduleObject)) {
		        error('lazy: Expected the result of a dynamic imp' + 'ort() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
		        'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
		      }
		    }

		    return moduleObject.default;
		  } else {
		    throw payload._result;
		  }
		}

		function lazy(ctor) {
		  var payload = {
		    // We use these fields to store the result.
		    _status: Uninitialized,
		    _result: ctor
		  };
		  var lazyType = {
		    $$typeof: REACT_LAZY_TYPE,
		    _payload: payload,
		    _init: lazyInitializer
		  };

		  {
		    // In production, this would just set it on the object.
		    var defaultProps;
		    var propTypes; // $FlowFixMe

		    Object.defineProperties(lazyType, {
		      defaultProps: {
		        configurable: true,
		        get: function () {
		          return defaultProps;
		        },
		        set: function (newDefaultProps) {
		          error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          defaultProps = newDefaultProps; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'defaultProps', {
		            enumerable: true
		          });
		        }
		      },
		      propTypes: {
		        configurable: true,
		        get: function () {
		          return propTypes;
		        },
		        set: function (newPropTypes) {
		          error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');

		          propTypes = newPropTypes; // Match production behavior more closely:
		          // $FlowFixMe

		          Object.defineProperty(lazyType, 'propTypes', {
		            enumerable: true
		          });
		        }
		      }
		    });
		  }

		  return lazyType;
		}

		function forwardRef(render) {
		  {
		    if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
		      error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
		    } else if (typeof render !== 'function') {
		      error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
		    } else {
		      if (render.length !== 0 && render.length !== 2) {
		        error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
		      }
		    }

		    if (render != null) {
		      if (render.defaultProps != null || render.propTypes != null) {
		        error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
		      }
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_FORWARD_REF_TYPE,
		    render: render
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.forwardRef((props, ref) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!render.name && !render.displayName) {
		          render.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		var REACT_MODULE_REFERENCE;

		{
		  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
		}

		function isValidElementType(type) {
		  if (typeof type === 'string' || typeof type === 'function') {
		    return true;
		  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


		  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
		    return true;
		  }

		  if (typeof type === 'object' && type !== null) {
		    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
		    // types supported by any Flight configuration anywhere since
		    // we don't know which Flight build this will end up being used
		    // with.
		    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
		      return true;
		    }
		  }

		  return false;
		}

		function memo(type, compare) {
		  {
		    if (!isValidElementType(type)) {
		      error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
		    }
		  }

		  var elementType = {
		    $$typeof: REACT_MEMO_TYPE,
		    type: type,
		    compare: compare === undefined ? null : compare
		  };

		  {
		    var ownName;
		    Object.defineProperty(elementType, 'displayName', {
		      enumerable: false,
		      configurable: true,
		      get: function () {
		        return ownName;
		      },
		      set: function (name) {
		        ownName = name; // The inner component shouldn't inherit this display name in most cases,
		        // because the component may be used elsewhere.
		        // But it's nice for anonymous functions to inherit the name,
		        // so that our component-stack generation logic will display their frames.
		        // An anonymous function generally suggests a pattern like:
		        //   React.memo((props) => {...});
		        // This kind of inner function is not used elsewhere so the side effect is okay.

		        if (!type.name && !type.displayName) {
		          type.displayName = name;
		        }
		      }
		    });
		  }

		  return elementType;
		}

		function resolveDispatcher() {
		  var dispatcher = ReactCurrentDispatcher.current;

		  {
		    if (dispatcher === null) {
		      error('Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for' + ' one of the following reasons:\n' + '1. You might have mismatching versions of React and the renderer (such as React DOM)\n' + '2. You might be breaking the Rules of Hooks\n' + '3. You might have more than one copy of React in the same app\n' + 'See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.');
		    }
		  } // Will result in a null access error if accessed outside render phase. We
		  // intentionally don't throw our own error because this is in a hot path.
		  // Also helps ensure this is inlined.


		  return dispatcher;
		}
		function useContext(Context) {
		  var dispatcher = resolveDispatcher();

		  {
		    // TODO: add a more generic warning for invalid values.
		    if (Context._context !== undefined) {
		      var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
		      // and nobody should be using this in existing code.

		      if (realContext.Consumer === Context) {
		        error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
		      } else if (realContext.Provider === Context) {
		        error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
		      }
		    }
		  }

		  return dispatcher.useContext(Context);
		}
		function useState(initialState) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useState(initialState);
		}
		function useReducer(reducer, initialArg, init) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useReducer(reducer, initialArg, init);
		}
		function useRef(initialValue) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useRef(initialValue);
		}
		function useEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useEffect(create, deps);
		}
		function useInsertionEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useInsertionEffect(create, deps);
		}
		function useLayoutEffect(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useLayoutEffect(create, deps);
		}
		function useCallback(callback, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useCallback(callback, deps);
		}
		function useMemo(create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useMemo(create, deps);
		}
		function useImperativeHandle(ref, create, deps) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useImperativeHandle(ref, create, deps);
		}
		function useDebugValue(value, formatterFn) {
		  {
		    var dispatcher = resolveDispatcher();
		    return dispatcher.useDebugValue(value, formatterFn);
		  }
		}
		function useTransition() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useTransition();
		}
		function useDeferredValue(value) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useDeferredValue(value);
		}
		function useId() {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useId();
		}
		function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
		  var dispatcher = resolveDispatcher();
		  return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
		}

		// Helpers to patch console.logs to avoid logging during side-effect free
		// replaying on render function. This currently only patches the object
		// lazily which won't cover if the log function was extracted eagerly.
		// We could also eagerly patch the method.
		var disabledDepth = 0;
		var prevLog;
		var prevInfo;
		var prevWarn;
		var prevError;
		var prevGroup;
		var prevGroupCollapsed;
		var prevGroupEnd;

		function disabledLog() {}

		disabledLog.__reactDisabledLog = true;
		function disableLogs() {
		  {
		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      prevLog = console.log;
		      prevInfo = console.info;
		      prevWarn = console.warn;
		      prevError = console.error;
		      prevGroup = console.group;
		      prevGroupCollapsed = console.groupCollapsed;
		      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

		      var props = {
		        configurable: true,
		        enumerable: true,
		        value: disabledLog,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        info: props,
		        log: props,
		        warn: props,
		        error: props,
		        group: props,
		        groupCollapsed: props,
		        groupEnd: props
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    disabledDepth++;
		  }
		}
		function reenableLogs() {
		  {
		    disabledDepth--;

		    if (disabledDepth === 0) {
		      /* eslint-disable react-internal/no-production-logging */
		      var props = {
		        configurable: true,
		        enumerable: true,
		        writable: true
		      }; // $FlowFixMe Flow thinks console is immutable.

		      Object.defineProperties(console, {
		        log: assign({}, props, {
		          value: prevLog
		        }),
		        info: assign({}, props, {
		          value: prevInfo
		        }),
		        warn: assign({}, props, {
		          value: prevWarn
		        }),
		        error: assign({}, props, {
		          value: prevError
		        }),
		        group: assign({}, props, {
		          value: prevGroup
		        }),
		        groupCollapsed: assign({}, props, {
		          value: prevGroupCollapsed
		        }),
		        groupEnd: assign({}, props, {
		          value: prevGroupEnd
		        })
		      });
		      /* eslint-enable react-internal/no-production-logging */
		    }

		    if (disabledDepth < 0) {
		      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
		    }
		  }
		}

		var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
		var prefix;
		function describeBuiltInComponentFrame(name, source, ownerFn) {
		  {
		    if (prefix === undefined) {
		      // Extract the VM specific prefix used by each line.
		      try {
		        throw Error();
		      } catch (x) {
		        var match = x.stack.trim().match(/\n( *(at )?)/);
		        prefix = match && match[1] || '';
		      }
		    } // We use the prefix to ensure our stacks line up with native stack frames.


		    return '\n' + prefix + name;
		  }
		}
		var reentry = false;
		var componentFrameCache;

		{
		  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
		  componentFrameCache = new PossiblyWeakMap();
		}

		function describeNativeComponentFrame(fn, construct) {
		  // If something asked for a stack inside a fake render, it should get ignored.
		  if ( !fn || reentry) {
		    return '';
		  }

		  {
		    var frame = componentFrameCache.get(fn);

		    if (frame !== undefined) {
		      return frame;
		    }
		  }

		  var control;
		  reentry = true;
		  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

		  Error.prepareStackTrace = undefined;
		  var previousDispatcher;

		  {
		    previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
		    // for warnings.

		    ReactCurrentDispatcher$1.current = null;
		    disableLogs();
		  }

		  try {
		    // This should throw.
		    if (construct) {
		      // Something should be setting the props in the constructor.
		      var Fake = function () {
		        throw Error();
		      }; // $FlowFixMe


		      Object.defineProperty(Fake.prototype, 'props', {
		        set: function () {
		          // We use a throwing setter instead of frozen or non-writable props
		          // because that won't throw in a non-strict mode function.
		          throw Error();
		        }
		      });

		      if (typeof Reflect === 'object' && Reflect.construct) {
		        // We construct a different control for this case to include any extra
		        // frames added by the construct call.
		        try {
		          Reflect.construct(Fake, []);
		        } catch (x) {
		          control = x;
		        }

		        Reflect.construct(fn, [], Fake);
		      } else {
		        try {
		          Fake.call();
		        } catch (x) {
		          control = x;
		        }

		        fn.call(Fake.prototype);
		      }
		    } else {
		      try {
		        throw Error();
		      } catch (x) {
		        control = x;
		      }

		      fn();
		    }
		  } catch (sample) {
		    // This is inlined manually because closure doesn't do it for us.
		    if (sample && control && typeof sample.stack === 'string') {
		      // This extracts the first frame from the sample that isn't also in the control.
		      // Skipping one frame that we assume is the frame that calls the two.
		      var sampleLines = sample.stack.split('\n');
		      var controlLines = control.stack.split('\n');
		      var s = sampleLines.length - 1;
		      var c = controlLines.length - 1;

		      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
		        // We expect at least one stack frame to be shared.
		        // Typically this will be the root most one. However, stack frames may be
		        // cut off due to maximum stack limits. In this case, one maybe cut off
		        // earlier than the other. We assume that the sample is longer or the same
		        // and there for cut off earlier. So we should find the root most frame in
		        // the sample somewhere in the control.
		        c--;
		      }

		      for (; s >= 1 && c >= 0; s--, c--) {
		        // Next we find the first one that isn't the same which should be the
		        // frame that called our sample function and the control.
		        if (sampleLines[s] !== controlLines[c]) {
		          // In V8, the first line is describing the message but other VMs don't.
		          // If we're about to return the first line, and the control is also on the same
		          // line, that's a pretty good indicator that our sample threw at same line as
		          // the control. I.e. before we entered the sample frame. So we ignore this result.
		          // This can happen if you passed a class to function component, or non-function.
		          if (s !== 1 || c !== 1) {
		            do {
		              s--;
		              c--; // We may still have similar intermediate frames from the construct call.
		              // The next one that isn't the same should be our match though.

		              if (c < 0 || sampleLines[s] !== controlLines[c]) {
		                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
		                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
		                // but we have a user-provided "displayName"
		                // splice it in to make the stack more readable.


		                if (fn.displayName && _frame.includes('<anonymous>')) {
		                  _frame = _frame.replace('<anonymous>', fn.displayName);
		                }

		                {
		                  if (typeof fn === 'function') {
		                    componentFrameCache.set(fn, _frame);
		                  }
		                } // Return the line we found.


		                return _frame;
		              }
		            } while (s >= 1 && c >= 0);
		          }

		          break;
		        }
		      }
		    }
		  } finally {
		    reentry = false;

		    {
		      ReactCurrentDispatcher$1.current = previousDispatcher;
		      reenableLogs();
		    }

		    Error.prepareStackTrace = previousPrepareStackTrace;
		  } // Fallback to just using the name if we couldn't make it throw.


		  var name = fn ? fn.displayName || fn.name : '';
		  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

		  {
		    if (typeof fn === 'function') {
		      componentFrameCache.set(fn, syntheticFrame);
		    }
		  }

		  return syntheticFrame;
		}
		function describeFunctionComponentFrame(fn, source, ownerFn) {
		  {
		    return describeNativeComponentFrame(fn, false);
		  }
		}

		function shouldConstruct(Component) {
		  var prototype = Component.prototype;
		  return !!(prototype && prototype.isReactComponent);
		}

		function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

		  if (type == null) {
		    return '';
		  }

		  if (typeof type === 'function') {
		    {
		      return describeNativeComponentFrame(type, shouldConstruct(type));
		    }
		  }

		  if (typeof type === 'string') {
		    return describeBuiltInComponentFrame(type);
		  }

		  switch (type) {
		    case REACT_SUSPENSE_TYPE:
		      return describeBuiltInComponentFrame('Suspense');

		    case REACT_SUSPENSE_LIST_TYPE:
		      return describeBuiltInComponentFrame('SuspenseList');
		  }

		  if (typeof type === 'object') {
		    switch (type.$$typeof) {
		      case REACT_FORWARD_REF_TYPE:
		        return describeFunctionComponentFrame(type.render);

		      case REACT_MEMO_TYPE:
		        // Memo may contain any component type so we recursively resolve it.
		        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

		      case REACT_LAZY_TYPE:
		        {
		          var lazyComponent = type;
		          var payload = lazyComponent._payload;
		          var init = lazyComponent._init;

		          try {
		            // Lazy may contain any component type so we recursively resolve it.
		            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
		          } catch (x) {}
		        }
		    }
		  }

		  return '';
		}

		var loggedTypeFailures = {};
		var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

		function setCurrentlyValidatingElement(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
		    } else {
		      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
		    }
		  }
		}

		function checkPropTypes(typeSpecs, values, location, componentName, element) {
		  {
		    // $FlowFixMe This is okay but Flow doesn't know it.
		    var has = Function.call.bind(hasOwnProperty);

		    for (var typeSpecName in typeSpecs) {
		      if (has(typeSpecs, typeSpecName)) {
		        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
		        // fail the render phase where it didn't fail before. So we log it.
		        // After these have been cleaned up, we'll let them throw.

		        try {
		          // This is intentionally an invariant that gets caught. It's the same
		          // behavior as without this statement except with a better message.
		          if (typeof typeSpecs[typeSpecName] !== 'function') {
		            // eslint-disable-next-line react-internal/prod-error-codes
		            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
		            err.name = 'Invariant Violation';
		            throw err;
		          }

		          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
		        } catch (ex) {
		          error$1 = ex;
		        }

		        if (error$1 && !(error$1 instanceof Error)) {
		          setCurrentlyValidatingElement(element);

		          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

		          setCurrentlyValidatingElement(null);
		        }

		        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
		          // Only monitor this failure once because there tends to be a lot of the
		          // same error.
		          loggedTypeFailures[error$1.message] = true;
		          setCurrentlyValidatingElement(element);

		          error('Failed %s type: %s', location, error$1.message);

		          setCurrentlyValidatingElement(null);
		        }
		      }
		    }
		  }
		}

		function setCurrentlyValidatingElement$1(element) {
		  {
		    if (element) {
		      var owner = element._owner;
		      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
		      setExtraStackFrame(stack);
		    } else {
		      setExtraStackFrame(null);
		    }
		  }
		}

		var propTypesMisspellWarningShown;

		{
		  propTypesMisspellWarningShown = false;
		}

		function getDeclarationErrorAddendum() {
		  if (ReactCurrentOwner.current) {
		    var name = getComponentNameFromType(ReactCurrentOwner.current.type);

		    if (name) {
		      return '\n\nCheck the render method of `' + name + '`.';
		    }
		  }

		  return '';
		}

		function getSourceInfoErrorAddendum(source) {
		  if (source !== undefined) {
		    var fileName = source.fileName.replace(/^.*[\\\/]/, '');
		    var lineNumber = source.lineNumber;
		    return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
		  }

		  return '';
		}

		function getSourceInfoErrorAddendumForProps(elementProps) {
		  if (elementProps !== null && elementProps !== undefined) {
		    return getSourceInfoErrorAddendum(elementProps.__source);
		  }

		  return '';
		}
		/**
		 * Warn if there's no key explicitly set on dynamic arrays of children or
		 * object keys are not valid. This allows us to keep track of children between
		 * updates.
		 */


		var ownerHasKeyUseWarning = {};

		function getCurrentComponentErrorInfo(parentType) {
		  var info = getDeclarationErrorAddendum();

		  if (!info) {
		    var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

		    if (parentName) {
		      info = "\n\nCheck the top-level render call using <" + parentName + ">.";
		    }
		  }

		  return info;
		}
		/**
		 * Warn if the element doesn't have an explicit key assigned to it.
		 * This element is in an array. The array could grow and shrink or be
		 * reordered. All children that haven't already been validated are required to
		 * have a "key" property assigned to it. Error statuses are cached so a warning
		 * will only be shown once.
		 *
		 * @internal
		 * @param {ReactElement} element Element that requires a key.
		 * @param {*} parentType element's parent's type.
		 */


		function validateExplicitKey(element, parentType) {
		  if (!element._store || element._store.validated || element.key != null) {
		    return;
		  }

		  element._store.validated = true;
		  var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

		  if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
		    return;
		  }

		  ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
		  // property, it may be the creator of the child that's responsible for
		  // assigning it a key.

		  var childOwner = '';

		  if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
		    // Give the component that originally created this child.
		    childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
		  }

		  {
		    setCurrentlyValidatingElement$1(element);

		    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

		    setCurrentlyValidatingElement$1(null);
		  }
		}
		/**
		 * Ensure that every element either is passed in a static location, in an
		 * array with an explicit keys property defined, or in an object literal
		 * with valid key property.
		 *
		 * @internal
		 * @param {ReactNode} node Statically passed child of any type.
		 * @param {*} parentType node's parent's type.
		 */


		function validateChildKeys(node, parentType) {
		  if (typeof node !== 'object') {
		    return;
		  }

		  if (isArray(node)) {
		    for (var i = 0; i < node.length; i++) {
		      var child = node[i];

		      if (isValidElement(child)) {
		        validateExplicitKey(child, parentType);
		      }
		    }
		  } else if (isValidElement(node)) {
		    // This element was passed in a valid location.
		    if (node._store) {
		      node._store.validated = true;
		    }
		  } else if (node) {
		    var iteratorFn = getIteratorFn(node);

		    if (typeof iteratorFn === 'function') {
		      // Entry iterators used to provide implicit keys,
		      // but now we print a separate warning for them later.
		      if (iteratorFn !== node.entries) {
		        var iterator = iteratorFn.call(node);
		        var step;

		        while (!(step = iterator.next()).done) {
		          if (isValidElement(step.value)) {
		            validateExplicitKey(step.value, parentType);
		          }
		        }
		      }
		    }
		  }
		}
		/**
		 * Given an element, validate that its props follow the propTypes definition,
		 * provided by the type.
		 *
		 * @param {ReactElement} element
		 */


		function validatePropTypes(element) {
		  {
		    var type = element.type;

		    if (type === null || type === undefined || typeof type === 'string') {
		      return;
		    }

		    var propTypes;

		    if (typeof type === 'function') {
		      propTypes = type.propTypes;
		    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
		    // Inner props are checked in the reconciler.
		    type.$$typeof === REACT_MEMO_TYPE)) {
		      propTypes = type.propTypes;
		    } else {
		      return;
		    }

		    if (propTypes) {
		      // Intentionally inside to avoid triggering lazy initializers:
		      var name = getComponentNameFromType(type);
		      checkPropTypes(propTypes, element.props, 'prop', name, element);
		    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
		      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

		      var _name = getComponentNameFromType(type);

		      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
		    }

		    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
		      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
		    }
		  }
		}
		/**
		 * Given a fragment, validate that it can only be provided with fragment props
		 * @param {ReactElement} fragment
		 */


		function validateFragmentProps(fragment) {
		  {
		    var keys = Object.keys(fragment.props);

		    for (var i = 0; i < keys.length; i++) {
		      var key = keys[i];

		      if (key !== 'children' && key !== 'key') {
		        setCurrentlyValidatingElement$1(fragment);

		        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

		        setCurrentlyValidatingElement$1(null);
		        break;
		      }
		    }

		    if (fragment.ref !== null) {
		      setCurrentlyValidatingElement$1(fragment);

		      error('Invalid attribute `ref` supplied to `React.Fragment`.');

		      setCurrentlyValidatingElement$1(null);
		    }
		  }
		}
		function createElementWithValidation(type, props, children) {
		  var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
		  // succeed and there will likely be errors in render.

		  if (!validType) {
		    var info = '';

		    if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
		      info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
		    }

		    var sourceInfo = getSourceInfoErrorAddendumForProps(props);

		    if (sourceInfo) {
		      info += sourceInfo;
		    } else {
		      info += getDeclarationErrorAddendum();
		    }

		    var typeString;

		    if (type === null) {
		      typeString = 'null';
		    } else if (isArray(type)) {
		      typeString = 'array';
		    } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
		      typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
		      info = ' Did you accidentally export a JSX literal instead of a component?';
		    } else {
		      typeString = typeof type;
		    }

		    {
		      error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
		    }
		  }

		  var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
		  // TODO: Drop this when these are no longer allowed as the type argument.

		  if (element == null) {
		    return element;
		  } // Skip key warning if the type isn't valid since our key validation logic
		  // doesn't expect a non-string/function type and can throw confusing errors.
		  // We don't want exception behavior to differ between dev and prod.
		  // (Rendering will throw with a helpful message and as soon as the type is
		  // fixed, the key warnings will appear.)


		  if (validType) {
		    for (var i = 2; i < arguments.length; i++) {
		      validateChildKeys(arguments[i], type);
		    }
		  }

		  if (type === REACT_FRAGMENT_TYPE) {
		    validateFragmentProps(element);
		  } else {
		    validatePropTypes(element);
		  }

		  return element;
		}
		var didWarnAboutDeprecatedCreateFactory = false;
		function createFactoryWithValidation(type) {
		  var validatedFactory = createElementWithValidation.bind(null, type);
		  validatedFactory.type = type;

		  {
		    if (!didWarnAboutDeprecatedCreateFactory) {
		      didWarnAboutDeprecatedCreateFactory = true;

		      warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
		    } // Legacy hook: remove it


		    Object.defineProperty(validatedFactory, 'type', {
		      enumerable: false,
		      get: function () {
		        warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');

		        Object.defineProperty(this, 'type', {
		          value: type
		        });
		        return type;
		      }
		    });
		  }

		  return validatedFactory;
		}
		function cloneElementWithValidation(element, props, children) {
		  var newElement = cloneElement.apply(this, arguments);

		  for (var i = 2; i < arguments.length; i++) {
		    validateChildKeys(arguments[i], newElement.type);
		  }

		  validatePropTypes(newElement);
		  return newElement;
		}

		function startTransition(scope, options) {
		  var prevTransition = ReactCurrentBatchConfig.transition;
		  ReactCurrentBatchConfig.transition = {};
		  var currentTransition = ReactCurrentBatchConfig.transition;

		  {
		    ReactCurrentBatchConfig.transition._updatedFibers = new Set();
		  }

		  try {
		    scope();
		  } finally {
		    ReactCurrentBatchConfig.transition = prevTransition;

		    {
		      if (prevTransition === null && currentTransition._updatedFibers) {
		        var updatedFibersCount = currentTransition._updatedFibers.size;

		        if (updatedFibersCount > 10) {
		          warn('Detected a large number of updates inside startTransition. ' + 'If this is due to a subscription please re-write it to use React provided hooks. ' + 'Otherwise concurrent mode guarantees are off the table.');
		        }

		        currentTransition._updatedFibers.clear();
		      }
		    }
		  }
		}

		var didWarnAboutMessageChannel = false;
		var enqueueTaskImpl = null;
		function enqueueTask(task) {
		  if (enqueueTaskImpl === null) {
		    try {
		      // read require off the module object to get around the bundlers.
		      // we don't want them to detect a require and bundle a Node polyfill.
		      var requireString = ('require' + Math.random()).slice(0, 7);
		      var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
		      // version of setImmediate, bypassing fake timers if any.

		      enqueueTaskImpl = nodeRequire.call(module, 'timers').setImmediate;
		    } catch (_err) {
		      // we're in a browser
		      // we can't use regular timers because they may still be faked
		      // so we try MessageChannel+postMessage instead
		      enqueueTaskImpl = function (callback) {
		        {
		          if (didWarnAboutMessageChannel === false) {
		            didWarnAboutMessageChannel = true;

		            if (typeof MessageChannel === 'undefined') {
		              error('This browser does not have a MessageChannel implementation, ' + 'so enqueuing tasks via await act(async () => ...) will fail. ' + 'Please file an issue at https://github.com/facebook/react/issues ' + 'if you encounter this warning.');
		            }
		          }
		        }

		        var channel = new MessageChannel();
		        channel.port1.onmessage = callback;
		        channel.port2.postMessage(undefined);
		      };
		    }
		  }

		  return enqueueTaskImpl(task);
		}

		var actScopeDepth = 0;
		var didWarnNoAwaitAct = false;
		function act(callback) {
		  {
		    // `act` calls can be nested, so we track the depth. This represents the
		    // number of `act` scopes on the stack.
		    var prevActScopeDepth = actScopeDepth;
		    actScopeDepth++;

		    if (ReactCurrentActQueue.current === null) {
		      // This is the outermost `act` scope. Initialize the queue. The reconciler
		      // will detect the queue and use it instead of Scheduler.
		      ReactCurrentActQueue.current = [];
		    }

		    var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
		    var result;

		    try {
		      // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
		      // set to `true` while the given callback is executed, not for updates
		      // triggered during an async event, because this is how the legacy
		      // implementation of `act` behaved.
		      ReactCurrentActQueue.isBatchingLegacy = true;
		      result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
		      // which flushed updates immediately after the scope function exits, even
		      // if it's an async function.

		      if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
		        var queue = ReactCurrentActQueue.current;

		        if (queue !== null) {
		          ReactCurrentActQueue.didScheduleLegacyUpdate = false;
		          flushActQueue(queue);
		        }
		      }
		    } catch (error) {
		      popActScope(prevActScopeDepth);
		      throw error;
		    } finally {
		      ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
		    }

		    if (result !== null && typeof result === 'object' && typeof result.then === 'function') {
		      var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
		      // for it to resolve before exiting the current scope.

		      var wasAwaited = false;
		      var thenable = {
		        then: function (resolve, reject) {
		          wasAwaited = true;
		          thenableResult.then(function (returnValue) {
		            popActScope(prevActScopeDepth);

		            if (actScopeDepth === 0) {
		              // We've exited the outermost act scope. Recursively flush the
		              // queue until there's no remaining work.
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }, function (error) {
		            // The callback threw an error.
		            popActScope(prevActScopeDepth);
		            reject(error);
		          });
		        }
		      };

		      {
		        if (!didWarnNoAwaitAct && typeof Promise !== 'undefined') {
		          // eslint-disable-next-line no-undef
		          Promise.resolve().then(function () {}).then(function () {
		            if (!wasAwaited) {
		              didWarnNoAwaitAct = true;

		              error('You called act(async () => ...) without await. ' + 'This could lead to unexpected testing behaviour, ' + 'interleaving multiple act calls and mixing their ' + 'scopes. ' + 'You should - await act(async () => ...);');
		            }
		          });
		        }
		      }

		      return thenable;
		    } else {
		      var returnValue = result; // The callback is not an async function. Exit the current scope
		      // immediately, without awaiting.

		      popActScope(prevActScopeDepth);

		      if (actScopeDepth === 0) {
		        // Exiting the outermost act scope. Flush the queue.
		        var _queue = ReactCurrentActQueue.current;

		        if (_queue !== null) {
		          flushActQueue(_queue);
		          ReactCurrentActQueue.current = null;
		        } // Return a thenable. If the user awaits it, we'll flush again in
		        // case additional work was scheduled by a microtask.


		        var _thenable = {
		          then: function (resolve, reject) {
		            // Confirm we haven't re-entered another `act` scope, in case
		            // the user does something weird like await the thenable
		            // multiple times.
		            if (ReactCurrentActQueue.current === null) {
		              // Recursively flush the queue until there's no remaining work.
		              ReactCurrentActQueue.current = [];
		              recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		            } else {
		              resolve(returnValue);
		            }
		          }
		        };
		        return _thenable;
		      } else {
		        // Since we're inside a nested `act` scope, the returned thenable
		        // immediately resolves. The outer scope will flush the queue.
		        var _thenable2 = {
		          then: function (resolve, reject) {
		            resolve(returnValue);
		          }
		        };
		        return _thenable2;
		      }
		    }
		  }
		}

		function popActScope(prevActScopeDepth) {
		  {
		    if (prevActScopeDepth !== actScopeDepth - 1) {
		      error('You seem to have overlapping act() calls, this is not supported. ' + 'Be sure to await previous act() calls before making a new one. ');
		    }

		    actScopeDepth = prevActScopeDepth;
		  }
		}

		function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
		  {
		    var queue = ReactCurrentActQueue.current;

		    if (queue !== null) {
		      try {
		        flushActQueue(queue);
		        enqueueTask(function () {
		          if (queue.length === 0) {
		            // No additional work was scheduled. Finish.
		            ReactCurrentActQueue.current = null;
		            resolve(returnValue);
		          } else {
		            // Keep flushing work until there's none left.
		            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
		          }
		        });
		      } catch (error) {
		        reject(error);
		      }
		    } else {
		      resolve(returnValue);
		    }
		  }
		}

		var isFlushing = false;

		function flushActQueue(queue) {
		  {
		    if (!isFlushing) {
		      // Prevent re-entrance.
		      isFlushing = true;
		      var i = 0;

		      try {
		        for (; i < queue.length; i++) {
		          var callback = queue[i];

		          do {
		            callback = callback(true);
		          } while (callback !== null);
		        }

		        queue.length = 0;
		      } catch (error) {
		        // If something throws, leave the remaining callbacks on the queue.
		        queue = queue.slice(i + 1);
		        throw error;
		      } finally {
		        isFlushing = false;
		      }
		    }
		  }
		}

		var createElement$1 =  createElementWithValidation ;
		var cloneElement$1 =  cloneElementWithValidation ;
		var createFactory =  createFactoryWithValidation ;
		var Children = {
		  map: mapChildren,
		  forEach: forEachChildren,
		  count: countChildren,
		  toArray: toArray,
		  only: onlyChild
		};

		exports.Children = Children;
		exports.Component = Component;
		exports.Fragment = REACT_FRAGMENT_TYPE;
		exports.Profiler = REACT_PROFILER_TYPE;
		exports.PureComponent = PureComponent;
		exports.StrictMode = REACT_STRICT_MODE_TYPE;
		exports.Suspense = REACT_SUSPENSE_TYPE;
		exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
		exports.cloneElement = cloneElement$1;
		exports.createContext = createContext;
		exports.createElement = createElement$1;
		exports.createFactory = createFactory;
		exports.createRef = createRef;
		exports.forwardRef = forwardRef;
		exports.isValidElement = isValidElement;
		exports.lazy = lazy;
		exports.memo = memo;
		exports.startTransition = startTransition;
		exports.unstable_act = act;
		exports.useCallback = useCallback;
		exports.useContext = useContext;
		exports.useDebugValue = useDebugValue;
		exports.useDeferredValue = useDeferredValue;
		exports.useEffect = useEffect;
		exports.useId = useId;
		exports.useImperativeHandle = useImperativeHandle;
		exports.useInsertionEffect = useInsertionEffect;
		exports.useLayoutEffect = useLayoutEffect;
		exports.useMemo = useMemo;
		exports.useReducer = useReducer;
		exports.useRef = useRef;
		exports.useState = useState;
		exports.useSyncExternalStore = useSyncExternalStore;
		exports.useTransition = useTransition;
		exports.version = ReactVersion;
		          /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
		if (
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
		  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop ===
		    'function'
		) {
		  __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
		}
		        
		  })();
		}
} (react_development, react_developmentExports));
	return react_developmentExports;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReact_production_min();
	} else {
	  module.exports = requireReact_development();
	}
} (react));

var React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

const recursiveFilter = (concern, value) => {
    if (Array.isArray(concern)) {
        return concern.some(item => {
            return recursiveFilter(item, value);
        });
    }
    if (typeof concern === "object") {
        if (concern === null) {
            return false;
        }
        const keys = Object.keys(concern);
        return keys.some(key => {
            return recursiveFilter(concern[key], value);
        });
    }
    if (typeof concern === "string") {
        return concern.toLowerCase().includes(value.toLowerCase());
    }
    if (Number.isInteger(parseInt(concern, 10))) {
        if (concern.toString().includes(value)) {
            return true;
        }
        if (concern === value) {
            return true;
        }
        return false;
    }
    return false;
};
const tableFilter = (row, columnId, value) => {
    let concern = row.original[columnId];
    if (!concern) {
        concern = row.renderValue(columnId);
    }
    return recursiveFilter(concern, value);
};
const valueFilter = (row, columnId, value) => {
    const concern = row.renderValue(columnId);
    if (!concern || typeof concern !== "string") {
        return false;
    }
    return concern.toLowerCase().includes(value.toLowerCase());
};

const NextButton = ({ loading = false, table, }) => {
    return (React.createElement("button", { type: "button", className: table.getCanNextPage() && !loading
            ? "btn btn-primary btn-block"
            : "btn btn-block disabled", onClick: () => table.getCanNextPage() && table.nextPage() }, "Next"));
};

const PageSelector = ({ requestedPage, setRequestedPage, table, }) => {
    const [localRequestedPage, setLocalRequestedPage] = reactExports.useState(1);
    const finalRequestedPage = requestedPage === undefined ? localRequestedPage : requestedPage;
    const finalSetRequestedPage = setRequestedPage === undefined ? setLocalRequestedPage : setRequestedPage;
    reactExports.useEffect(() => {
        setLocalRequestedPage(table.getState().pagination.pageIndex + 1);
    }, [table.getState().pagination.pageIndex]);
    return (React.createElement("span", null,
        "Page",
        " ",
        React.createElement("input", { type: "number", value: finalRequestedPage, onKeyDown: e => {
                if (e.code === "Enter" || e.code === "NumpadEnter") {
                    const page = e.target.value
                        ? Number(e.target.value) - 1
                        : 0;
                    table.setPageIndex(parseInt(page.toString(), 10));
                }
            }, onChange: e => finalSetRequestedPage(Number(e.target.value)), style: {
                width: "75px",
                display: "inline-block",
            }, className: "form-control" }),
        " ",
        "of ",
        table.getPageCount()));
};

const PageSizeSelector = ({ table, }) => {
    return (React.createElement("select", { value: table.getState().pagination.pageSize, style: {
            width: "100px",
        }, onChange: e => {
            table.setPageSize(Number(e.target.value));
        }, className: "form-control" }, [1, 3, 5, 10, 20, 30, 40, 50].map(pageSize => (React.createElement("option", { key: pageSize, value: pageSize },
        pageSize,
        " rows")))));
};

const PreviousButton = ({ loading = false, table, }) => {
    return (React.createElement("button", { type: "button", className: table.getCanPreviousPage() && !loading
            ? "btn btn-primary btn-block"
            : "btn btn-block disabled", onClick: () => table.getCanPreviousPage() && table.previousPage() }, "Previous"));
};

function DataFooter({ loading, requestedPage, setRequestedPage, table, }) {
    return (React.createElement("div", { className: "well well-sm" },
        React.createElement("div", { className: "row" },
            React.createElement("div", { className: "col col-xs-12" },
                React.createElement("div", { style: {
                        display: "flex",
                        gap: ".5em",
                        justifyContent: "space-evenly",
                    } },
                    React.createElement("div", { style: { display: "contents" } },
                        React.createElement(PreviousButton, { table: table, loading: loading })),
                    React.createElement("div", { style: {
                            minWidth: "200px",
                            display: "flex",
                            justifyContent: "center",
                        } },
                        React.createElement(PageSelector, { table: table, requestedPage: requestedPage, setRequestedPage: setRequestedPage })),
                    React.createElement("div", { style: {
                            minWidth: "200px",
                            display: "flex",
                            justifyContent: "center",
                        } },
                        React.createElement(PageSizeSelector, { table: table })),
                    React.createElement("div", { style: { display: "contents" } },
                        React.createElement(NextButton, { table: table, loading: loading })))))));
}

function LoadingScreen({ loading, loadingOffset, }) {
    if (!loading) {
        return null;
    }
    const className = `loading ${loading ? "progress" : ""}`;
    return (React.createElement("div", { className: className, style: { left: loadingOffset } },
        React.createElement("span", null,
            "Loading",
            React.createElement("span", { className: "one" }, "."),
            React.createElement("span", { className: "two" }, "."),
            React.createElement("span", { className: "three" }, "."))));
}

/**
 * Create the React Context
 */ const DndContext = reactExports.createContext({
    dragDropManager: undefined
});

var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports(){ return jsxRuntimeExports; },
  set exports(v){ jsxRuntimeExports = v; },
};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = reactExports;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

(function (module) {

	if (process.env.NODE_ENV === 'production') {
	  module.exports = requireReactJsxRuntime_production_min();
	} else {
	  module.exports = requireReactJsxRuntime_development();
	}
} (jsxRuntime));

/**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */
function formatProdErrorMessage(code) {
  return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + 'use the non-minified dev environment for full errors. ';
}

// Inlined version of the `symbol-observable` polyfill
var $$observable = (function () {
  return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

// Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
function miniKindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;

  switch (type) {
    case 'boolean':
    case 'string':
    case 'number':
    case 'symbol':
    case 'function':
      {
        return type;
      }
  }

  if (Array.isArray(val)) return 'array';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  var constructorName = ctorName(val);

  switch (constructorName) {
    case 'Symbol':
    case 'Promise':
    case 'WeakMap':
    case 'WeakSet':
    case 'Map':
    case 'Set':
      return constructorName;
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
}

function ctorName(val) {
  return typeof val.constructor === 'function' ? val.constructor.name : null;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function kindOf(val) {
  var typeOfVal = typeof val;

  if (process.env.NODE_ENV !== 'production') {
    typeOfVal = miniKindOf(val);
  }

  return typeOfVal;
}

/**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(0) : 'It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(1) : "Expected the enhancer to be a function. Instead, received: '" + kindOf(enhancer) + "'");
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(2) : "Expected the root reducer to be a function. Instead, received: '" + kindOf(reducer) + "'");
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;
  /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(3) : 'You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(4) : "Expected the listener to be a function. Instead, received: '" + kindOf(listener) + "'");
    }

    if (isDispatching) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(5) : 'You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(6) : 'You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api/store#subscribelistener for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
      currentListeners = null;
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(7) : "Actions must be plain objects. Instead, the actual type was: '" + kindOf(action) + "'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.");
    }

    if (typeof action.type === 'undefined') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    }

    if (isDispatching) {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(9) : 'Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(10) : "Expected the nextReducer to be a function. Instead, received: '" + kindOf(nextReducer));
    }

    currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
    // Any reducers that existed in both the new and old rootReducer
    // will receive the previous state. This effectively populates
    // the new state tree with any relevant data from the old one.

    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new Error(process.env.NODE_ENV === "production" ? formatProdErrorMessage(11) : "Expected the observer to be an object. Instead, received: '" + kindOf(observer) + "'");
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[$$observable] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[$$observable] = observable, _ref2;
}

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */ function invariant(condition, format, ...args) {
    if (isProduction()) {
        if (format === undefined) {
            throw new Error('invariant requires an error message argument');
        }
    }
    if (!condition) {
        let error;
        if (format === undefined) {
            error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
        } else {
            let argIndex = 0;
            error = new Error(format.replace(/%s/g, function() {
                return args[argIndex++];
            }));
            error.name = 'Invariant Violation';
        }
        error.framesToPop = 1 // we don't care about invariant's own frame
        ;
        throw error;
    }
}
function isProduction() {
    return typeof process !== 'undefined' && process.env['NODE_ENV'] === 'production';
}

// cheap lodash replacements
/**
 * drop-in replacement for _.get
 * @param obj
 * @param path
 * @param defaultValue
 */ function get(obj, path, defaultValue) {
    return path.split('.').reduce((a, c)=>a && a[c] ? a[c] : defaultValue || null
    , obj);
}
/**
 * drop-in replacement for _.without
 */ function without$1(items, item) {
    return items.filter((i)=>i !== item
    );
}
/**
 * drop-in replacement for _.isString
 * @param input
 */ function isObject(input) {
    return typeof input === 'object';
}
/**
 * replacement for _.xor
 * @param itemsA
 * @param itemsB
 */ function xor(itemsA, itemsB) {
    const map = new Map();
    const insertItem = (item)=>{
        map.set(item, map.has(item) ? map.get(item) + 1 : 1);
    };
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    map.forEach((count, key)=>{
        if (count === 1) {
            result.push(key);
        }
    });
    return result;
}
/**
 * replacement for _.intersection
 * @param itemsA
 * @param itemsB
 */ function intersection(itemsA, itemsB) {
    return itemsA.filter((t)=>itemsB.indexOf(t) > -1
    );
}

const INIT_COORDS = 'dnd-core/INIT_COORDS';
const BEGIN_DRAG = 'dnd-core/BEGIN_DRAG';
const PUBLISH_DRAG_SOURCE = 'dnd-core/PUBLISH_DRAG_SOURCE';
const HOVER = 'dnd-core/HOVER';
const DROP = 'dnd-core/DROP';
const END_DRAG = 'dnd-core/END_DRAG';

function setClientOffset(clientOffset, sourceClientOffset) {
    return {
        type: INIT_COORDS,
        payload: {
            sourceClientOffset: sourceClientOffset || null,
            clientOffset: clientOffset || null
        }
    };
}

const ResetCoordinatesAction = {
    type: INIT_COORDS,
    payload: {
        clientOffset: null,
        sourceClientOffset: null
    }
};
function createBeginDrag(manager) {
    return function beginDrag(sourceIds = [], options = {
        publishSource: true
    }) {
        const { publishSource =true , clientOffset , getSourceClientOffset ,  } = options;
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        // Initialize the coordinates using the client offset
        manager.dispatch(setClientOffset(clientOffset));
        verifyInvariants$1(sourceIds, monitor, registry);
        // Get the draggable source
        const sourceId = getDraggableSource(sourceIds, monitor);
        if (sourceId == null) {
            manager.dispatch(ResetCoordinatesAction);
            return;
        }
        // Get the source client offset
        let sourceClientOffset = null;
        if (clientOffset) {
            if (!getSourceClientOffset) {
                throw new Error('getSourceClientOffset must be defined');
            }
            verifyGetSourceClientOffsetIsFunction(getSourceClientOffset);
            sourceClientOffset = getSourceClientOffset(sourceId);
        }
        // Initialize the full coordinates
        manager.dispatch(setClientOffset(clientOffset, sourceClientOffset));
        const source = registry.getSource(sourceId);
        const item = source.beginDrag(monitor, sourceId);
        // If source.beginDrag returns null, this is an indicator to cancel the drag
        if (item == null) {
            return undefined;
        }
        verifyItemIsObject(item);
        registry.pinSource(sourceId);
        const itemType = registry.getSourceType(sourceId);
        return {
            type: BEGIN_DRAG,
            payload: {
                itemType,
                item,
                sourceId,
                clientOffset: clientOffset || null,
                sourceClientOffset: sourceClientOffset || null,
                isSourcePublic: !!publishSource
            }
        };
    };
}
function verifyInvariants$1(sourceIds, monitor, registry) {
    invariant(!monitor.isDragging(), 'Cannot call beginDrag while dragging.');
    sourceIds.forEach(function(sourceId) {
        invariant(registry.getSource(sourceId), 'Expected sourceIds to be registered.');
    });
}
function verifyGetSourceClientOffsetIsFunction(getSourceClientOffset) {
    invariant(typeof getSourceClientOffset === 'function', 'When clientOffset is provided, getSourceClientOffset must be a function.');
}
function verifyItemIsObject(item) {
    invariant(isObject(item), 'Item must be an object.');
}
function getDraggableSource(sourceIds, monitor) {
    let sourceId = null;
    for(let i = sourceIds.length - 1; i >= 0; i--){
        if (monitor.canDragSource(sourceIds[i])) {
            sourceId = sourceIds[i];
            break;
        }
    }
    return sourceId;
}

function _defineProperty$4(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$4(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$4(target, key, source[key]);
        });
    }
    return target;
}
function createDrop(manager) {
    return function drop(options = {}) {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyInvariants(monitor);
        const targetIds = getDroppableTargets(monitor);
        // Multiple actions are dispatched here, which is why this doesn't return an action
        targetIds.forEach((targetId, index)=>{
            const dropResult = determineDropResult(targetId, index, registry, monitor);
            const action = {
                type: DROP,
                payload: {
                    dropResult: _objectSpread$4({}, options, dropResult)
                }
            };
            manager.dispatch(action);
        });
    };
}
function verifyInvariants(monitor) {
    invariant(monitor.isDragging(), 'Cannot call drop while not dragging.');
    invariant(!monitor.didDrop(), 'Cannot call drop twice during one drag operation.');
}
function determineDropResult(targetId, index, registry, monitor) {
    const target = registry.getTarget(targetId);
    let dropResult = target ? target.drop(monitor, targetId) : undefined;
    verifyDropResultType(dropResult);
    if (typeof dropResult === 'undefined') {
        dropResult = index === 0 ? {} : monitor.getDropResult();
    }
    return dropResult;
}
function verifyDropResultType(dropResult) {
    invariant(typeof dropResult === 'undefined' || isObject(dropResult), 'Drop result must either be an object or undefined.');
}
function getDroppableTargets(monitor) {
    const targetIds = monitor.getTargetIds().filter(monitor.canDropOnTarget, monitor);
    targetIds.reverse();
    return targetIds;
}

function createEndDrag(manager) {
    return function endDrag() {
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        verifyIsDragging(monitor);
        const sourceId = monitor.getSourceId();
        if (sourceId != null) {
            const source = registry.getSource(sourceId, true);
            source.endDrag(monitor, sourceId);
            registry.unpinSource();
        }
        return {
            type: END_DRAG
        };
    };
}
function verifyIsDragging(monitor) {
    invariant(monitor.isDragging(), 'Cannot call endDrag while not dragging.');
}

function matchesType(targetType, draggedItemType) {
    if (draggedItemType === null) {
        return targetType === null;
    }
    return Array.isArray(targetType) ? targetType.some((t)=>t === draggedItemType
    ) : targetType === draggedItemType;
}

function createHover(manager) {
    return function hover(targetIdsArg, { clientOffset  } = {}) {
        verifyTargetIdsIsArray(targetIdsArg);
        const targetIds = targetIdsArg.slice(0);
        const monitor = manager.getMonitor();
        const registry = manager.getRegistry();
        const draggedItemType = monitor.getItemType();
        removeNonMatchingTargetIds(targetIds, registry, draggedItemType);
        checkInvariants(targetIds, monitor, registry);
        hoverAllTargets(targetIds, monitor, registry);
        return {
            type: HOVER,
            payload: {
                targetIds,
                clientOffset: clientOffset || null
            }
        };
    };
}
function verifyTargetIdsIsArray(targetIdsArg) {
    invariant(Array.isArray(targetIdsArg), 'Expected targetIds to be an array.');
}
function checkInvariants(targetIds, monitor, registry) {
    invariant(monitor.isDragging(), 'Cannot call hover while not dragging.');
    invariant(!monitor.didDrop(), 'Cannot call hover after drop.');
    for(let i = 0; i < targetIds.length; i++){
        const targetId = targetIds[i];
        invariant(targetIds.lastIndexOf(targetId) === i, 'Expected targetIds to be unique in the passed array.');
        const target = registry.getTarget(targetId);
        invariant(target, 'Expected targetIds to be registered.');
    }
}
function removeNonMatchingTargetIds(targetIds, registry, draggedItemType) {
    // Remove those targetIds that don't match the targetType.  This
    // fixes shallow isOver which would only be non-shallow because of
    // non-matching targets.
    for(let i = targetIds.length - 1; i >= 0; i--){
        const targetId = targetIds[i];
        const targetType = registry.getTargetType(targetId);
        if (!matchesType(targetType, draggedItemType)) {
            targetIds.splice(i, 1);
        }
    }
}
function hoverAllTargets(targetIds, monitor, registry) {
    // Finally call hover on all matching targets.
    targetIds.forEach(function(targetId) {
        const target = registry.getTarget(targetId);
        target.hover(monitor, targetId);
    });
}

function createPublishDragSource(manager) {
    return function publishDragSource() {
        const monitor = manager.getMonitor();
        if (monitor.isDragging()) {
            return {
                type: PUBLISH_DRAG_SOURCE
            };
        }
        return;
    };
}

function createDragDropActions(manager) {
    return {
        beginDrag: createBeginDrag(manager),
        publishDragSource: createPublishDragSource(manager),
        hover: createHover(manager),
        drop: createDrop(manager),
        endDrag: createEndDrag(manager)
    };
}

class DragDropManagerImpl {
    receiveBackend(backend) {
        this.backend = backend;
    }
    getMonitor() {
        return this.monitor;
    }
    getBackend() {
        return this.backend;
    }
    getRegistry() {
        return this.monitor.registry;
    }
    getActions() {
        /* eslint-disable-next-line @typescript-eslint/no-this-alias */ const manager = this;
        const { dispatch  } = this.store;
        function bindActionCreator(actionCreator) {
            return (...args)=>{
                const action = actionCreator.apply(manager, args);
                if (typeof action !== 'undefined') {
                    dispatch(action);
                }
            };
        }
        const actions = createDragDropActions(this);
        return Object.keys(actions).reduce((boundActions, key)=>{
            const action = actions[key];
            boundActions[key] = bindActionCreator(action);
            return boundActions;
        }, {});
    }
    dispatch(action) {
        this.store.dispatch(action);
    }
    constructor(store, monitor){
        this.isSetUp = false;
        this.handleRefCountChange = ()=>{
            const shouldSetUp = this.store.getState().refCount > 0;
            if (this.backend) {
                if (shouldSetUp && !this.isSetUp) {
                    this.backend.setup();
                    this.isSetUp = true;
                } else if (!shouldSetUp && this.isSetUp) {
                    this.backend.teardown();
                    this.isSetUp = false;
                }
            }
        };
        this.store = store;
        this.monitor = monitor;
        store.subscribe(this.handleRefCountChange);
    }
}

/**
 * Coordinate addition
 * @param a The first coordinate
 * @param b The second coordinate
 */ function add(a, b) {
    return {
        x: a.x + b.x,
        y: a.y + b.y
    };
}
/**
 * Coordinate subtraction
 * @param a The first coordinate
 * @param b The second coordinate
 */ function subtract(a, b) {
    return {
        x: a.x - b.x,
        y: a.y - b.y
    };
}
/**
 * Returns the cartesian distance of the drag source component's position, based on its position
 * at the time when the current drag operation has started, and the movement difference.
 *
 * Returns null if no item is being dragged.
 *
 * @param state The offset state to compute from
 */ function getSourceClientOffset(state) {
    const { clientOffset , initialClientOffset , initialSourceClientOffset  } = state;
    if (!clientOffset || !initialClientOffset || !initialSourceClientOffset) {
        return null;
    }
    return subtract(add(clientOffset, initialSourceClientOffset), initialClientOffset);
}
/**
 * Determines the x,y offset between the client offset and the initial client offset
 *
 * @param state The offset state to compute from
 */ function getDifferenceFromInitialOffset(state) {
    const { clientOffset , initialClientOffset  } = state;
    if (!clientOffset || !initialClientOffset) {
        return null;
    }
    return subtract(clientOffset, initialClientOffset);
}

const NONE = [];
const ALL = [];
NONE.__IS_NONE__ = true;
ALL.__IS_ALL__ = true;
/**
 * Determines if the given handler IDs are dirty or not.
 *
 * @param dirtyIds The set of dirty handler ids
 * @param handlerIds The set of handler ids to check
 */ function areDirty(dirtyIds, handlerIds) {
    if (dirtyIds === NONE) {
        return false;
    }
    if (dirtyIds === ALL || typeof handlerIds === 'undefined') {
        return true;
    }
    const commonIds = intersection(handlerIds, dirtyIds);
    return commonIds.length > 0;
}

class DragDropMonitorImpl {
    subscribeToStateChange(listener, options = {}) {
        const { handlerIds  } = options;
        invariant(typeof listener === 'function', 'listener must be a function.');
        invariant(typeof handlerIds === 'undefined' || Array.isArray(handlerIds), 'handlerIds, when specified, must be an array of strings.');
        let prevStateId = this.store.getState().stateId;
        const handleChange = ()=>{
            const state = this.store.getState();
            const currentStateId = state.stateId;
            try {
                const canSkipListener = currentStateId === prevStateId || currentStateId === prevStateId + 1 && !areDirty(state.dirtyHandlerIds, handlerIds);
                if (!canSkipListener) {
                    listener();
                }
            } finally{
                prevStateId = currentStateId;
            }
        };
        return this.store.subscribe(handleChange);
    }
    subscribeToOffsetChange(listener) {
        invariant(typeof listener === 'function', 'listener must be a function.');
        let previousState = this.store.getState().dragOffset;
        const handleChange = ()=>{
            const nextState = this.store.getState().dragOffset;
            if (nextState === previousState) {
                return;
            }
            previousState = nextState;
            listener();
        };
        return this.store.subscribe(handleChange);
    }
    canDragSource(sourceId) {
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId);
        invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (this.isDragging()) {
            return false;
        }
        return source.canDrag(this, sourceId);
    }
    canDropOnTarget(targetId) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const target = this.registry.getTarget(targetId);
        invariant(target, `Expected to find a valid target. targetId=${targetId}`);
        if (!this.isDragging() || this.didDrop()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        return matchesType(targetType, draggedItemType) && target.canDrop(this, targetId);
    }
    isDragging() {
        return Boolean(this.getItemType());
    }
    isDraggingSource(sourceId) {
        // undefined on initial render
        if (!sourceId) {
            return false;
        }
        const source = this.registry.getSource(sourceId, true);
        invariant(source, `Expected to find a valid source. sourceId=${sourceId}`);
        if (!this.isDragging() || !this.isSourcePublic()) {
            return false;
        }
        const sourceType = this.registry.getSourceType(sourceId);
        const draggedItemType = this.getItemType();
        if (sourceType !== draggedItemType) {
            return false;
        }
        return source.isDragging(this, sourceId);
    }
    isOverTarget(targetId, options = {
        shallow: false
    }) {
        // undefined on initial render
        if (!targetId) {
            return false;
        }
        const { shallow  } = options;
        if (!this.isDragging()) {
            return false;
        }
        const targetType = this.registry.getTargetType(targetId);
        const draggedItemType = this.getItemType();
        if (draggedItemType && !matchesType(targetType, draggedItemType)) {
            return false;
        }
        const targetIds = this.getTargetIds();
        if (!targetIds.length) {
            return false;
        }
        const index = targetIds.indexOf(targetId);
        if (shallow) {
            return index === targetIds.length - 1;
        } else {
            return index > -1;
        }
    }
    getItemType() {
        return this.store.getState().dragOperation.itemType;
    }
    getItem() {
        return this.store.getState().dragOperation.item;
    }
    getSourceId() {
        return this.store.getState().dragOperation.sourceId;
    }
    getTargetIds() {
        return this.store.getState().dragOperation.targetIds;
    }
    getDropResult() {
        return this.store.getState().dragOperation.dropResult;
    }
    didDrop() {
        return this.store.getState().dragOperation.didDrop;
    }
    isSourcePublic() {
        return Boolean(this.store.getState().dragOperation.isSourcePublic);
    }
    getInitialClientOffset() {
        return this.store.getState().dragOffset.initialClientOffset;
    }
    getInitialSourceClientOffset() {
        return this.store.getState().dragOffset.initialSourceClientOffset;
    }
    getClientOffset() {
        return this.store.getState().dragOffset.clientOffset;
    }
    getSourceClientOffset() {
        return getSourceClientOffset(this.store.getState().dragOffset);
    }
    getDifferenceFromInitialOffset() {
        return getDifferenceFromInitialOffset(this.store.getState().dragOffset);
    }
    constructor(store, registry){
        this.store = store;
        this.registry = registry;
    }
}

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.
/* globals self */ const scope = typeof global !== 'undefined' ? global : self;
const BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;
function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        const timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        const intervalHandle = setInterval(handleTimer, 50);
        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}
// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    let toggle = 1;
    const observer = new BrowserMutationObserver(callback);
    const node = document.createTextNode('');
    observer.observe(node, {
        characterData: true
    });
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}
const makeRequestCall = typeof BrowserMutationObserver === 'function' ? // reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
makeRequestCallFromMutationObserver : // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.
// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396
// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
makeRequestCallFromTimer;

class AsapQueue {
    // Use the fastest means possible to execute a task in its own turn, with
    // priority over other events including IO, animation, reflow, and redraw
    // events in browsers.
    //
    // An exception thrown by a task will permanently interrupt the processing of
    // subsequent tasks. The higher level `asap` function ensures that if an
    // exception is thrown by a task, that the task queue will continue flushing as
    // soon as possible, but if you use `rawAsap` directly, you are responsible to
    // either ensure that no exceptions are thrown from your task, or to manually
    // call `rawAsap.requestFlush` if an exception is thrown.
    enqueueTask(task) {
        const { queue: q , requestFlush  } = this;
        if (!q.length) {
            requestFlush();
            this.flushing = true;
        }
        // Equivalent to push, but avoids a function call.
        q[q.length] = task;
    }
    constructor(){
        this.queue = [];
        // We queue errors to ensure they are thrown in right order (FIFO).
        // Array-as-queue is good enough here, since we are just dealing with exceptions.
        this.pendingErrors = [];
        // Once a flush has been requested, no further calls to `requestFlush` are
        // necessary until the next `flush` completes.
        // @ts-ignore
        this.flushing = false;
        // The position of the next task to execute in the task queue. This is
        // preserved between calls to `flush` so that it can be resumed if
        // a task throws an exception.
        this.index = 0;
        // If a task schedules additional tasks recursively, the task queue can grow
        // unbounded. To prevent memory exhaustion, the task queue will periodically
        // truncate already-completed tasks.
        this.capacity = 1024;
        // The flush function processes all tasks that have been scheduled with
        // `rawAsap` unless and until one of those tasks throws an exception.
        // If a task throws an exception, `flush` ensures that its state will remain
        // consistent and will resume where it left off when called again.
        // However, `flush` does not make any arrangements to be called again if an
        // exception is thrown.
        this.flush = ()=>{
            const { queue: q  } = this;
            while(this.index < q.length){
                const currentIndex = this.index;
                // Advance the index before calling the task. This ensures that we will
                // begin flushing on the next task the task throws an error.
                this.index++;
                q[currentIndex].call();
                // Prevent leaking memory for long chains of recursive calls to `asap`.
                // If we call `asap` within tasks scheduled by `asap`, the queue will
                // grow, but to avoid an O(n) walk for every task we execute, we don't
                // shift tasks off the queue after they have been executed.
                // Instead, we periodically shift 1024 tasks off the queue.
                if (this.index > this.capacity) {
                    // Manually shift all values starting at the index back to the
                    // beginning of the queue.
                    for(let scan = 0, newLength = q.length - this.index; scan < newLength; scan++){
                        q[scan] = q[scan + this.index];
                    }
                    q.length -= this.index;
                    this.index = 0;
                }
            }
            q.length = 0;
            this.index = 0;
            this.flushing = false;
        };
        // In a web browser, exceptions are not fatal. However, to avoid
        // slowing down the queue of pending tasks, we rethrow the error in a
        // lower priority turn.
        this.registerPendingError = (err)=>{
            this.pendingErrors.push(err);
            this.requestErrorThrow();
        };
        // `requestFlush` requests that the high priority event queue be flushed as
        // soon as possible.
        // This is useful to prevent an error thrown in a task from stalling the event
        // queue if the exception handled by Node.js’s
        // `process.on("uncaughtException")` or by a domain.
        // `requestFlush` is implemented using a strategy based on data collected from
        // every available SauceLabs Selenium web driver worker at time of writing.
        // https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
        this.requestFlush = makeRequestCall(this.flush);
        this.requestErrorThrow = makeRequestCallFromTimer(()=>{
            // Throw first error
            if (this.pendingErrors.length) {
                throw this.pendingErrors.shift();
            }
        });
    }
} // The message channel technique was discovered by Malte Ubl and was the
 // original foundation for this library.
 // http://www.nonblocking.io/2011/06/windownexttick.html
 // Safari 6.0.5 (at least) intermittently fails to create message ports on a
 // page's first load. Thankfully, this version of Safari supports
 // MutationObservers, so we don't need to fall back in that case.
 // function makeRequestCallFromMessageChannel(callback) {
 //     var channel = new MessageChannel();
 //     channel.port1.onmessage = callback;
 //     return function requestCall() {
 //         channel.port2.postMessage(0);
 //     };
 // }
 // For reasons explained above, we are also unable to use `setImmediate`
 // under any circumstances.
 // Even if we were, there is another bug in Internet Explorer 10.
 // It is not sufficient to assign `setImmediate` to `requestFlush` because
 // `setImmediate` must be called *by name* and therefore must be wrapped in a
 // closure.
 // Never forget.
 // function makeRequestCallFromSetImmediate(callback) {
 //     return function requestCall() {
 //         setImmediate(callback);
 //     };
 // }
 // Safari 6.0 has a problem where timers will get lost while the user is
 // scrolling. This problem does not impact ASAP because Safari 6.0 supports
 // mutation observers, so that implementation is used instead.
 // However, if we ever elect to use timers in Safari, the prevalent work-around
 // is to add a scroll event listener that calls for a flush.
 // `setTimeout` does not call the passed callback if the delay is less than
 // approximately 7 in web workers in Firefox 8 through 18, and sometimes not
 // even then.
 // This is for `asap.js` only.
 // Its name will be periodically randomized to break any code that depends on
 // // its existence.
 // rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer
 // ASAP was originally a nextTick shim included in Q. This was factored out
 // into this ASAP package. It was later adapted to RSVP which made further
 // amendments. These decisions, particularly to marginalize MessageChannel and
 // to capture the MutationObserver implementation in a closure, were integrated
 // back into ASAP proper.
 // https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

// `call`, just like a function.
class RawTask {
    call() {
        try {
            this.task && this.task();
        } catch (error) {
            this.onError(error);
        } finally{
            this.task = null;
            this.release(this);
        }
    }
    constructor(onError, release){
        this.onError = onError;
        this.release = release;
        this.task = null;
    }
}

class TaskFactory {
    create(task) {
        const tasks = this.freeTasks;
        const t1 = tasks.length ? tasks.pop() : new RawTask(this.onError, (t)=>tasks[tasks.length] = t
        );
        t1.task = task;
        return t1;
    }
    constructor(onError){
        this.onError = onError;
        this.freeTasks = [];
    }
}

const asapQueue = new AsapQueue();
const taskFactory = new TaskFactory(asapQueue.registerPendingError);
/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */ function asap(task) {
    asapQueue.enqueueTask(taskFactory.create(task));
}

const ADD_SOURCE = 'dnd-core/ADD_SOURCE';
const ADD_TARGET = 'dnd-core/ADD_TARGET';
const REMOVE_SOURCE = 'dnd-core/REMOVE_SOURCE';
const REMOVE_TARGET = 'dnd-core/REMOVE_TARGET';
function addSource(sourceId) {
    return {
        type: ADD_SOURCE,
        payload: {
            sourceId
        }
    };
}
function addTarget(targetId) {
    return {
        type: ADD_TARGET,
        payload: {
            targetId
        }
    };
}
function removeSource(sourceId) {
    return {
        type: REMOVE_SOURCE,
        payload: {
            sourceId
        }
    };
}
function removeTarget(targetId) {
    return {
        type: REMOVE_TARGET,
        payload: {
            targetId
        }
    };
}

function validateSourceContract(source) {
    invariant(typeof source.canDrag === 'function', 'Expected canDrag to be a function.');
    invariant(typeof source.beginDrag === 'function', 'Expected beginDrag to be a function.');
    invariant(typeof source.endDrag === 'function', 'Expected endDrag to be a function.');
}
function validateTargetContract(target) {
    invariant(typeof target.canDrop === 'function', 'Expected canDrop to be a function.');
    invariant(typeof target.hover === 'function', 'Expected hover to be a function.');
    invariant(typeof target.drop === 'function', 'Expected beginDrag to be a function.');
}
function validateType(type, allowArray) {
    if (allowArray && Array.isArray(type)) {
        type.forEach((t)=>validateType(t, false)
        );
        return;
    }
    invariant(typeof type === 'string' || typeof type === 'symbol', allowArray ? 'Type can only be a string, a symbol, or an array of either.' : 'Type can only be a string or a symbol.');
}

var HandlerRole;
(function(HandlerRole) {
    HandlerRole["SOURCE"] = "SOURCE";
    HandlerRole["TARGET"] = "TARGET";
})(HandlerRole || (HandlerRole = {}));

let nextUniqueId = 0;
function getNextUniqueId() {
    return nextUniqueId++;
}

function getNextHandlerId(role) {
    const id = getNextUniqueId().toString();
    switch(role){
        case HandlerRole.SOURCE:
            return `S${id}`;
        case HandlerRole.TARGET:
            return `T${id}`;
        default:
            throw new Error(`Unknown Handler Role: ${role}`);
    }
}
function parseRoleFromHandlerId(handlerId) {
    switch(handlerId[0]){
        case 'S':
            return HandlerRole.SOURCE;
        case 'T':
            return HandlerRole.TARGET;
        default:
            throw new Error(`Cannot parse handler ID: ${handlerId}`);
    }
}
function mapContainsValue(map, searchValue) {
    const entries = map.entries();
    let isDone = false;
    do {
        const { done , value: [, value] ,  } = entries.next();
        if (value === searchValue) {
            return true;
        }
        isDone = !!done;
    }while (!isDone)
    return false;
}
class HandlerRegistryImpl {
    addSource(type, source) {
        validateType(type);
        validateSourceContract(source);
        const sourceId = this.addHandler(HandlerRole.SOURCE, type, source);
        this.store.dispatch(addSource(sourceId));
        return sourceId;
    }
    addTarget(type, target) {
        validateType(type, true);
        validateTargetContract(target);
        const targetId = this.addHandler(HandlerRole.TARGET, type, target);
        this.store.dispatch(addTarget(targetId));
        return targetId;
    }
    containsHandler(handler) {
        return mapContainsValue(this.dragSources, handler) || mapContainsValue(this.dropTargets, handler);
    }
    getSource(sourceId, includePinned = false) {
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        const isPinned = includePinned && sourceId === this.pinnedSourceId;
        const source = isPinned ? this.pinnedSource : this.dragSources.get(sourceId);
        return source;
    }
    getTarget(targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.dropTargets.get(targetId);
    }
    getSourceType(sourceId) {
        invariant(this.isSourceId(sourceId), 'Expected a valid source ID.');
        return this.types.get(sourceId);
    }
    getTargetType(targetId) {
        invariant(this.isTargetId(targetId), 'Expected a valid target ID.');
        return this.types.get(targetId);
    }
    isSourceId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === HandlerRole.SOURCE;
    }
    isTargetId(handlerId) {
        const role = parseRoleFromHandlerId(handlerId);
        return role === HandlerRole.TARGET;
    }
    removeSource(sourceId) {
        invariant(this.getSource(sourceId), 'Expected an existing source.');
        this.store.dispatch(removeSource(sourceId));
        asap(()=>{
            this.dragSources.delete(sourceId);
            this.types.delete(sourceId);
        });
    }
    removeTarget(targetId) {
        invariant(this.getTarget(targetId), 'Expected an existing target.');
        this.store.dispatch(removeTarget(targetId));
        this.dropTargets.delete(targetId);
        this.types.delete(targetId);
    }
    pinSource(sourceId) {
        const source = this.getSource(sourceId);
        invariant(source, 'Expected an existing source.');
        this.pinnedSourceId = sourceId;
        this.pinnedSource = source;
    }
    unpinSource() {
        invariant(this.pinnedSource, 'No source is pinned at the time.');
        this.pinnedSourceId = null;
        this.pinnedSource = null;
    }
    addHandler(role, type, handler) {
        const id = getNextHandlerId(role);
        this.types.set(id, type);
        if (role === HandlerRole.SOURCE) {
            this.dragSources.set(id, handler);
        } else if (role === HandlerRole.TARGET) {
            this.dropTargets.set(id, handler);
        }
        return id;
    }
    constructor(store){
        this.types = new Map();
        this.dragSources = new Map();
        this.dropTargets = new Map();
        this.pinnedSourceId = null;
        this.pinnedSource = null;
        this.store = store;
    }
}

const strictEquality = (a, b)=>a === b
;
/**
 * Determine if two cartesian coordinate offsets are equal
 * @param offsetA
 * @param offsetB
 */ function areCoordsEqual(offsetA, offsetB) {
    if (!offsetA && !offsetB) {
        return true;
    } else if (!offsetA || !offsetB) {
        return false;
    } else {
        return offsetA.x === offsetB.x && offsetA.y === offsetB.y;
    }
}
/**
 * Determines if two arrays of items are equal
 * @param a The first array of items
 * @param b The second array of items
 */ function areArraysEqual(a, b, isEqual = strictEquality) {
    if (a.length !== b.length) {
        return false;
    }
    for(let i = 0; i < a.length; ++i){
        if (!isEqual(a[i], b[i])) {
            return false;
        }
    }
    return true;
}

function reduce$5(// eslint-disable-next-line @typescript-eslint/no-unused-vars
_state = NONE, action) {
    switch(action.type){
        case HOVER:
            break;
        case ADD_SOURCE:
        case ADD_TARGET:
        case REMOVE_TARGET:
        case REMOVE_SOURCE:
            return NONE;
        case BEGIN_DRAG:
        case PUBLISH_DRAG_SOURCE:
        case END_DRAG:
        case DROP:
        default:
            return ALL;
    }
    const { targetIds =[] , prevTargetIds =[]  } = action.payload;
    const result = xor(targetIds, prevTargetIds);
    const didChange = result.length > 0 || !areArraysEqual(targetIds, prevTargetIds);
    if (!didChange) {
        return NONE;
    }
    // Check the target ids at the innermost position. If they are valid, add them
    // to the result
    const prevInnermostTargetId = prevTargetIds[prevTargetIds.length - 1];
    const innermostTargetId = targetIds[targetIds.length - 1];
    if (prevInnermostTargetId !== innermostTargetId) {
        if (prevInnermostTargetId) {
            result.push(prevInnermostTargetId);
        }
        if (innermostTargetId) {
            result.push(innermostTargetId);
        }
    }
    return result;
}

function _defineProperty$3(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$3(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$3(target, key, source[key]);
        });
    }
    return target;
}
const initialState$1 = {
    initialSourceClientOffset: null,
    initialClientOffset: null,
    clientOffset: null
};
function reduce$4(state = initialState$1, action) {
    const { payload  } = action;
    switch(action.type){
        case INIT_COORDS:
        case BEGIN_DRAG:
            return {
                initialSourceClientOffset: payload.sourceClientOffset,
                initialClientOffset: payload.clientOffset,
                clientOffset: payload.clientOffset
            };
        case HOVER:
            if (areCoordsEqual(state.clientOffset, payload.clientOffset)) {
                return state;
            }
            return _objectSpread$3({}, state, {
                clientOffset: payload.clientOffset
            });
        case END_DRAG:
        case DROP:
            return initialState$1;
        default:
            return state;
    }
}

function _defineProperty$2(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$2(target, key, source[key]);
        });
    }
    return target;
}
const initialState = {
    itemType: null,
    item: null,
    sourceId: null,
    targetIds: [],
    dropResult: null,
    didDrop: false,
    isSourcePublic: null
};
function reduce$3(state = initialState, action) {
    const { payload  } = action;
    switch(action.type){
        case BEGIN_DRAG:
            return _objectSpread$2({}, state, {
                itemType: payload.itemType,
                item: payload.item,
                sourceId: payload.sourceId,
                isSourcePublic: payload.isSourcePublic,
                dropResult: null,
                didDrop: false
            });
        case PUBLISH_DRAG_SOURCE:
            return _objectSpread$2({}, state, {
                isSourcePublic: true
            });
        case HOVER:
            return _objectSpread$2({}, state, {
                targetIds: payload.targetIds
            });
        case REMOVE_TARGET:
            if (state.targetIds.indexOf(payload.targetId) === -1) {
                return state;
            }
            return _objectSpread$2({}, state, {
                targetIds: without$1(state.targetIds, payload.targetId)
            });
        case DROP:
            return _objectSpread$2({}, state, {
                dropResult: payload.dropResult,
                didDrop: true,
                targetIds: []
            });
        case END_DRAG:
            return _objectSpread$2({}, state, {
                itemType: null,
                item: null,
                sourceId: null,
                dropResult: null,
                didDrop: false,
                isSourcePublic: null,
                targetIds: []
            });
        default:
            return state;
    }
}

function reduce$2(state = 0, action) {
    switch(action.type){
        case ADD_SOURCE:
        case ADD_TARGET:
            return state + 1;
        case REMOVE_SOURCE:
        case REMOVE_TARGET:
            return state - 1;
        default:
            return state;
    }
}

function reduce$1(state = 0) {
    return state + 1;
}

function _defineProperty$1(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty$1(target, key, source[key]);
        });
    }
    return target;
}
function reduce(state = {}, action) {
    return {
        dirtyHandlerIds: reduce$5(state.dirtyHandlerIds, {
            type: action.type,
            payload: _objectSpread$1({}, action.payload, {
                prevTargetIds: get(state, 'dragOperation.targetIds', [])
            })
        }),
        dragOffset: reduce$4(state.dragOffset, action),
        refCount: reduce$2(state.refCount, action),
        dragOperation: reduce$3(state.dragOperation, action),
        stateId: reduce$1(state.stateId)
    };
}

function createDragDropManager(backendFactory, globalContext = undefined, backendOptions = {}, debugMode = false) {
    const store = makeStoreInstance(debugMode);
    const monitor = new DragDropMonitorImpl(store, new HandlerRegistryImpl(store));
    const manager = new DragDropManagerImpl(store, monitor);
    const backend = backendFactory(manager, globalContext, backendOptions);
    manager.receiveBackend(backend);
    return manager;
}
function makeStoreInstance(debugMode) {
    // TODO: if we ever make a react-native version of this,
    // we'll need to consider how to pull off dev-tooling
    const reduxDevTools = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__;
    return createStore(reduce, debugMode && reduxDevTools && reduxDevTools({
        name: 'dnd-core',
        instanceId: 'dnd-core'
    }));
}

function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for(i = 0; i < sourceSymbolKeys.length; i++){
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}
let refCount = 0;
const INSTANCE_SYM = Symbol.for('__REACT_DND_CONTEXT_INSTANCE__');
var DndProvider = /*#__PURE__*/ reactExports.memo(function DndProvider(_param) {
    var { children  } = _param, props = _objectWithoutProperties(_param, [
        "children"
    ]);
    const [manager, isGlobalInstance] = getDndContextValue(props) // memoized from props
    ;
    /**
		 * If the global context was used to store the DND context
		 * then where theres no more references to it we should
		 * clean it up to avoid memory leaks
		 */ reactExports.useEffect(()=>{
        if (isGlobalInstance) {
            const context = getGlobalContext();
            ++refCount;
            return ()=>{
                if (--refCount === 0) {
                    context[INSTANCE_SYM] = null;
                }
            };
        }
        return;
    }, []);
    return /*#__PURE__*/ jsxRuntimeExports.jsx(DndContext.Provider, {
        value: manager,
        children: children
    });
});
function getDndContextValue(props) {
    if ('manager' in props) {
        const manager = {
            dragDropManager: props.manager
        };
        return [
            manager,
            false
        ];
    }
    const manager = createSingletonDndContext(props.backend, props.context, props.options, props.debugMode);
    const isGlobalInstance = !props.context;
    return [
        manager,
        isGlobalInstance
    ];
}
function createSingletonDndContext(backend, context = getGlobalContext(), options, debugMode) {
    const ctx = context;
    if (!ctx[INSTANCE_SYM]) {
        ctx[INSTANCE_SYM] = {
            dragDropManager: createDragDropManager(backend, context, options, debugMode)
        };
    }
    return ctx[INSTANCE_SYM];
}
function getGlobalContext() {
    return typeof global !== 'undefined' ? global : window;
}

// do not edit .js files directly - edit src/index.jst



var fastDeepEqual = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

// suppress the useLayoutEffect warning on server side.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? reactExports.useLayoutEffect : reactExports.useEffect;

/**
 *
 * @param monitor The monitor to collect state from
 * @param collect The collecting function
 * @param onUpdate A method to invoke when updates occur
 */ function useCollector(monitor, collect, onUpdate) {
    const [collected, setCollected] = reactExports.useState(()=>collect(monitor)
    );
    const updateCollected = reactExports.useCallback(()=>{
        const nextValue = collect(monitor);
        // This needs to be a deep-equality check because some monitor-collected values
        // include XYCoord objects that may be equivalent, but do not have instance equality.
        if (!fastDeepEqual(collected, nextValue)) {
            setCollected(nextValue);
            if (onUpdate) {
                onUpdate();
            }
        }
    }, [
        collected,
        monitor,
        onUpdate
    ]);
    // update the collected properties after react renders.
    // Note that the "Dustbin Stress Test" fails if this is not
    // done when the component updates
    useIsomorphicLayoutEffect(updateCollected);
    return [
        collected,
        updateCollected
    ];
}

function useMonitorOutput(monitor, collect, onCollect) {
    const [collected, updateCollected] = useCollector(monitor, collect, onCollect);
    useIsomorphicLayoutEffect(function subscribeToMonitorStateChange() {
        const handlerId = monitor.getHandlerId();
        if (handlerId == null) {
            return;
        }
        return monitor.subscribeToStateChange(updateCollected, {
            handlerIds: [
                handlerId
            ]
        });
    }, [
        monitor,
        updateCollected
    ]);
    return collected;
}

function useCollectedProps(collector, monitor, connector) {
    return useMonitorOutput(monitor, collector || (()=>({})
    ), ()=>connector.reconnect()
    );
}

function useOptionalFactory(arg, deps) {
    const memoDeps = [
        ...deps || []
    ];
    if (deps == null && typeof arg !== 'function') {
        memoDeps.push(arg);
    }
    return reactExports.useMemo(()=>{
        return typeof arg === 'function' ? arg() : arg;
    }, memoDeps);
}

function useConnectDragSource(connector) {
    return reactExports.useMemo(()=>connector.hooks.dragSource()
    , [
        connector
    ]);
}
function useConnectDragPreview(connector) {
    return reactExports.useMemo(()=>connector.hooks.dragPreview()
    , [
        connector
    ]);
}

let isCallingCanDrag = false;
let isCallingIsDragging = false;
class DragSourceMonitorImpl {
    receiveHandlerId(sourceId) {
        this.sourceId = sourceId;
    }
    getHandlerId() {
        return this.sourceId;
    }
    canDrag() {
        invariant(!isCallingCanDrag, 'You may not call monitor.canDrag() inside your canDrag() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingCanDrag = true;
            return this.internalMonitor.canDragSource(this.sourceId);
        } finally{
            isCallingCanDrag = false;
        }
    }
    isDragging() {
        if (!this.sourceId) {
            return false;
        }
        invariant(!isCallingIsDragging, 'You may not call monitor.isDragging() inside your isDragging() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drag-source-monitor');
        try {
            isCallingIsDragging = true;
            return this.internalMonitor.isDraggingSource(this.sourceId);
        } finally{
            isCallingIsDragging = false;
        }
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    isDraggingSource(sourceId) {
        return this.internalMonitor.isDraggingSource(sourceId);
    }
    isOverTarget(targetId, options) {
        return this.internalMonitor.isOverTarget(targetId, options);
    }
    getTargetIds() {
        return this.internalMonitor.getTargetIds();
    }
    isSourcePublic() {
        return this.internalMonitor.isSourcePublic();
    }
    getSourceId() {
        return this.internalMonitor.getSourceId();
    }
    subscribeToOffsetChange(listener) {
        return this.internalMonitor.subscribeToOffsetChange(listener);
    }
    canDragSource(sourceId) {
        return this.internalMonitor.canDragSource(sourceId);
    }
    canDropOnTarget(targetId) {
        return this.internalMonitor.canDropOnTarget(targetId);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.sourceId = null;
        this.internalMonitor = manager.getMonitor();
    }
}

let isCallingCanDrop = false;
class DropTargetMonitorImpl {
    receiveHandlerId(targetId) {
        this.targetId = targetId;
    }
    getHandlerId() {
        return this.targetId;
    }
    subscribeToStateChange(listener, options) {
        return this.internalMonitor.subscribeToStateChange(listener, options);
    }
    canDrop() {
        // Cut out early if the target id has not been set. This should prevent errors
        // where the user has an older version of dnd-core like in
        // https://github.com/react-dnd/react-dnd/issues/1310
        if (!this.targetId) {
            return false;
        }
        invariant(!isCallingCanDrop, 'You may not call monitor.canDrop() inside your canDrop() implementation. ' + 'Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor');
        try {
            isCallingCanDrop = true;
            return this.internalMonitor.canDropOnTarget(this.targetId);
        } finally{
            isCallingCanDrop = false;
        }
    }
    isOver(options) {
        if (!this.targetId) {
            return false;
        }
        return this.internalMonitor.isOverTarget(this.targetId, options);
    }
    getItemType() {
        return this.internalMonitor.getItemType();
    }
    getItem() {
        return this.internalMonitor.getItem();
    }
    getDropResult() {
        return this.internalMonitor.getDropResult();
    }
    didDrop() {
        return this.internalMonitor.didDrop();
    }
    getInitialClientOffset() {
        return this.internalMonitor.getInitialClientOffset();
    }
    getInitialSourceClientOffset() {
        return this.internalMonitor.getInitialSourceClientOffset();
    }
    getSourceClientOffset() {
        return this.internalMonitor.getSourceClientOffset();
    }
    getClientOffset() {
        return this.internalMonitor.getClientOffset();
    }
    getDifferenceFromInitialOffset() {
        return this.internalMonitor.getDifferenceFromInitialOffset();
    }
    constructor(manager){
        this.targetId = null;
        this.internalMonitor = manager.getMonitor();
    }
}

function registerTarget(type, target, manager) {
    const registry = manager.getRegistry();
    const targetId = registry.addTarget(type, target);
    return [
        targetId,
        ()=>registry.removeTarget(targetId)
    ];
}
function registerSource(type, source, manager) {
    const registry = manager.getRegistry();
    const sourceId = registry.addSource(type, source);
    return [
        sourceId,
        ()=>registry.removeSource(sourceId)
    ];
}

function shallowEqual(objA, objB, compare, compareContext) {
    let compareResult = compare ? compare.call(compareContext, objA, objB) : void 0;
    if (compareResult !== void 0) {
        return !!compareResult;
    }
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // Test for A's keys different from B.
    for(let idx = 0; idx < keysA.length; idx++){
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        const valueA = objA[key];
        const valueB = objB[key];
        compareResult = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;
        if (compareResult === false || compareResult === void 0 && valueA !== valueB) {
            return false;
        }
    }
    return true;
}

function isRef(obj) {
    return(// eslint-disable-next-line no-prototype-builtins
    obj !== null && typeof obj === 'object' && Object.prototype.hasOwnProperty.call(obj, 'current'));
}

function throwIfCompositeComponentElement(element) {
    // Custom components can no longer be wrapped directly in React DnD 2.0
    // so that we don't need to depend on findDOMNode() from react-dom.
    if (typeof element.type === 'string') {
        return;
    }
    const displayName = element.type.displayName || element.type.name || 'the component';
    throw new Error('Only native element nodes can now be passed to React DnD connectors.' + `You can either wrap ${displayName} into a <div>, or turn it into a ` + 'drag source or a drop target itself.');
}
function wrapHookToRecognizeElement(hook) {
    return (elementOrNode = null, options = null)=>{
        // When passed a node, call the hook straight away.
        if (!reactExports.isValidElement(elementOrNode)) {
            const node = elementOrNode;
            hook(node, options);
            // return the node so it can be chained (e.g. when within callback refs
            // <div ref={node => connectDragSource(connectDropTarget(node))}/>
            return node;
        }
        // If passed a ReactElement, clone it and attach this function as a ref.
        // This helps us achieve a neat API where user doesn't even know that refs
        // are being used under the hood.
        const element = elementOrNode;
        throwIfCompositeComponentElement(element);
        // When no options are passed, use the hook directly
        const ref = options ? (node)=>hook(node, options)
         : hook;
        return cloneWithRef(element, ref);
    };
}
function wrapConnectorHooks(hooks) {
    const wrappedHooks = {};
    Object.keys(hooks).forEach((key)=>{
        const hook = hooks[key];
        // ref objects should be passed straight through without wrapping
        if (key.endsWith('Ref')) {
            wrappedHooks[key] = hooks[key];
        } else {
            const wrappedHook = wrapHookToRecognizeElement(hook);
            wrappedHooks[key] = ()=>wrappedHook
            ;
        }
    });
    return wrappedHooks;
}
function setRef(ref, node) {
    if (typeof ref === 'function') {
        ref(node);
    } else {
        ref.current = node;
    }
}
function cloneWithRef(element, newRef) {
    const previousRef = element.ref;
    invariant(typeof previousRef !== 'string', 'Cannot connect React DnD to an element with an existing string ref. ' + 'Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. ' + 'Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs');
    if (!previousRef) {
        // When there is no ref on the element, use the new ref directly
        return reactExports.cloneElement(element, {
            ref: newRef
        });
    } else {
        return reactExports.cloneElement(element, {
            ref: (node)=>{
                setRef(previousRef, node);
                setRef(newRef, node);
            }
        });
    }
}

class SourceConnector {
    receiveHandlerId(newHandlerId) {
        if (this.handlerId === newHandlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get connectTarget() {
        return this.dragSource;
    }
    get dragSourceOptions() {
        return this.dragSourceOptionsInternal;
    }
    set dragSourceOptions(options) {
        this.dragSourceOptionsInternal = options;
    }
    get dragPreviewOptions() {
        return this.dragPreviewOptionsInternal;
    }
    set dragPreviewOptions(options) {
        this.dragPreviewOptionsInternal = options;
    }
    reconnect() {
        const didChange = this.reconnectDragSource();
        this.reconnectDragPreview(didChange);
    }
    reconnectDragSource() {
        const dragSource = this.dragSource;
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didConnectedDragSourceChange() || this.didDragSourceOptionsChange();
        if (didChange) {
            this.disconnectDragSource();
        }
        if (!this.handlerId) {
            return didChange;
        }
        if (!dragSource) {
            this.lastConnectedDragSource = dragSource;
            return didChange;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragSource = dragSource;
            this.lastConnectedDragSourceOptions = this.dragSourceOptions;
            this.dragSourceUnsubscribe = this.backend.connectDragSource(this.handlerId, dragSource, this.dragSourceOptions);
        }
        return didChange;
    }
    reconnectDragPreview(forceDidChange = false) {
        const dragPreview = this.dragPreview;
        // if nothing has changed then don't resubscribe
        const didChange = forceDidChange || this.didHandlerIdChange() || this.didConnectedDragPreviewChange() || this.didDragPreviewOptionsChange();
        if (didChange) {
            this.disconnectDragPreview();
        }
        if (!this.handlerId) {
            return;
        }
        if (!dragPreview) {
            this.lastConnectedDragPreview = dragPreview;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDragPreview = dragPreview;
            this.lastConnectedDragPreviewOptions = this.dragPreviewOptions;
            this.dragPreviewUnsubscribe = this.backend.connectDragPreview(this.handlerId, dragPreview, this.dragPreviewOptions);
        }
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didConnectedDragSourceChange() {
        return this.lastConnectedDragSource !== this.dragSource;
    }
    didConnectedDragPreviewChange() {
        return this.lastConnectedDragPreview !== this.dragPreview;
    }
    didDragSourceOptionsChange() {
        return !shallowEqual(this.lastConnectedDragSourceOptions, this.dragSourceOptions);
    }
    didDragPreviewOptionsChange() {
        return !shallowEqual(this.lastConnectedDragPreviewOptions, this.dragPreviewOptions);
    }
    disconnectDragSource() {
        if (this.dragSourceUnsubscribe) {
            this.dragSourceUnsubscribe();
            this.dragSourceUnsubscribe = undefined;
        }
    }
    disconnectDragPreview() {
        if (this.dragPreviewUnsubscribe) {
            this.dragPreviewUnsubscribe();
            this.dragPreviewUnsubscribe = undefined;
            this.dragPreviewNode = null;
            this.dragPreviewRef = null;
        }
    }
    get dragSource() {
        return this.dragSourceNode || this.dragSourceRef && this.dragSourceRef.current;
    }
    get dragPreview() {
        return this.dragPreviewNode || this.dragPreviewRef && this.dragPreviewRef.current;
    }
    clearDragSource() {
        this.dragSourceNode = null;
        this.dragSourceRef = null;
    }
    clearDragPreview() {
        this.dragPreviewNode = null;
        this.dragPreviewRef = null;
    }
    constructor(backend){
        this.hooks = wrapConnectorHooks({
            dragSource: (node, options)=>{
                this.clearDragSource();
                this.dragSourceOptions = options || null;
                if (isRef(node)) {
                    this.dragSourceRef = node;
                } else {
                    this.dragSourceNode = node;
                }
                this.reconnectDragSource();
            },
            dragPreview: (node, options)=>{
                this.clearDragPreview();
                this.dragPreviewOptions = options || null;
                if (isRef(node)) {
                    this.dragPreviewRef = node;
                } else {
                    this.dragPreviewNode = node;
                }
                this.reconnectDragPreview();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dragSourceRef = null;
        this.dragSourceOptionsInternal = null;
        // The drag preview may either be attached via ref or connect function
        this.dragPreviewRef = null;
        this.dragPreviewOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDragSource = null;
        this.lastConnectedDragSourceOptions = null;
        this.lastConnectedDragPreview = null;
        this.lastConnectedDragPreviewOptions = null;
        this.backend = backend;
    }
}

class TargetConnector {
    get connectTarget() {
        return this.dropTarget;
    }
    reconnect() {
        // if nothing has changed then don't resubscribe
        const didChange = this.didHandlerIdChange() || this.didDropTargetChange() || this.didOptionsChange();
        if (didChange) {
            this.disconnectDropTarget();
        }
        const dropTarget = this.dropTarget;
        if (!this.handlerId) {
            return;
        }
        if (!dropTarget) {
            this.lastConnectedDropTarget = dropTarget;
            return;
        }
        if (didChange) {
            this.lastConnectedHandlerId = this.handlerId;
            this.lastConnectedDropTarget = dropTarget;
            this.lastConnectedDropTargetOptions = this.dropTargetOptions;
            this.unsubscribeDropTarget = this.backend.connectDropTarget(this.handlerId, dropTarget, this.dropTargetOptions);
        }
    }
    receiveHandlerId(newHandlerId) {
        if (newHandlerId === this.handlerId) {
            return;
        }
        this.handlerId = newHandlerId;
        this.reconnect();
    }
    get dropTargetOptions() {
        return this.dropTargetOptionsInternal;
    }
    set dropTargetOptions(options) {
        this.dropTargetOptionsInternal = options;
    }
    didHandlerIdChange() {
        return this.lastConnectedHandlerId !== this.handlerId;
    }
    didDropTargetChange() {
        return this.lastConnectedDropTarget !== this.dropTarget;
    }
    didOptionsChange() {
        return !shallowEqual(this.lastConnectedDropTargetOptions, this.dropTargetOptions);
    }
    disconnectDropTarget() {
        if (this.unsubscribeDropTarget) {
            this.unsubscribeDropTarget();
            this.unsubscribeDropTarget = undefined;
        }
    }
    get dropTarget() {
        return this.dropTargetNode || this.dropTargetRef && this.dropTargetRef.current;
    }
    clearDropTarget() {
        this.dropTargetRef = null;
        this.dropTargetNode = null;
    }
    constructor(backend){
        this.hooks = wrapConnectorHooks({
            dropTarget: (node, options)=>{
                this.clearDropTarget();
                this.dropTargetOptions = options;
                if (isRef(node)) {
                    this.dropTargetRef = node;
                } else {
                    this.dropTargetNode = node;
                }
                this.reconnect();
            }
        });
        this.handlerId = null;
        // The drop target may either be attached via ref or connect function
        this.dropTargetRef = null;
        this.dropTargetOptionsInternal = null;
        this.lastConnectedHandlerId = null;
        this.lastConnectedDropTarget = null;
        this.lastConnectedDropTargetOptions = null;
        this.backend = backend;
    }
}

/**
 * A hook to retrieve the DragDropManager from Context
 */ function useDragDropManager() {
    const { dragDropManager  } = reactExports.useContext(DndContext);
    invariant(dragDropManager != null, 'Expected drag drop context');
    return dragDropManager;
}

function useDragSourceConnector(dragSourceOptions, dragPreviewOptions) {
    const manager = useDragDropManager();
    const connector = reactExports.useMemo(()=>new SourceConnector(manager.getBackend())
    , [
        manager
    ]);
    useIsomorphicLayoutEffect(()=>{
        connector.dragSourceOptions = dragSourceOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragSource()
        ;
    }, [
        connector,
        dragSourceOptions
    ]);
    useIsomorphicLayoutEffect(()=>{
        connector.dragPreviewOptions = dragPreviewOptions || null;
        connector.reconnect();
        return ()=>connector.disconnectDragPreview()
        ;
    }, [
        connector,
        dragPreviewOptions
    ]);
    return connector;
}

function useDragSourceMonitor() {
    const manager = useDragDropManager();
    return reactExports.useMemo(()=>new DragSourceMonitorImpl(manager)
    , [
        manager
    ]);
}

class DragSourceImpl {
    beginDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        let result = null;
        if (typeof spec.item === 'object') {
            result = spec.item;
        } else if (typeof spec.item === 'function') {
            result = spec.item(monitor);
        } else {
            result = {};
        }
        return result !== null && result !== void 0 ? result : null;
    }
    canDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (typeof spec.canDrag === 'boolean') {
            return spec.canDrag;
        } else if (typeof spec.canDrag === 'function') {
            return spec.canDrag(monitor);
        } else {
            return true;
        }
    }
    isDragging(globalMonitor, target) {
        const spec = this.spec;
        const monitor = this.monitor;
        const { isDragging  } = spec;
        return isDragging ? isDragging(monitor) : target === globalMonitor.getSourceId();
    }
    endDrag() {
        const spec = this.spec;
        const monitor = this.monitor;
        const connector = this.connector;
        const { end  } = spec;
        if (end) {
            end(monitor.getItem(), monitor);
        }
        connector.reconnect();
    }
    constructor(spec, monitor, connector){
        this.spec = spec;
        this.monitor = monitor;
        this.connector = connector;
    }
}

function useDragSource(spec, monitor, connector) {
    const handler = reactExports.useMemo(()=>new DragSourceImpl(spec, monitor, connector)
    , [
        monitor,
        connector
    ]);
    reactExports.useEffect(()=>{
        handler.spec = spec;
    }, [
        spec
    ]);
    return handler;
}

function useDragType(spec) {
    return reactExports.useMemo(()=>{
        const result = spec.type;
        invariant(result != null, 'spec.type must be defined');
        return result;
    }, [
        spec
    ]);
}

function useRegisteredDragSource(spec, monitor, connector) {
    const manager = useDragDropManager();
    const handler = useDragSource(spec, monitor, connector);
    const itemType = useDragType(spec);
    useIsomorphicLayoutEffect(function registerDragSource() {
        if (itemType != null) {
            const [handlerId, unregister] = registerSource(itemType, handler, manager);
            monitor.receiveHandlerId(handlerId);
            connector.receiveHandlerId(handlerId);
            return unregister;
        }
        return;
    }, [
        manager,
        monitor,
        connector,
        handler,
        itemType
    ]);
}

/**
 * useDragSource hook
 * @param sourceSpec The drag source specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */ function useDrag(specArg, deps) {
    const spec = useOptionalFactory(specArg, deps);
    invariant(!spec.begin, `useDrag::spec.begin was deprecated in v14. Replace spec.begin() with spec.item(). (see more here - https://react-dnd.github.io/react-dnd/docs/api/use-drag)`);
    const monitor = useDragSourceMonitor();
    const connector = useDragSourceConnector(spec.options, spec.previewOptions);
    useRegisteredDragSource(spec, monitor, connector);
    return [
        useCollectedProps(spec.collect, monitor, connector),
        useConnectDragSource(connector),
        useConnectDragPreview(connector), 
    ];
}

function useConnectDropTarget(connector) {
    return reactExports.useMemo(()=>connector.hooks.dropTarget()
    , [
        connector
    ]);
}

function useDropTargetConnector(options) {
    const manager = useDragDropManager();
    const connector = reactExports.useMemo(()=>new TargetConnector(manager.getBackend())
    , [
        manager
    ]);
    useIsomorphicLayoutEffect(()=>{
        connector.dropTargetOptions = options || null;
        connector.reconnect();
        return ()=>connector.disconnectDropTarget()
        ;
    }, [
        options
    ]);
    return connector;
}

function useDropTargetMonitor() {
    const manager = useDragDropManager();
    return reactExports.useMemo(()=>new DropTargetMonitorImpl(manager)
    , [
        manager
    ]);
}

/**
 * Internal utility hook to get an array-version of spec.accept.
 * The main utility here is that we aren't creating a new array on every render if a non-array spec.accept is passed in.
 * @param spec
 */ function useAccept(spec) {
    const { accept  } = spec;
    return reactExports.useMemo(()=>{
        invariant(spec.accept != null, 'accept must be defined');
        return Array.isArray(accept) ? accept : [
            accept
        ];
    }, [
        accept
    ]);
}

class DropTargetImpl {
    canDrop() {
        const spec = this.spec;
        const monitor = this.monitor;
        return spec.canDrop ? spec.canDrop(monitor.getItem(), monitor) : true;
    }
    hover() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.hover) {
            spec.hover(monitor.getItem(), monitor);
        }
    }
    drop() {
        const spec = this.spec;
        const monitor = this.monitor;
        if (spec.drop) {
            return spec.drop(monitor.getItem(), monitor);
        }
        return;
    }
    constructor(spec, monitor){
        this.spec = spec;
        this.monitor = monitor;
    }
}

function useDropTarget(spec, monitor) {
    const dropTarget = reactExports.useMemo(()=>new DropTargetImpl(spec, monitor)
    , [
        monitor
    ]);
    reactExports.useEffect(()=>{
        dropTarget.spec = spec;
    }, [
        spec
    ]);
    return dropTarget;
}

function useRegisteredDropTarget(spec, monitor, connector) {
    const manager = useDragDropManager();
    const dropTarget = useDropTarget(spec, monitor);
    const accept = useAccept(spec);
    useIsomorphicLayoutEffect(function registerDropTarget() {
        const [handlerId, unregister] = registerTarget(accept, dropTarget, manager);
        monitor.receiveHandlerId(handlerId);
        connector.receiveHandlerId(handlerId);
        return unregister;
    }, [
        manager,
        monitor,
        dropTarget,
        connector,
        accept.map((a)=>a.toString()
        ).join('|'), 
    ]);
}

/**
 * useDropTarget Hook
 * @param spec The drop target specification (object or function, function preferred)
 * @param deps The memoization deps array to use when evaluating spec changes
 */ function useDrop(specArg, deps) {
    const spec = useOptionalFactory(specArg, deps);
    const monitor = useDropTargetMonitor();
    const connector = useDropTargetConnector(spec.options);
    useRegisteredDropTarget(spec, monitor, connector);
    return [
        useCollectedProps(spec.collect, monitor, connector),
        useConnectDropTarget(connector), 
    ];
}

// cheap lodash replacements
function memoize(fn) {
    let result = null;
    const memoized = ()=>{
        if (result == null) {
            result = fn();
        }
        return result;
    };
    return memoized;
}
/**
 * drop-in replacement for _.without
 */ function without(items, item) {
    return items.filter((i)=>i !== item
    );
}
function union(itemsA, itemsB) {
    const set = new Set();
    const insertItem = (item)=>set.add(item)
    ;
    itemsA.forEach(insertItem);
    itemsB.forEach(insertItem);
    const result = [];
    set.forEach((key)=>result.push(key)
    );
    return result;
}

class EnterLeaveCounter {
    enter(enteringNode) {
        const previousLength = this.entered.length;
        const isNodeEntered = (node)=>this.isNodeInDocument(node) && (!node.contains || node.contains(enteringNode))
        ;
        this.entered = union(this.entered.filter(isNodeEntered), [
            enteringNode
        ]);
        return previousLength === 0 && this.entered.length > 0;
    }
    leave(leavingNode) {
        const previousLength = this.entered.length;
        this.entered = without(this.entered.filter(this.isNodeInDocument), leavingNode);
        return previousLength > 0 && this.entered.length === 0;
    }
    reset() {
        this.entered = [];
    }
    constructor(isNodeInDocument){
        this.entered = [];
        this.isNodeInDocument = isNodeInDocument;
    }
}

class NativeDragSource {
    initializeExposedProperties() {
        Object.keys(this.config.exposeProperties).forEach((property)=>{
            Object.defineProperty(this.item, property, {
                configurable: true,
                enumerable: true,
                get () {
                    // eslint-disable-next-line no-console
                    console.warn(`Browser doesn't allow reading "${property}" until the drop event.`);
                    return null;
                }
            });
        });
    }
    loadDataTransfer(dataTransfer) {
        if (dataTransfer) {
            const newProperties = {};
            Object.keys(this.config.exposeProperties).forEach((property)=>{
                const propertyFn = this.config.exposeProperties[property];
                if (propertyFn != null) {
                    newProperties[property] = {
                        value: propertyFn(dataTransfer, this.config.matchesTypes),
                        configurable: true,
                        enumerable: true
                    };
                }
            });
            Object.defineProperties(this.item, newProperties);
        }
    }
    canDrag() {
        return true;
    }
    beginDrag() {
        return this.item;
    }
    isDragging(monitor, handle) {
        return handle === monitor.getSourceId();
    }
    endDrag() {
    // empty
    }
    constructor(config){
        this.config = config;
        this.item = {};
        this.initializeExposedProperties();
    }
}

const FILE = '__NATIVE_FILE__';
const URL = '__NATIVE_URL__';
const TEXT = '__NATIVE_TEXT__';
const HTML = '__NATIVE_HTML__';

var NativeTypes = /*#__PURE__*/Object.freeze({
	__proto__: null,
	FILE: FILE,
	URL: URL,
	TEXT: TEXT,
	HTML: HTML
});

function getDataFromDataTransfer(dataTransfer, typesToTry, defaultValue) {
    const result = typesToTry.reduce((resultSoFar, typeToTry)=>resultSoFar || dataTransfer.getData(typeToTry)
    , '');
    return result != null ? result : defaultValue;
}

const nativeTypesConfig = {
    [FILE]: {
        exposeProperties: {
            files: (dataTransfer)=>Array.prototype.slice.call(dataTransfer.files)
            ,
            items: (dataTransfer)=>dataTransfer.items
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Files'
        ]
    },
    [HTML]: {
        exposeProperties: {
            html: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Html',
            'text/html'
        ]
    },
    [URL]: {
        exposeProperties: {
            urls: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '').split('\n')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Url',
            'text/uri-list'
        ]
    },
    [TEXT]: {
        exposeProperties: {
            text: (dataTransfer, matchesTypes)=>getDataFromDataTransfer(dataTransfer, matchesTypes, '')
            ,
            dataTransfer: (dataTransfer)=>dataTransfer
        },
        matchesTypes: [
            'Text',
            'text/plain'
        ]
    }
};

function createNativeDragSource(type, dataTransfer) {
    const config = nativeTypesConfig[type];
    if (!config) {
        throw new Error(`native type ${type} has no configuration`);
    }
    const result = new NativeDragSource(config);
    result.loadDataTransfer(dataTransfer);
    return result;
}
function matchNativeItemType(dataTransfer) {
    if (!dataTransfer) {
        return null;
    }
    const dataTransferTypes = Array.prototype.slice.call(dataTransfer.types || []);
    return Object.keys(nativeTypesConfig).filter((nativeItemType)=>{
        const typeConfig = nativeTypesConfig[nativeItemType];
        if (!(typeConfig === null || typeConfig === void 0 ? void 0 : typeConfig.matchesTypes)) {
            return false;
        }
        return typeConfig.matchesTypes.some((t)=>dataTransferTypes.indexOf(t) > -1
        );
    })[0] || null;
}

const isFirefox = memoize(()=>/firefox/i.test(navigator.userAgent)
);
const isSafari = memoize(()=>Boolean(window.safari)
);

class MonotonicInterpolant {
    interpolate(x) {
        const { xs , ys , c1s , c2s , c3s  } = this;
        // The rightmost point in the dataset should give an exact result
        let i = xs.length - 1;
        if (x === xs[i]) {
            return ys[i];
        }
        // Search for the interval x is in, returning the corresponding y if x is one of the original xs
        let low = 0;
        let high = c3s.length - 1;
        let mid;
        while(low <= high){
            mid = Math.floor(0.5 * (low + high));
            const xHere = xs[mid];
            if (xHere < x) {
                low = mid + 1;
            } else if (xHere > x) {
                high = mid - 1;
            } else {
                return ys[mid];
            }
        }
        i = Math.max(0, high);
        // Interpolate
        const diff = x - xs[i];
        const diffSq = diff * diff;
        return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq;
    }
    constructor(xs, ys){
        const { length  } = xs;
        // Rearrange xs and ys so that xs is sorted
        const indexes = [];
        for(let i = 0; i < length; i++){
            indexes.push(i);
        }
        indexes.sort((a, b)=>xs[a] < xs[b] ? -1 : 1
        );
        const dxs = [];
        const ms = [];
        let dx;
        let dy;
        for(let i1 = 0; i1 < length - 1; i1++){
            dx = xs[i1 + 1] - xs[i1];
            dy = ys[i1 + 1] - ys[i1];
            dxs.push(dx);
            ms.push(dy / dx);
        }
        // Get degree-1 coefficients
        const c1s = [
            ms[0]
        ];
        for(let i2 = 0; i2 < dxs.length - 1; i2++){
            const m2 = ms[i2];
            const mNext = ms[i2 + 1];
            if (m2 * mNext <= 0) {
                c1s.push(0);
            } else {
                dx = dxs[i2];
                const dxNext = dxs[i2 + 1];
                const common = dx + dxNext;
                c1s.push(3 * common / ((common + dxNext) / m2 + (common + dx) / mNext));
            }
        }
        c1s.push(ms[ms.length - 1]);
        // Get degree-2 and degree-3 coefficients
        const c2s = [];
        const c3s = [];
        let m;
        for(let i3 = 0; i3 < c1s.length - 1; i3++){
            m = ms[i3];
            const c1 = c1s[i3];
            const invDx = 1 / dxs[i3];
            const common = c1 + c1s[i3 + 1] - m - m;
            c2s.push((m - c1 - common) * invDx);
            c3s.push(common * invDx * invDx);
        }
        this.xs = xs;
        this.ys = ys;
        this.c1s = c1s;
        this.c2s = c2s;
        this.c3s = c3s;
    }
}

const ELEMENT_NODE = 1;
function getNodeClientOffset(node) {
    const el = node.nodeType === ELEMENT_NODE ? node : node.parentElement;
    if (!el) {
        return null;
    }
    const { top , left  } = el.getBoundingClientRect();
    return {
        x: left,
        y: top
    };
}
function getEventClientOffset(e) {
    return {
        x: e.clientX,
        y: e.clientY
    };
}
function isImageNode(node) {
    var ref;
    return node.nodeName === 'IMG' && (isFirefox() || !((ref = document.documentElement) === null || ref === void 0 ? void 0 : ref.contains(node)));
}
function getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight) {
    let dragPreviewWidth = isImage ? dragPreview.width : sourceWidth;
    let dragPreviewHeight = isImage ? dragPreview.height : sourceHeight;
    // Work around @2x coordinate discrepancies in browsers
    if (isSafari() && isImage) {
        dragPreviewHeight /= window.devicePixelRatio;
        dragPreviewWidth /= window.devicePixelRatio;
    }
    return {
        dragPreviewWidth,
        dragPreviewHeight
    };
}
function getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint) {
    // The browsers will use the image intrinsic size under different conditions.
    // Firefox only cares if it's an image, but WebKit also wants it to be detached.
    const isImage = isImageNode(dragPreview);
    const dragPreviewNode = isImage ? sourceNode : dragPreview;
    const dragPreviewNodeOffsetFromClient = getNodeClientOffset(dragPreviewNode);
    const offsetFromDragPreview = {
        x: clientOffset.x - dragPreviewNodeOffsetFromClient.x,
        y: clientOffset.y - dragPreviewNodeOffsetFromClient.y
    };
    const { offsetWidth: sourceWidth , offsetHeight: sourceHeight  } = sourceNode;
    const { anchorX , anchorY  } = anchorPoint;
    const { dragPreviewWidth , dragPreviewHeight  } = getDragPreviewSize(isImage, dragPreview, sourceWidth, sourceHeight);
    const calculateYOffset = ()=>{
        const interpolantY = new MonotonicInterpolant([
            0,
            0.5,
            1
        ], [
            // Dock to the top
            offsetFromDragPreview.y,
            // Align at the center
            (offsetFromDragPreview.y / sourceHeight) * dragPreviewHeight,
            // Dock to the bottom
            offsetFromDragPreview.y + dragPreviewHeight - sourceHeight, 
        ]);
        let y = interpolantY.interpolate(anchorY);
        // Work around Safari 8 positioning bug
        if (isSafari() && isImage) {
            // We'll have to wait for @3x to see if this is entirely correct
            y += (window.devicePixelRatio - 1) * dragPreviewHeight;
        }
        return y;
    };
    const calculateXOffset = ()=>{
        // Interpolate coordinates depending on anchor point
        // If you know a simpler way to do this, let me know
        const interpolantX = new MonotonicInterpolant([
            0,
            0.5,
            1
        ], [
            // Dock to the left
            offsetFromDragPreview.x,
            // Align at the center
            (offsetFromDragPreview.x / sourceWidth) * dragPreviewWidth,
            // Dock to the right
            offsetFromDragPreview.x + dragPreviewWidth - sourceWidth, 
        ]);
        return interpolantX.interpolate(anchorX);
    };
    // Force offsets if specified in the options.
    const { offsetX , offsetY  } = offsetPoint;
    const isManualOffsetX = offsetX === 0 || offsetX;
    const isManualOffsetY = offsetY === 0 || offsetY;
    return {
        x: isManualOffsetX ? offsetX : calculateXOffset(),
        y: isManualOffsetY ? offsetY : calculateYOffset()
    };
}

class OptionsReader {
    get window() {
        if (this.globalContext) {
            return this.globalContext;
        } else if (typeof window !== 'undefined') {
            return window;
        }
        return undefined;
    }
    get document() {
        var ref;
        if ((ref = this.globalContext) === null || ref === void 0 ? void 0 : ref.document) {
            return this.globalContext.document;
        } else if (this.window) {
            return this.window.document;
        } else {
            return undefined;
        }
    }
    get rootElement() {
        var ref;
        return ((ref = this.optionsArgs) === null || ref === void 0 ? void 0 : ref.rootElement) || this.window;
    }
    constructor(globalContext, options){
        this.ownerDocument = null;
        this.globalContext = globalContext;
        this.optionsArgs = options;
    }
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable;
            }));
        }
        ownKeys.forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
    }
    return target;
}
class HTML5BackendImpl {
    /**
	 * Generate profiling statistics for the HTML5Backend.
	 */ profile() {
        var ref, ref1;
        return {
            sourcePreviewNodes: this.sourcePreviewNodes.size,
            sourcePreviewNodeOptions: this.sourcePreviewNodeOptions.size,
            sourceNodeOptions: this.sourceNodeOptions.size,
            sourceNodes: this.sourceNodes.size,
            dragStartSourceIds: ((ref = this.dragStartSourceIds) === null || ref === void 0 ? void 0 : ref.length) || 0,
            dropTargetIds: this.dropTargetIds.length,
            dragEnterTargetIds: this.dragEnterTargetIds.length,
            dragOverTargetIds: ((ref1 = this.dragOverTargetIds) === null || ref1 === void 0 ? void 0 : ref1.length) || 0
        };
    }
    // public for test
    get window() {
        return this.options.window;
    }
    get document() {
        return this.options.document;
    }
    /**
	 * Get the root element to use for event subscriptions
	 */ get rootElement() {
        return this.options.rootElement;
    }
    setup() {
        const root = this.rootElement;
        if (root === undefined) {
            return;
        }
        if (root.__isReactDndBackendSetUp) {
            throw new Error('Cannot have two HTML5 backends at the same time.');
        }
        root.__isReactDndBackendSetUp = true;
        this.addEventListeners(root);
    }
    teardown() {
        const root = this.rootElement;
        if (root === undefined) {
            return;
        }
        root.__isReactDndBackendSetUp = false;
        this.removeEventListeners(this.rootElement);
        this.clearCurrentDragSourceNode();
        if (this.asyncEndDragFrameId) {
            var ref;
            (ref = this.window) === null || ref === void 0 ? void 0 : ref.cancelAnimationFrame(this.asyncEndDragFrameId);
        }
    }
    connectDragPreview(sourceId, node, options) {
        this.sourcePreviewNodeOptions.set(sourceId, options);
        this.sourcePreviewNodes.set(sourceId, node);
        return ()=>{
            this.sourcePreviewNodes.delete(sourceId);
            this.sourcePreviewNodeOptions.delete(sourceId);
        };
    }
    connectDragSource(sourceId, node, options) {
        this.sourceNodes.set(sourceId, node);
        this.sourceNodeOptions.set(sourceId, options);
        const handleDragStart = (e)=>this.handleDragStart(e, sourceId)
        ;
        const handleSelectStart = (e)=>this.handleSelectStart(e)
        ;
        node.setAttribute('draggable', 'true');
        node.addEventListener('dragstart', handleDragStart);
        node.addEventListener('selectstart', handleSelectStart);
        return ()=>{
            this.sourceNodes.delete(sourceId);
            this.sourceNodeOptions.delete(sourceId);
            node.removeEventListener('dragstart', handleDragStart);
            node.removeEventListener('selectstart', handleSelectStart);
            node.setAttribute('draggable', 'false');
        };
    }
    connectDropTarget(targetId, node) {
        const handleDragEnter = (e)=>this.handleDragEnter(e, targetId)
        ;
        const handleDragOver = (e)=>this.handleDragOver(e, targetId)
        ;
        const handleDrop = (e)=>this.handleDrop(e, targetId)
        ;
        node.addEventListener('dragenter', handleDragEnter);
        node.addEventListener('dragover', handleDragOver);
        node.addEventListener('drop', handleDrop);
        return ()=>{
            node.removeEventListener('dragenter', handleDragEnter);
            node.removeEventListener('dragover', handleDragOver);
            node.removeEventListener('drop', handleDrop);
        };
    }
    addEventListeners(target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.addEventListener) {
            return;
        }
        target.addEventListener('dragstart', this.handleTopDragStart);
        target.addEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.addEventListener('dragend', this.handleTopDragEndCapture, true);
        target.addEventListener('dragenter', this.handleTopDragEnter);
        target.addEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.addEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.addEventListener('dragover', this.handleTopDragOver);
        target.addEventListener('dragover', this.handleTopDragOverCapture, true);
        target.addEventListener('drop', this.handleTopDrop);
        target.addEventListener('drop', this.handleTopDropCapture, true);
    }
    removeEventListeners(target) {
        // SSR Fix (https://github.com/react-dnd/react-dnd/pull/813
        if (!target.removeEventListener) {
            return;
        }
        target.removeEventListener('dragstart', this.handleTopDragStart);
        target.removeEventListener('dragstart', this.handleTopDragStartCapture, true);
        target.removeEventListener('dragend', this.handleTopDragEndCapture, true);
        target.removeEventListener('dragenter', this.handleTopDragEnter);
        target.removeEventListener('dragenter', this.handleTopDragEnterCapture, true);
        target.removeEventListener('dragleave', this.handleTopDragLeaveCapture, true);
        target.removeEventListener('dragover', this.handleTopDragOver);
        target.removeEventListener('dragover', this.handleTopDragOverCapture, true);
        target.removeEventListener('drop', this.handleTopDrop);
        target.removeEventListener('drop', this.handleTopDropCapture, true);
    }
    getCurrentSourceNodeOptions() {
        const sourceId = this.monitor.getSourceId();
        const sourceNodeOptions = this.sourceNodeOptions.get(sourceId);
        return _objectSpread({
            dropEffect: this.altKeyPressed ? 'copy' : 'move'
        }, sourceNodeOptions || {});
    }
    getCurrentDropEffect() {
        if (this.isDraggingNativeItem()) {
            // It makes more sense to default to 'copy' for native resources
            return 'copy';
        }
        return this.getCurrentSourceNodeOptions().dropEffect;
    }
    getCurrentSourcePreviewNodeOptions() {
        const sourceId = this.monitor.getSourceId();
        const sourcePreviewNodeOptions = this.sourcePreviewNodeOptions.get(sourceId);
        return _objectSpread({
            anchorX: 0.5,
            anchorY: 0.5,
            captureDraggingState: false
        }, sourcePreviewNodeOptions || {});
    }
    isDraggingNativeItem() {
        const itemType = this.monitor.getItemType();
        return Object.keys(NativeTypes).some((key)=>NativeTypes[key] === itemType
        );
    }
    beginDragNativeItem(type, dataTransfer) {
        this.clearCurrentDragSourceNode();
        this.currentNativeSource = createNativeDragSource(type, dataTransfer);
        this.currentNativeHandle = this.registry.addSource(type, this.currentNativeSource);
        this.actions.beginDrag([
            this.currentNativeHandle
        ]);
    }
    setCurrentDragSourceNode(node) {
        this.clearCurrentDragSourceNode();
        this.currentDragSourceNode = node;
        // A timeout of > 0 is necessary to resolve Firefox issue referenced
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        const MOUSE_MOVE_TIMEOUT = 1000;
        // Receiving a mouse event in the middle of a dragging operation
        // means it has ended and the drag source node disappeared from DOM,
        // so the browser didn't dispatch the dragend event.
        //
        // We need to wait before we start listening for mousemove events.
        // This is needed because the drag preview needs to be drawn or else it fires an 'mousemove' event
        // immediately in some browsers.
        //
        // See:
        //   * https://github.com/react-dnd/react-dnd/pull/928
        //   * https://github.com/react-dnd/react-dnd/issues/869
        //
        this.mouseMoveTimeoutTimer = setTimeout(()=>{
            var ref;
            return (ref = this.rootElement) === null || ref === void 0 ? void 0 : ref.addEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
        }, MOUSE_MOVE_TIMEOUT);
    }
    clearCurrentDragSourceNode() {
        if (this.currentDragSourceNode) {
            this.currentDragSourceNode = null;
            if (this.rootElement) {
                var ref;
                (ref = this.window) === null || ref === void 0 ? void 0 : ref.clearTimeout(this.mouseMoveTimeoutTimer || undefined);
                this.rootElement.removeEventListener('mousemove', this.endDragIfSourceWasRemovedFromDOM, true);
            }
            this.mouseMoveTimeoutTimer = null;
            return true;
        }
        return false;
    }
    handleDragStart(e, sourceId) {
        if (e.defaultPrevented) {
            return;
        }
        if (!this.dragStartSourceIds) {
            this.dragStartSourceIds = [];
        }
        this.dragStartSourceIds.unshift(sourceId);
    }
    handleDragEnter(_e, targetId) {
        this.dragEnterTargetIds.unshift(targetId);
    }
    handleDragOver(_e, targetId) {
        if (this.dragOverTargetIds === null) {
            this.dragOverTargetIds = [];
        }
        this.dragOverTargetIds.unshift(targetId);
    }
    handleDrop(_e, targetId) {
        this.dropTargetIds.unshift(targetId);
    }
    constructor(manager, globalContext, options){
        this.sourcePreviewNodes = new Map();
        this.sourcePreviewNodeOptions = new Map();
        this.sourceNodes = new Map();
        this.sourceNodeOptions = new Map();
        this.dragStartSourceIds = null;
        this.dropTargetIds = [];
        this.dragEnterTargetIds = [];
        this.currentNativeSource = null;
        this.currentNativeHandle = null;
        this.currentDragSourceNode = null;
        this.altKeyPressed = false;
        this.mouseMoveTimeoutTimer = null;
        this.asyncEndDragFrameId = null;
        this.dragOverTargetIds = null;
        this.lastClientOffset = null;
        this.hoverRafId = null;
        this.getSourceClientOffset = (sourceId)=>{
            const source = this.sourceNodes.get(sourceId);
            return source && getNodeClientOffset(source) || null;
        };
        this.endDragNativeItem = ()=>{
            if (!this.isDraggingNativeItem()) {
                return;
            }
            this.actions.endDrag();
            if (this.currentNativeHandle) {
                this.registry.removeSource(this.currentNativeHandle);
            }
            this.currentNativeHandle = null;
            this.currentNativeSource = null;
        };
        this.isNodeInDocument = (node)=>{
            // Check the node either in the main document or in the current context
            return Boolean(node && this.document && this.document.body && this.document.body.contains(node));
        };
        this.endDragIfSourceWasRemovedFromDOM = ()=>{
            const node = this.currentDragSourceNode;
            if (node == null || this.isNodeInDocument(node)) {
                return;
            }
            if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.scheduleHover = (dragOverTargetIds)=>{
            if (this.hoverRafId === null && typeof requestAnimationFrame !== 'undefined') {
                this.hoverRafId = requestAnimationFrame(()=>{
                    if (this.monitor.isDragging()) {
                        this.actions.hover(dragOverTargetIds || [], {
                            clientOffset: this.lastClientOffset
                        });
                    }
                    this.hoverRafId = null;
                });
            }
        };
        this.cancelHover = ()=>{
            if (this.hoverRafId !== null && typeof cancelAnimationFrame !== 'undefined') {
                cancelAnimationFrame(this.hoverRafId);
                this.hoverRafId = null;
            }
        };
        this.handleTopDragStartCapture = ()=>{
            this.clearCurrentDragSourceNode();
            this.dragStartSourceIds = [];
        };
        this.handleTopDragStart = (e)=>{
            if (e.defaultPrevented) {
                return;
            }
            const { dragStartSourceIds  } = this;
            this.dragStartSourceIds = null;
            const clientOffset = getEventClientOffset(e);
            // Avoid crashing if we missed a drop event or our previous drag died
            if (this.monitor.isDragging()) {
                this.actions.endDrag();
                this.cancelHover();
            }
            // Don't publish the source just yet (see why below)
            this.actions.beginDrag(dragStartSourceIds || [], {
                publishSource: false,
                getSourceClientOffset: this.getSourceClientOffset,
                clientOffset
            });
            const { dataTransfer  } = e;
            const nativeType = matchNativeItemType(dataTransfer);
            if (this.monitor.isDragging()) {
                if (dataTransfer && typeof dataTransfer.setDragImage === 'function') {
                    // Use custom drag image if user specifies it.
                    // If child drag source refuses drag but parent agrees,
                    // use parent's node as drag image. Neither works in IE though.
                    const sourceId = this.monitor.getSourceId();
                    const sourceNode = this.sourceNodes.get(sourceId);
                    const dragPreview = this.sourcePreviewNodes.get(sourceId) || sourceNode;
                    if (dragPreview) {
                        const { anchorX , anchorY , offsetX , offsetY  } = this.getCurrentSourcePreviewNodeOptions();
                        const anchorPoint = {
                            anchorX,
                            anchorY
                        };
                        const offsetPoint = {
                            offsetX,
                            offsetY
                        };
                        const dragPreviewOffset = getDragPreviewOffset(sourceNode, dragPreview, clientOffset, anchorPoint, offsetPoint);
                        dataTransfer.setDragImage(dragPreview, dragPreviewOffset.x, dragPreviewOffset.y);
                    }
                }
                try {
                    // Firefox won't drag without setting data
                    dataTransfer === null || dataTransfer === void 0 ? void 0 : dataTransfer.setData('application/json', {});
                } catch (err) {
                // IE doesn't support MIME types in setData
                }
                // Store drag source node so we can check whether
                // it is removed from DOM and trigger endDrag manually.
                this.setCurrentDragSourceNode(e.target);
                // Now we are ready to publish the drag source.. or are we not?
                const { captureDraggingState  } = this.getCurrentSourcePreviewNodeOptions();
                if (!captureDraggingState) {
                    // Usually we want to publish it in the next tick so that browser
                    // is able to screenshot the current (not yet dragging) state.
                    //
                    // It also neatly avoids a situation where render() returns null
                    // in the same tick for the source element, and browser freaks out.
                    setTimeout(()=>this.actions.publishDragSource()
                    , 0);
                } else {
                    // In some cases the user may want to override this behavior, e.g.
                    // to work around IE not supporting custom drag previews.
                    //
                    // When using a custom drag layer, the only way to prevent
                    // the default drag preview from drawing in IE is to screenshot
                    // the dragging state in which the node itself has zero opacity
                    // and height. In this case, though, returning null from render()
                    // will abruptly end the dragging, which is not obvious.
                    //
                    // This is the reason such behavior is strictly opt-in.
                    this.actions.publishDragSource();
                }
            } else if (nativeType) {
                // A native item (such as URL) dragged from inside the document
                this.beginDragNativeItem(nativeType);
            } else if (dataTransfer && !dataTransfer.types && (e.target && !e.target.hasAttribute || !e.target.hasAttribute('draggable'))) {
                // Looks like a Safari bug: dataTransfer.types is null, but there was no draggable.
                // Just let it drag. It's a native type (URL or text) and will be picked up in
                // dragenter handler.
                return;
            } else {
                // If by this time no drag source reacted, tell browser not to drag.
                e.preventDefault();
            }
        };
        this.handleTopDragEndCapture = ()=>{
            if (this.clearCurrentDragSourceNode() && this.monitor.isDragging()) {
                // Firefox can dispatch this event in an infinite loop
                // if dragend handler does something like showing an alert.
                // Only proceed if we have not handled it already.
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.handleTopDragEnterCapture = (e)=>{
            this.dragEnterTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
            const isFirstEnter = this.enterLeaveCounter.enter(e.target);
            if (!isFirstEnter || this.monitor.isDragging()) {
                return;
            }
            const { dataTransfer  } = e;
            const nativeType = matchNativeItemType(dataTransfer);
            if (nativeType) {
                // A native item (such as file or URL) dragged from outside the document
                this.beginDragNativeItem(nativeType, dataTransfer);
            }
        };
        this.handleTopDragEnter = (e)=>{
            const { dragEnterTargetIds  } = this;
            this.dragEnterTargetIds = [];
            if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                return;
            }
            this.altKeyPressed = e.altKey;
            // If the target changes position as the result of `dragenter`, `dragover` might still
            // get dispatched despite target being no longer there. The easy solution is to check
            // whether there actually is a target before firing `hover`.
            if (dragEnterTargetIds.length > 0) {
                this.actions.hover(dragEnterTargetIds, {
                    clientOffset: getEventClientOffset(e)
                });
            }
            const canDrop = dragEnterTargetIds.some((targetId)=>this.monitor.canDropOnTarget(targetId)
            );
            if (canDrop) {
                // IE requires this to fire dragover events
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
            }
        };
        this.handleTopDragOverCapture = (e)=>{
            this.dragOverTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            }
        };
        this.handleTopDragOver = (e)=>{
            const { dragOverTargetIds  } = this;
            this.dragOverTargetIds = [];
            if (!this.monitor.isDragging()) {
                // This is probably a native item type we don't understand.
                // Prevent default "drop and blow away the whole document" action.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
                return;
            }
            this.altKeyPressed = e.altKey;
            this.lastClientOffset = getEventClientOffset(e);
            this.scheduleHover(dragOverTargetIds);
            const canDrop = (dragOverTargetIds || []).some((targetId)=>this.monitor.canDropOnTarget(targetId)
            );
            if (canDrop) {
                // Show user-specified drop effect.
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = this.getCurrentDropEffect();
                }
            } else if (this.isDraggingNativeItem()) {
                // Don't show a nice cursor but still prevent default
                // "drop and blow away the whole document" action.
                e.preventDefault();
            } else {
                e.preventDefault();
                if (e.dataTransfer) {
                    e.dataTransfer.dropEffect = 'none';
                }
            }
        };
        this.handleTopDragLeaveCapture = (e)=>{
            if (this.isDraggingNativeItem()) {
                e.preventDefault();
            }
            const isLastLeave = this.enterLeaveCounter.leave(e.target);
            if (!isLastLeave) {
                return;
            }
            if (this.isDraggingNativeItem()) {
                setTimeout(()=>this.endDragNativeItem()
                , 0);
            }
            this.cancelHover();
        };
        this.handleTopDropCapture = (e)=>{
            this.dropTargetIds = [];
            if (this.isDraggingNativeItem()) {
                var ref;
                e.preventDefault();
                (ref = this.currentNativeSource) === null || ref === void 0 ? void 0 : ref.loadDataTransfer(e.dataTransfer);
            } else if (matchNativeItemType(e.dataTransfer)) {
                // Dragging some elements, like <a> and <img> may still behave like a native drag event,
                // even if the current drag event matches a user-defined type.
                // Stop the default behavior when we're not expecting a native item to be dropped.
                e.preventDefault();
            }
            this.enterLeaveCounter.reset();
        };
        this.handleTopDrop = (e)=>{
            const { dropTargetIds  } = this;
            this.dropTargetIds = [];
            this.actions.hover(dropTargetIds, {
                clientOffset: getEventClientOffset(e)
            });
            this.actions.drop({
                dropEffect: this.getCurrentDropEffect()
            });
            if (this.isDraggingNativeItem()) {
                this.endDragNativeItem();
            } else if (this.monitor.isDragging()) {
                this.actions.endDrag();
            }
            this.cancelHover();
        };
        this.handleSelectStart = (e)=>{
            const target = e.target;
            // Only IE requires us to explicitly say
            // we want drag drop operation to start
            if (typeof target.dragDrop !== 'function') {
                return;
            }
            // Inputs and textareas should be selectable
            if (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable) {
                return;
            }
            // For other targets, ask IE
            // to enable drag and drop
            e.preventDefault();
            target.dragDrop();
        };
        this.options = new OptionsReader(globalContext, options);
        this.actions = manager.getActions();
        this.monitor = manager.getMonitor();
        this.registry = manager.getRegistry();
        this.enterLeaveCounter = new EnterLeaveCounter(this.isNodeInDocument);
    }
}

const HTML5Backend = function createBackend(manager, context, options) {
    return new HTML5BackendImpl(manager, context, options);
};

/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */

//

function flexRender(Comp, props) {
  return !Comp ? null : isReactComponent(Comp) ? /*#__PURE__*/reactExports.createElement(Comp, props) : Comp;
}
function isReactComponent(component) {
  return isClassComponent(component) || typeof component === 'function' || isExoticComponent(component);
}
function isClassComponent(component) {
  return typeof component === 'function' && (() => {
    const proto = Object.getPrototypeOf(component);
    return proto.prototype && proto.prototype.isReactComponent;
  })();
}
function isExoticComponent(component) {
  return typeof component === 'object' && typeof component.$$typeof === 'symbol' && ['react.memo', 'react.forward_ref'].includes(component.$$typeof.description);
}

function TableCell({ cell, cellProps, row, }) {
    var _a, _b;
    // For cells with repeated values, render null
    // Otherwise, just render the regular cell
    let cellRender = flexRender(cell.column.columnDef.cell, cell.getContext());
    if (cell.getIsGrouped()) {
        // If it's a grouped cell, add an expander and row count
        cellRender = (React.createElement("button", Object.assign({ type: "button" }, {
            onClick: row.getToggleExpandedHandler(),
            style: {
                cursor: row.getCanExpand() ? "pointer" : "normal",
            },
        }),
            flexRender(cell.column.columnDef.cell, cell.getContext()),
            "\u00A0 (",
            row.subRows.length,
            ")"));
    }
    if (cell.getIsAggregated()) {
        // If the cell is aggregated, use the Aggregated
        // renderer for cell
        cellRender = flexRender((_a = cell.column.columnDef.aggregatedCell) !== null && _a !== void 0 ? _a : cell.column.columnDef.cell, cell.getContext());
    }
    return (React.createElement("td", Object.assign({}, Object.assign({ style: {
            width: cell.column.getSize(),
            maxWidth: cell.column.getSize(),
            wordWrap: "break-word",
            color: "#444",
        } }, ((_b = cellProps === null || cellProps === void 0 ? void 0 : cellProps(cell, row)) !== null && _b !== void 0 ? _b : {}))), cellRender));
}

function TableRow({ cellProps, row, rowProps, }) {
    var _a;
    return (React.createElement("tr", Object.assign({}, ((_a = rowProps === null || rowProps === void 0 ? void 0 : rowProps(row)) !== null && _a !== void 0 ? _a : {})), row.getVisibleCells().map(cell => (React.createElement(TableCell, { key: `${cell.id}_tableCell`, cell: cell, cellProps: cellProps, row: row })))));
}

function TableBody({ cellProps, rowProps, table, }) {
    var _a;
    const rowModel = table.getRowModel();
    if (!((_a = rowModel === null || rowModel === void 0 ? void 0 : rowModel.rows) === null || _a === void 0 ? void 0 : _a.length)) {
        return React.createElement("tbody", null);
    }
    return (React.createElement("tbody", null, table.getRowModel().rows.map(row => (React.createElement(TableRow, { key: `${row.id}_tableRow`, cellProps: cellProps, row: row, rowProps: rowProps })))));
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function DebouncedInput(_a) {
    var { debounce = 500, onChange, value: initialValue } = _a, props = __rest(_a, ["debounce", "onChange", "value"]);
    const [value, setValue] = reactExports.useState(initialValue);
    reactExports.useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);
    reactExports.useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value);
        }, debounce);
        return () => clearTimeout(timeout);
    }, [value]);
    return (React.createElement("input", Object.assign({}, props, { value: value, onChange: e => setValue(e.target.value) })));
}

function Filter({ column, }) {
    const columnFilterValue = column.getFilterValue();
    if (!column.getCanFilter()) {
        return null;
    }
    return (React.createElement(DebouncedInput, { type: "text", value: columnFilterValue !== null && columnFilterValue !== void 0 ? columnFilterValue : "", onChange: value => column.setFilterValue(value), className: "form-control", style: {
            display: "block",
            width: "100%",
        }, list: `${column.id}_list` }));
}

function GroupedHeader({ filtering, grouping, header, }) {
    const { column } = header;
    return (React.createElement(React.Fragment, null,
        filtering && React.createElement(Filter, { column: column }),
        grouping && column.getCanGroup() ? (React.createElement("span", { className: "input-group-btn" },
            React.createElement("button", Object.assign({ type: "button" }, {
                className: "btn btn-default",
                onClick: column.getToggleGroupingHandler(),
                style: {
                    cursor: "pointer",
                },
            }), column.getIsGrouped() ? (React.createElement("span", { className: "glyphicon glyphicon-remove-sign", "aria-hidden": "true" })) : (React.createElement("span", { className: "glyphicon glyphicon-duplicate", "aria-hidden": "true" }))))) : null));
}

function FilteredHeader({ filtering, grouping, header, }) {
    return grouping && header.column.getCanGroup() ? (React.createElement("div", { className: "input-group" },
        React.createElement(GroupedHeader, { filtering: filtering, grouping: grouping, header: header }))) : (React.createElement(GroupedHeader, { filtering: filtering, grouping: grouping, header: header }));
}

function FilteredHeaderCell({ filtering, grouping, header, }) {
    return (React.createElement("th", Object.assign({}, {
        colSpan: header.colSpan,
        style: {
            width: header.getSize(),
            maxWidth: header.getSize(),
            wordWrap: "break-word",
            position: "relative",
        },
    }), header.column.getCanFilter() ? (React.createElement(FilteredHeader, { filtering: filtering, grouping: grouping, header: header })) : null));
}

function FilteredHeaderRow({ filtering, grouping, headerGroup, }) {
    return (React.createElement("tr", { key: `${headerGroup.id}_filter` }, headerGroup.headers.map((header) => (React.createElement(FilteredHeaderCell, { filtering: filtering, grouping: grouping, header: header, key: `${header.id}_filterCell` })))));
}

function Unpin({ header }) {
    return (React.createElement("button", { className: "btn btn-link btn-xs", onClick: e => {
            e.stopPropagation();
            header.column.pin(false);
        } },
        React.createElement("span", { style: {
                color: "#337ab7",
            }, className: "glyphicon glyphicon-pushpin", "aria-hidden": "true" })));
}

const reorderColumn = (draggedColumnId, targetColumnId, columnOrder) => {
    columnOrder.splice(columnOrder.indexOf(targetColumnId), 0, columnOrder.splice(columnOrder.indexOf(draggedColumnId), 1)[0]);
    return [...columnOrder];
};
function HeaderTools({ children, header, pinning, table, }) {
    const { getState, setColumnOrder } = table;
    const { columnOrder } = getState();
    const { column } = header;
    const [, dropRef] = useDrop({
        accept: "column",
        drop: (draggedColumn) => {
            const newColumnOrder = reorderColumn(draggedColumn.id, column.id, columnOrder);
            setColumnOrder(newColumnOrder);
        },
    });
    const [{ isDragging }, dragRef, previewRef] = useDrag({
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
        item: () => column,
        type: "column",
    });
    const renderPin = (column, header, position) => {
        if (!pinning)
            return null;
        return column.getIsPinned() !== position ? (React.createElement("button", { className: "btn btn-link btn-xs", style: {
                color: "#ddd",
            }, onClick: e => {
                e.stopPropagation();
                column.pin(position);
            } },
            React.createElement("span", { className: `glyphicon glyphicon-chevron-${position}`, "aria-hidden": "true" }))) : (React.createElement(Unpin, { header: header }));
    };
    return (React.createElement("div", { ref: dragRef },
        React.createElement("div", { ref: dropRef, style: { opacity: isDragging ? 0.5 : 1, width: "100%" }, key: `${header.id} _headerCellPin` },
            React.createElement("div", { style: {
                    display: "flex",
                    justifyContent: "space-between",
                    overflow: "hidden",
                }, ref: previewRef }, !header.isPlaceholder && column.getCanPin() && (React.createElement(React.Fragment, null,
                renderPin(column, header, "left"),
                children,
                renderPin(column, header, "right")))))));
}

function HeaderCell({ header, pinning, sorting, table, }) {
    const className = sorting ? `${header.column.getIsSorted()} sortable` : "";
    return (React.createElement("th", Object.assign({}, {
        colSpan: header.colSpan,
        className: sorting && header.column.getCanSort() ? className : undefined,
        style: {
            width: header.getSize(),
            maxWidth: header.getSize(),
            wordWrap: "break-word",
            position: "relative",
        },
        onClick: sorting && header.column.getCanSort()
            ? header.column.getToggleSortingHandler()
            : undefined,
    }),
        React.createElement(HeaderTools, { header: header, key: `${header.id}_headerTools`, pinning: pinning, table: table }, header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())),
        React.createElement("div", Object.assign({}, {
            onClick: e => e.stopPropagation(),
            onMouseDown: header.getResizeHandler(),
            onTouchStart: header.getResizeHandler(),
            className: `resizer ${header.column.getIsResizing() ? "isResizing" : ""}`,
        }))));
}

function HeaderRow({ headerGroup, pinning, sorting, table, }) {
    return (React.createElement("tr", null, headerGroup.headers.map((header) => (React.createElement(HeaderCell, { header: header, key: `${header.id}_headerCell`, pinning: pinning, sorting: sorting, table: table })))));
}

function HeaderGroup({ filtering, grouping, headerGroup, pinning, sorting, table, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(HeaderRow, { headerGroup: headerGroup, pinning: pinning, sorting: sorting, table: table }),
        (filtering || grouping) && (React.createElement(FilteredHeaderRow, { filtering: filtering, grouping: grouping, headerGroup: headerGroup }))));
}

function TableHead({ filtering, grouping, pinning, sorting, table, }) {
    return (React.createElement("thead", null, table.getHeaderGroups().map(headerGroup => (React.createElement(HeaderGroup, { filtering: filtering, grouping: grouping, headerGroup: headerGroup, key: headerGroup.id, pinning: pinning, sorting: sorting, table: table })))));
}

function TableComponent({ cellProps, filtering, grouping, pinning, rowProps, sorting, table, tableProps, }) {
    var _a;
    return (React.createElement(DndProvider, { backend: HTML5Backend },
        React.createElement("table", Object.assign({}, Object.assign({ className: "react-table-bs3 table table-condensed table-bordered" }, ((_a = tableProps === null || tableProps === void 0 ? void 0 : tableProps(table)) !== null && _a !== void 0 ? _a : {}))),
            React.createElement(TableHead, { filtering: filtering, grouping: grouping, pinning: pinning, sorting: sorting, table: table }),
            React.createElement(TableBody, { table: table, cellProps: cellProps, rowProps: rowProps }))));
}

function DataTableView({ cellProps, filtering, grouping, loading, loadingOffset, pinning, rowProps, sorting, table, tableProps, viewRef, }) {
    return (React.createElement("div", { ref: viewRef, style: {
            overflowX: loading ? "hidden" : "auto",
            position: "relative",
        } },
        React.createElement(LoadingScreen, { loading: loading, loadingOffset: loadingOffset }),
        React.createElement(TableComponent, { cellProps: cellProps, filtering: filtering, grouping: grouping, pinning: pinning, rowProps: rowProps, sorting: sorting, table: table, tableProps: tableProps })));
}

function GroupingButton({ row, }) {
    return (React.createElement("button", Object.assign({ type: "button" }, {
        onClick: row.getToggleExpandedHandler(),
        className: "btn btn-default",
        style: { cursor: "pointer" },
    }), row.getIsExpanded() ? (React.createElement("span", { className: "glyphicon glyphicon-remove-sign", "aria-hidden": "true" })) : (React.createElement("span", { className: "glyphicon glyphicon-duplicate", "aria-hidden": "true" }))));
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".react-table-bs3 {\n    table-layout: fixed;\n    width: 100%;\n}\n\n.react-table-bs3 tr {\n    width: -moz-fit-content;\n    width: fit-content;\n}\n\n.react-table-bs3 > thead > th,\n.react-table-bs3 > tbody > td {\n    border-collapse: collapse;\n    padding: 0.25rem;\n}\n\n.react-table-bs3 > thead > th {\n    border-collapse: collapse;\n    padding: 2px 4px;\n    font-weight: bold;\n    text-align: center;\n    height: 30px;\n    width: 100px;\n    white-space: nowrap;\n}\n\n.react-table-bs3 td {\n    height: 30px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.resizer {\n    position: absolute;\n    top: 0;\n    right: 0; /* Set right to 0 to position the resizing handle inside the table */\n    bottom: 0;\n    width: 5px;\n    cursor: col-resize;\n    z-index: 1;\n    background-color: transparent;\n}\n\n.resizer.isResizing {\n    background: linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgba(217, 255, 0, 0.8) 100%);\n    opacity: 1;\n}\n\n@media (hover: hover) {\n    .resizer {\n        opacity: 0;\n    }\n\n    *:hover>.resizer {\n        opacity: 1;\n    }\n}\n\n.loading {\n    z-index: 2000;\n    position: absolute;\n    display: flex;\n    visibility: hidden;\n    width: 100%;\n    height: 100%;\n    top: 0px;\n    left: 0px;\n    min-height: 500px;\n    align-items: center;\n    justify-content: center;\n    font-size: 2em;\n    color: rgb(255, 255, 255);\n}\n.loading.progress {\n    visibility: visible;\n    text-shadow: rgba(0, 0, 0, 0.3) 1px 1px;\n    background: rgba(0, 0, 0, 0.75);\n    border-radius: 5px;\n    transition: all .4s;\n}\n\n.one {\n    opacity: 0;\n    -webkit-animation: dot 1.3s infinite;\n    -webkit-animation-delay: 0.0s;\n    animation: dot 1.3s infinite;\n    animation-delay: 0.0s;\n}\n\n.two {\n    opacity: 0;\n    -webkit-animation: dot 1.3s infinite;\n    -webkit-animation-delay: 0.2s;\n    animation: dot 1.3s infinite;\n    animation-delay: 0.2s;\n}\n\n.three {\n    opacity: 0;\n    -webkit-animation: dot 1.3s infinite;\n    -webkit-animation-delay: 0.3s;\n    animation: dot 1.3s infinite;\n    animation-delay: 0.3s;\n}\n\n@keyframes dot {\n    0% {\n        opacity: 0;\n    }\n\n    50% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity: 1;\n    }\n}\n\n.sortable {\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\n\nth.desc {\n    box-shadow: inset 0 -3px 0 0 rgb(0,0,0,0.6);\n}\n\nth.asc {\n    box-shadow: inset 0 3px 0 0 rgb(0,0,0,0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx1QkFBa0I7SUFBbEIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVEsRUFBRSxvRUFBb0U7SUFDOUUsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLHVGQUF1RjtJQUN2RixVQUFVO0FBQ2Q7O0FBRUE7SUFDSTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osUUFBUTtJQUNSLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsdUNBQXFDO0lBQ3JDLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFVBQVU7SUFDVixvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxVQUFVO0lBQ2Q7QUFDSjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBaUI7T0FBakIsc0JBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLDBDQUEwQztBQUM5QyIsImZpbGUiOiJpbmRleC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhY3QtdGFibGUtYnMzIHtcbiAgICB0YWJsZS1sYXlvdXQ6IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ucmVhY3QtdGFibGUtYnMzIHRyIHtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG59XG5cbi5yZWFjdC10YWJsZS1iczMgPiB0aGVhZCA+IHRoLFxuLnJlYWN0LXRhYmxlLWJzMyA+IHRib2R5ID4gdGQge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzogMC4yNXJlbTtcbn1cblxuLnJlYWN0LXRhYmxlLWJzMyA+IHRoZWFkID4gdGgge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgcGFkZGluZzogMnB4IDRweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucmVhY3QtdGFibGUtYnMzIHRkIHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4ucmVzaXplciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDsgLyogU2V0IHJpZ2h0IHRvIDAgdG8gcG9zaXRpb24gdGhlIHJlc2l6aW5nIGhhbmRsZSBpbnNpZGUgdGhlIHRhYmxlICovXG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiA1cHg7XG4gICAgY3Vyc29yOiBjb2wtcmVzaXplO1xuICAgIHotaW5kZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5yZXNpemVyLmlzUmVzaXppbmcge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwKSAwJSwgcmdiYSgyMTcsIDI1NSwgMCwgMC44KSAxMDAlKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5AbWVkaWEgKGhvdmVyOiBob3Zlcikge1xuICAgIC5yZXNpemVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICAqOmhvdmVyPi5yZXNpemVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbi5sb2FkaW5nIHtcbiAgICB6LWluZGV4OiAyMDAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbn1cbi5sb2FkaW5nLnByb2dyZXNzIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIHRleHQtc2hhZG93OiByZ2IoMCAwIDAgLyAzMCUpIDFweCAxcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIC40cztcbn1cblxuLm9uZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZG90IDEuM3MgaW5maW5pdGU7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMHM7XG4gICAgYW5pbWF0aW9uOiBkb3QgMS4zcyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuMHM7XG59XG5cbi50d28ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRvdCAxLjNzIGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgIGFuaW1hdGlvbjogZG90IDEuM3MgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xufVxuXG4udGhyZWUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRvdCAxLjNzIGluZmluaXRlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgIGFuaW1hdGlvbjogZG90IDEuM3MgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG5Aa2V5ZnJhbWVzIGRvdCB7XG4gICAgMCUge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cblxuICAgIDUwJSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgMTAwJSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufVxuXG4uc29ydGFibGUge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxudGguZGVzYyB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAtM3B4IDAgMCByZ2IoMCwwLDAsMC42KTtcbn1cblxudGguYXNjIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCAwIDAgcmdiKDAsMCwwLDAuNik7XG59Il19 */";
styleInject(css_248z);

function BootstrapTable({ cellProps, filtering = true, grouping = true, loading, loadingOffset, pinning = true, requestedPage, rowProps, setRequestedPage, sorting = true, table, tableProps, viewRef, }) {
    return table ? (React.createElement(React.Fragment, null,
        React.createElement(DataTableView, { cellProps: cellProps, filtering: filtering, grouping: grouping, loading: loading, loadingOffset: loadingOffset, pinning: pinning, rowProps: rowProps, sorting: sorting, table: table, tableProps: tableProps, viewRef: viewRef }),
        React.createElement(DataFooter, { loading: loading, requestedPage: requestedPage, setRequestedPage: setRequestedPage, table: table }))) : null;
}

export { BootstrapTable, GroupingButton, tableFilter, valueFilter };
//# sourceMappingURL=index.esm.js.map
