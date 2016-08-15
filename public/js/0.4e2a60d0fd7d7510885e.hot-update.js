webpackHotUpdate(0,{

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(3), RootInstanceProvider = __webpack_require__(11), ReactMount = __webpack_require__(13), React = __webpack_require__(82); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {\n\n'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(82);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactGoogleMaps = __webpack_require__(392);\n\nvar _InfoBox = __webpack_require__(437);\n\nvar _InfoBox2 = _interopRequireDefault(_InfoBox);\n\nvar _reactModal = __webpack_require__(441);\n\nvar _reactModal2 = _interopRequireDefault(_reactModal);\n\nvar _redux = __webpack_require__(187);\n\nvar _reactRedux = __webpack_require__(201);\n\nvar _base_component = __webpack_require__(376);\n\nvar _base_component2 = _interopRequireDefault(_base_component);\n\nvar _google_maps_modal_component = __webpack_require__(459);\n\nvar _google_maps_modal_component2 = _interopRequireDefault(_google_maps_modal_component);\n\nvar _google_map_styles = __webpack_require__(461);\n\nvar _google_map_styles2 = _interopRequireDefault(_google_map_styles);\n\nvar _index = __webpack_require__(284);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// Code for potential inclusion at later date:\nvar geolocation = function () {\n  // canUseDOM && navigator.geolocation || {\n  //   getCurrentPosition: (success, failure) => {\n  //     failure(`Your browser doesn't support geolocation.`);\n  //   },\n  // }\n  if (navigator.geolocation) {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      var pos = {\n        lat: position.coords.latitude,\n        lng: position.coords.longitude\n      };\n      // console.log(`Location found: ${pos.lat} ${pos.lng}`);\n      // console.log(`Google Maps LatLng: ${new google.maps.LatLng(pos.lat, pos.lng)}`);\n      return new google.maps.LatLng(pos.lat, pos.lng);\n    });\n    // console.log(`Your browser doesn't support geolocation.`);\n    return new google.maps.LatLng(37.745951, -122.439421);\n  }\n}();\n\nvar GMap = function (_BaseComponent) {\n  _inherits(GMap, _BaseComponent);\n\n  function GMap(props) {\n    _classCallCheck(this, GMap);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GMap).call(this, props));\n\n    _this.state = {\n      defaultCenter: new google.maps.LatLng(37.745951, -122.439421),\n      geoPos: null,\n      zoomLevel: 10\n    };\n\n    _this.modalNo = _this.modalNo.bind(_this);\n    _this.addTimeDelayedMarker = _this.addTimeDelayedMarker.bind(_this);\n    _this.markerCallbackHandler = _this.markerCallbackHandler.bind(_this);\n    return _this;\n  }\n\n  _createClass(GMap, [{\n    key: 'centerMap',\n    value: function centerMap() {\n      // console.log(`First map marker coordinates: ${this.props.markers[0].coords}`);\n      return this.props.markers.length ? this.props.markers[0].coords : this.state.defaultCenter;\n    }\n  }, {\n    key: 'centerZoomOverUSA',\n    value: function centerZoomOverUSA() {\n      this.setState({ zoomLevel: 5 });\n    }\n\n    // Toggle to 'true' to show InfoWindow and re-render component\n\n  }, {\n    key: 'handleMarkerClick',\n    value: function handleMarkerClick(targetMarker) {\n      this.closeAllMarkers();\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return marker === targetMarker ? Object.assign(marker, { showInfo: true }) : marker;\n        })\n      });\n    }\n  }, {\n    key: 'handleMarkerClose',\n    value: function handleMarkerClose(targetMarker) {\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return marker === targetMarker ? { marker: marker, showInfo: false } : marker;\n        })\n      });\n    }\n  }, {\n    key: 'closeAllMarkers',\n    value: function closeAllMarkers() {\n      this.setState({\n        markers: this.props.markers.map(function (marker) {\n          return Object.assign(marker, { showInfo: false });\n        })\n      });\n    }\n  }, {\n    key: 'renderInfoWindow',\n    value: function renderInfoWindow(ref, marker) {\n      var onCloseclick = this.handleMarkerClose.bind(this, marker);\n      console.log('Marker Keys: ' + Object.getOwnPropertyNames(marker));\n      console.log('Job Name: ' + marker.jobTitle);\n\n      return _react2.default.createElement(\n        _reactGoogleMaps.InfoWindow,\n        {\n          key: ref + '_info_window',\n          onCloseclick: onCloseclick },\n        _react2.default.createElement(\n          'div',\n          null,\n          _react2.default.createElement(\n            'h4',\n            { className: 'infoWindow_Header' },\n            this.parseAndFormatJobTitle(marker.jobTitle)\n          ),\n          _react2.default.createElement(\n            'h5',\n            { className: 'infoWindow_Header' },\n            marker.company\n          ),\n          _react2.default.createElement('hr', null),\n          _react2.default.createElement(\n            'p',\n            null,\n            marker.formattedLocation\n          )\n        )\n      );\n    }\n\n    // Class methods for control of the Google Maps Modal visibility:\n\n  }, {\n    key: 'modalYes',\n    value: function modalYes() {\n      return this.props.toggleModal();\n    }\n  }, {\n    key: 'modalNo',\n    value: function modalNo() {\n      return this.props.toggleModalOff();\n    }\n  }, {\n    key: 'addTimeDelayedMarker',\n    value: function addTimeDelayedMarker(marker, index) {\n      var _this2 = this;\n\n      var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',\n          MAX_ZINDEX = 1000,\n          onClick = function onClick() {\n        return _this2.handleMarkerClick(marker);\n      };\n\n      return _react2.default.createElement(\n        _reactGoogleMaps.Marker,\n        {\n          key: index,\n          ref: 'marker_' + index,\n          'data-jobTitle': marker.jobTitle,\n          'data-formattedLocation': marker.formattedLocation,\n          position: new google.maps.LatLng(marker.coords),\n          animation: google.maps.Animation.DROP,\n          title: marker.company,\n          icon: \"https://goo.gl/photos/yuzDW3zzwEt7VdFM6\",\n          opacity: 0.90,\n          zIndex: MAX_ZINDEX\n          //label={{ \"text\": `${ALPHABET[index++]}`, \"fontWeight\": \"bold\" }}\n          , showInfo: false,\n          onClick: onClick },\n        marker.showInfo ? this.renderInfoWindow(index, marker) : null\n      );\n    }\n  }, {\n    key: 'markerCallbackHandler',\n    value: function markerCallbackHandler() {\n      var _this3 = this;\n\n      return this.props.markers.map(function (marker, index) {\n        return _this3.addTimeDelayedMarker(marker, index);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this4 = this;\n\n      return _react2.default.createElement(_reactGoogleMaps.GoogleMapLoader, {\n        containerElement: _react2.default.createElement('div', {\n          id: 'mapsContainer',\n          onDoubleClick: function onDoubleClick() {\n            return _this4.modalYes();\n          } }),\n        googleMapElement: _react2.default.createElement(\n          _reactGoogleMaps.GoogleMap\n          // defaultCenter={this.state.defaultCenter}\n          ,\n          { center: this.centerMap(),\n            defaultCenter: this.state.defaultCenter,\n            defaultZoom: this.state.zoomLevel,\n            maxZoom: 19,\n            defaultOptions: { styles: _google_map_styles2.default },\n            scrollwheel: false,\n            ref: 'map' },\n          this.markerCallbackHandler(),\n          _react2.default.createElement(_google_maps_modal_component2.default, { center: this.centerMap(), modalEnable: this.modalYes, modalDisable: this.modalNo })\n        )\n      });\n    }\n  }]);\n\n  return GMap;\n}(_base_component2.default);\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    markers: state.jobs.map(function (job) {\n      var _ref;\n\n      return _ref = {\n        coords: new google.maps.LatLng(job.latitude, job.longitude)\n      }, _defineProperty(_ref, 'coords', { \"lat\": job.latitude, \"lng\": job.longitude }), _defineProperty(_ref, 'jobTitle', job.jobtitle), _defineProperty(_ref, 'company', job.company), _defineProperty(_ref, 'formattedLocation', job.formattedLocation), _defineProperty(_ref, 'showInfo', false), _ref;\n    }),\n    toggleModal: state.toggleModal\n  };\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({\n    toggleModal: _index.toggleModal,\n    toggleModalOff: _index.toggleModalOff\n  }, dispatch);\n};\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(GMap);\n\n// {\n//   // Show InfoWindow only if `showInfo` key of the marker is `true`. That is, when the \n//   // Marker pin has been clicked and 'handleMarkerClick' has been successfully fired.\n//   marker.showInfo ? this.renderInfoWindow(index, marker) : null \n// }\n\n\n// function pinDropper() {\n//                 let markers = [];\n\n\n// const pinDropDelay = 1000,\n//                     delayPinDrop = (fn) => setTImeOut(fn, pinDropDelay); \n// delayPinDrop(() => newMarker, pinDropDelay);\n\n// const dropPins = () => setTimeout(function() { return newMarker; }, 1000);\n// dropPins();\n\n/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(307); if (makeExportsHot(module, __webpack_require__(82))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error(\"Cannot not apply hot update to \" + \"google_map_component.js\" + \": \" + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzczLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZ29vZ2xlX21hcF9jb21wb25lbnQuanM/Mjg5YyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBSRUFDVCBIT1QgTE9BREVSICovIGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBSZWFjdEhvdEFQSSA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWFwaS9tb2R1bGVzL2luZGV4LmpzXCIpLCBSb290SW5zdGFuY2VQcm92aWRlciA9IHJlcXVpcmUoXCIvVXNlcnMvb2xpdmVyaXNlbnJpY2gvbm9kai9ub2RlX21vZHVsZXMvcmVhY3QtaG90LWxvYWRlci9Sb290SW5zdGFuY2VQcm92aWRlci5qc1wiKSwgUmVhY3RNb3VudCA9IHJlcXVpcmUoXCJyZWFjdC9saWIvUmVhY3RNb3VudFwiKSwgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7IG1vZHVsZS5tYWtlSG90ID0gbW9kdWxlLmhvdC5kYXRhID8gbW9kdWxlLmhvdC5kYXRhLm1ha2VIb3QgOiBSZWFjdEhvdEFQSShmdW5jdGlvbiAoKSB7IHJldHVybiBSb290SW5zdGFuY2VQcm92aWRlci5nZXRSb290SW5zdGFuY2VzKFJlYWN0TW91bnQpOyB9LCBSZWFjdCk7IH0pKCk7IH0gdHJ5IHsgKGZ1bmN0aW9uICgpIHtcblxuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG52YXIgX3JlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxudmFyIF9yZWFjdDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9yZWFjdCk7XG5cbnZhciBfcmVhY3RHb29nbGVNYXBzID0gcmVxdWlyZSgncmVhY3QtZ29vZ2xlLW1hcHMnKTtcblxudmFyIF9JbmZvQm94ID0gcmVxdWlyZSgncmVhY3QtZ29vZ2xlLW1hcHMvbGliL2FkZG9ucy9JbmZvQm94Jyk7XG5cbnZhciBfSW5mb0JveDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9JbmZvQm94KTtcblxudmFyIF9yZWFjdE1vZGFsID0gcmVxdWlyZSgncmVhY3QtbW9kYWwnKTtcblxudmFyIF9yZWFjdE1vZGFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3JlYWN0TW9kYWwpO1xuXG52YXIgX3JlZHV4ID0gcmVxdWlyZSgncmVkdXgnKTtcblxudmFyIF9yZWFjdFJlZHV4ID0gcmVxdWlyZSgncmVhY3QtcmVkdXgnKTtcblxudmFyIF9iYXNlX2NvbXBvbmVudCA9IHJlcXVpcmUoJy4vYmFzZV9jb21wb25lbnQnKTtcblxudmFyIF9iYXNlX2NvbXBvbmVudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9iYXNlX2NvbXBvbmVudCk7XG5cbnZhciBfZ29vZ2xlX21hcHNfbW9kYWxfY29tcG9uZW50ID0gcmVxdWlyZSgnLi9nb29nbGVfbWFwc19tb2RhbF9jb21wb25lbnQnKTtcblxudmFyIF9nb29nbGVfbWFwc19tb2RhbF9jb21wb25lbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcHNfbW9kYWxfY29tcG9uZW50KTtcblxudmFyIF9nb29nbGVfbWFwX3N0eWxlcyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cy9nb29nbGVfbWFwX3N0eWxlcy5qc29uJyk7XG5cbnZhciBfZ29vZ2xlX21hcF9zdHlsZXMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ29vZ2xlX21hcF9zdHlsZXMpO1xuXG52YXIgX2luZGV4ID0gcmVxdWlyZSgnLi4vYWN0aW9ucy9pbmRleCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7IGlmICghc2VsZikgeyB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IH0gcmV0dXJuIGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpID8gY2FsbCA6IHNlbGY7IH1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7IGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7IH0gc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiBzdWJDbGFzcywgZW51bWVyYWJsZTogZmFsc2UsIHdyaXRhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUgfSB9KTsgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzOyB9XG5cbi8vIENvZGUgZm9yIHBvdGVudGlhbCBpbmNsdXNpb24gYXQgbGF0ZXIgZGF0ZTpcbnZhciBnZW9sb2NhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gY2FuVXNlRE9NICYmIG5hdmlnYXRvci5nZW9sb2NhdGlvbiB8fCB7XG4gIC8vICAgZ2V0Q3VycmVudFBvc2l0aW9uOiAoc3VjY2VzcywgZmFpbHVyZSkgPT4ge1xuICAvLyAgICAgZmFpbHVyZShgWW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBnZW9sb2NhdGlvbi5gKTtcbiAgLy8gICB9LFxuICAvLyB9XG4gIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgdmFyIHBvcyA9IHtcbiAgICAgICAgbGF0OiBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXG4gICAgICAgIGxuZzogcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxuICAgICAgfTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGBMb2NhdGlvbiBmb3VuZDogJHtwb3MubGF0fSAke3Bvcy5sbmd9YCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgR29vZ2xlIE1hcHMgTGF0TG5nOiAke25ldyBnb29nbGUubWFwcy5MYXRMbmcocG9zLmxhdCwgcG9zLmxuZyl9YCk7XG4gICAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhwb3MubGF0LCBwb3MubG5nKTtcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhgWW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBnZW9sb2NhdGlvbi5gKTtcbiAgICByZXR1cm4gbmV3IGdvb2dsZS5tYXBzLkxhdExuZygzNy43NDU5NTEsIC0xMjIuNDM5NDIxKTtcbiAgfVxufSgpO1xuXG52YXIgR01hcCA9IGZ1bmN0aW9uIChfQmFzZUNvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoR01hcCwgX0Jhc2VDb21wb25lbnQpO1xuXG4gIGZ1bmN0aW9uIEdNYXAocHJvcHMpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgR01hcCk7XG5cbiAgICB2YXIgX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoR01hcCkuY2FsbCh0aGlzLCBwcm9wcykpO1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBkZWZhdWx0Q2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDM3Ljc0NTk1MSwgLTEyMi40Mzk0MjEpLFxuICAgICAgZ2VvUG9zOiBudWxsLFxuICAgICAgem9vbUxldmVsOiAxMFxuICAgIH07XG5cbiAgICBfdGhpcy5tb2RhbE5vID0gX3RoaXMubW9kYWxOby5iaW5kKF90aGlzKTtcbiAgICBfdGhpcy5hZGRUaW1lRGVsYXllZE1hcmtlciA9IF90aGlzLmFkZFRpbWVEZWxheWVkTWFya2VyLmJpbmQoX3RoaXMpO1xuICAgIF90aGlzLm1hcmtlckNhbGxiYWNrSGFuZGxlciA9IF90aGlzLm1hcmtlckNhbGxiYWNrSGFuZGxlci5iaW5kKF90aGlzKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoR01hcCwgW3tcbiAgICBrZXk6ICdjZW50ZXJNYXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjZW50ZXJNYXAoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhgRmlyc3QgbWFwIG1hcmtlciBjb29yZGluYXRlczogJHt0aGlzLnByb3BzLm1hcmtlcnNbMF0uY29vcmRzfWApO1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMubWFya2Vycy5sZW5ndGggPyB0aGlzLnByb3BzLm1hcmtlcnNbMF0uY29vcmRzIDogdGhpcy5zdGF0ZS5kZWZhdWx0Q2VudGVyO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NlbnRlclpvb21PdmVyVVNBJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2VudGVyWm9vbU92ZXJVU0EoKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgem9vbUxldmVsOiA1IH0pO1xuICAgIH1cblxuICAgIC8vIFRvZ2dsZSB0byAndHJ1ZScgdG8gc2hvdyBJbmZvV2luZG93IGFuZCByZS1yZW5kZXIgY29tcG9uZW50XG5cbiAgfSwge1xuICAgIGtleTogJ2hhbmRsZU1hcmtlckNsaWNrJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaGFuZGxlTWFya2VyQ2xpY2sodGFyZ2V0TWFya2VyKSB7XG4gICAgICB0aGlzLmNsb3NlQWxsTWFya2VycygpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIG1hcmtlcnM6IHRoaXMucHJvcHMubWFya2Vycy5tYXAoZnVuY3Rpb24gKG1hcmtlcikge1xuICAgICAgICAgIHJldHVybiBtYXJrZXIgPT09IHRhcmdldE1hcmtlciA/IE9iamVjdC5hc3NpZ24obWFya2VyLCB7IHNob3dJbmZvOiB0cnVlIH0pIDogbWFya2VyO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGFuZGxlTWFya2VyQ2xvc2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoYW5kbGVNYXJrZXJDbG9zZSh0YXJnZXRNYXJrZXIpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtYXJrZXJzOiB0aGlzLnByb3BzLm1hcmtlcnMubWFwKGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgICByZXR1cm4gbWFya2VyID09PSB0YXJnZXRNYXJrZXIgPyB7IG1hcmtlcjogbWFya2VyLCBzaG93SW5mbzogZmFsc2UgfSA6IG1hcmtlcjtcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2Nsb3NlQWxsTWFya2VycycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsb3NlQWxsTWFya2VycygpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBtYXJrZXJzOiB0aGlzLnByb3BzLm1hcmtlcnMubWFwKGZ1bmN0aW9uIChtYXJrZXIpIHtcbiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihtYXJrZXIsIHsgc2hvd0luZm86IGZhbHNlIH0pO1xuICAgICAgICB9KVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVySW5mb1dpbmRvdycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlbmRlckluZm9XaW5kb3cocmVmLCBtYXJrZXIpIHtcbiAgICAgIHZhciBvbkNsb3NlY2xpY2sgPSB0aGlzLmhhbmRsZU1hcmtlckNsb3NlLmJpbmQodGhpcywgbWFya2VyKTtcbiAgICAgIGNvbnNvbGUubG9nKCdNYXJrZXIgS2V5czogJyArIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKG1hcmtlcikpO1xuICAgICAgY29uc29sZS5sb2coJ0pvYiBOYW1lOiAnICsgbWFya2VyLmpvYlRpdGxlKTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RHb29nbGVNYXBzLkluZm9XaW5kb3csXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IHJlZiArICdfaW5mb193aW5kb3cnLFxuICAgICAgICAgIG9uQ2xvc2VjbGljazogb25DbG9zZWNsaWNrIH0sXG4gICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAnaDQnLFxuICAgICAgICAgICAgeyBjbGFzc05hbWU6ICdpbmZvV2luZG93X0hlYWRlcicgfSxcbiAgICAgICAgICAgIHRoaXMucGFyc2VBbmRGb3JtYXRKb2JUaXRsZShtYXJrZXIuam9iVGl0bGUpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICAgICdoNScsXG4gICAgICAgICAgICB7IGNsYXNzTmFtZTogJ2luZm9XaW5kb3dfSGVhZGVyJyB9LFxuICAgICAgICAgICAgbWFya2VyLmNvbXBhbnlcbiAgICAgICAgICApLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KCdocicsIG51bGwpLFxuICAgICAgICAgIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICAgICAgJ3AnLFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgIG1hcmtlci5mb3JtYXR0ZWRMb2NhdGlvblxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDbGFzcyBtZXRob2RzIGZvciBjb250cm9sIG9mIHRoZSBHb29nbGUgTWFwcyBNb2RhbCB2aXNpYmlsaXR5OlxuXG4gIH0sIHtcbiAgICBrZXk6ICdtb2RhbFllcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1vZGFsWWVzKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMudG9nZ2xlTW9kYWwoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtb2RhbE5vJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbW9kYWxObygpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb3BzLnRvZ2dsZU1vZGFsT2ZmKCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYWRkVGltZURlbGF5ZWRNYXJrZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBhZGRUaW1lRGVsYXllZE1hcmtlcihtYXJrZXIsIGluZGV4KSB7XG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgdmFyIEFMUEhBQkVUID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJyxcbiAgICAgICAgICBNQVhfWklOREVYID0gMTAwMCxcbiAgICAgICAgICBvbkNsaWNrID0gZnVuY3Rpb24gb25DbGljaygpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzMi5oYW5kbGVNYXJrZXJDbGljayhtYXJrZXIpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIF9yZWFjdDIuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFxuICAgICAgICBfcmVhY3RHb29nbGVNYXBzLk1hcmtlcixcbiAgICAgICAge1xuICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgcmVmOiAnbWFya2VyXycgKyBpbmRleCxcbiAgICAgICAgICAnZGF0YS1qb2JUaXRsZSc6IG1hcmtlci5qb2JUaXRsZSxcbiAgICAgICAgICAnZGF0YS1mb3JtYXR0ZWRMb2NhdGlvbic6IG1hcmtlci5mb3JtYXR0ZWRMb2NhdGlvbixcbiAgICAgICAgICBwb3NpdGlvbjogbmV3IGdvb2dsZS5tYXBzLkxhdExuZyhtYXJrZXIuY29vcmRzKSxcbiAgICAgICAgICBhbmltYXRpb246IGdvb2dsZS5tYXBzLkFuaW1hdGlvbi5EUk9QLFxuICAgICAgICAgIHRpdGxlOiBtYXJrZXIuY29tcGFueSxcbiAgICAgICAgICBpY29uOiBcImh0dHBzOi8vZ29vLmdsL3Bob3Rvcy95dXpEVzN6endFdDdWZEZNNlwiLFxuICAgICAgICAgIG9wYWNpdHk6IDAuOTAsXG4gICAgICAgICAgekluZGV4OiBNQVhfWklOREVYXG4gICAgICAgICAgLy9sYWJlbD17eyBcInRleHRcIjogYCR7QUxQSEFCRVRbaW5kZXgrK119YCwgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiIH19XG4gICAgICAgICAgLCBzaG93SW5mbzogZmFsc2UsXG4gICAgICAgICAgb25DbGljazogb25DbGljayB9LFxuICAgICAgICBtYXJrZXIuc2hvd0luZm8gPyB0aGlzLnJlbmRlckluZm9XaW5kb3coaW5kZXgsIG1hcmtlcikgOiBudWxsXG4gICAgICApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21hcmtlckNhbGxiYWNrSGFuZGxlcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1hcmtlckNhbGxiYWNrSGFuZGxlcigpIHtcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5tYXJrZXJzLm1hcChmdW5jdGlvbiAobWFya2VyLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX3RoaXMzLmFkZFRpbWVEZWxheWVkTWFya2VyKG1hcmtlciwgaW5kZXgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVuZGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgdmFyIF90aGlzNCA9IHRoaXM7XG5cbiAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3RHb29nbGVNYXBzLkdvb2dsZU1hcExvYWRlciwge1xuICAgICAgICBjb250YWluZXJFbGVtZW50OiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnZGl2Jywge1xuICAgICAgICAgIGlkOiAnbWFwc0NvbnRhaW5lcicsXG4gICAgICAgICAgb25Eb3VibGVDbGljazogZnVuY3Rpb24gb25Eb3VibGVDbGljaygpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczQubW9kYWxZZXMoKTtcbiAgICAgICAgICB9IH0pLFxuICAgICAgICBnb29nbGVNYXBFbGVtZW50OiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChcbiAgICAgICAgICBfcmVhY3RHb29nbGVNYXBzLkdvb2dsZU1hcFxuICAgICAgICAgIC8vIGRlZmF1bHRDZW50ZXI9e3RoaXMuc3RhdGUuZGVmYXVsdENlbnRlcn1cbiAgICAgICAgICAsXG4gICAgICAgICAgeyBjZW50ZXI6IHRoaXMuY2VudGVyTWFwKCksXG4gICAgICAgICAgICBkZWZhdWx0Q2VudGVyOiB0aGlzLnN0YXRlLmRlZmF1bHRDZW50ZXIsXG4gICAgICAgICAgICBkZWZhdWx0Wm9vbTogdGhpcy5zdGF0ZS56b29tTGV2ZWwsXG4gICAgICAgICAgICBtYXhab29tOiAxOSxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiB7IHN0eWxlczogX2dvb2dsZV9tYXBfc3R5bGVzMi5kZWZhdWx0IH0sXG4gICAgICAgICAgICBzY3JvbGx3aGVlbDogZmFsc2UsXG4gICAgICAgICAgICByZWY6ICdtYXAnIH0sXG4gICAgICAgICAgdGhpcy5tYXJrZXJDYWxsYmFja0hhbmRsZXIoKSxcbiAgICAgICAgICBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudChfZ29vZ2xlX21hcHNfbW9kYWxfY29tcG9uZW50Mi5kZWZhdWx0LCB7IGNlbnRlcjogdGhpcy5jZW50ZXJNYXAoKSwgbW9kYWxFbmFibGU6IHRoaXMubW9kYWxZZXMsIG1vZGFsRGlzYWJsZTogdGhpcy5tb2RhbE5vIH0pXG4gICAgICAgIClcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBHTWFwO1xufShfYmFzZV9jb21wb25lbnQyLmRlZmF1bHQpO1xuXG52YXIgbWFwU3RhdGVUb1Byb3BzID0gZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbWFya2Vyczogc3RhdGUuam9icy5tYXAoZnVuY3Rpb24gKGpvYikge1xuICAgICAgdmFyIF9yZWY7XG5cbiAgICAgIHJldHVybiBfcmVmID0ge1xuICAgICAgICBjb29yZHM6IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoam9iLmxhdGl0dWRlLCBqb2IubG9uZ2l0dWRlKVxuICAgICAgfSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdjb29yZHMnLCB7IFwibGF0XCI6IGpvYi5sYXRpdHVkZSwgXCJsbmdcIjogam9iLmxvbmdpdHVkZSB9KSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdqb2JUaXRsZScsIGpvYi5qb2J0aXRsZSksIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCAnY29tcGFueScsIGpvYi5jb21wYW55KSwgX2RlZmluZVByb3BlcnR5KF9yZWYsICdmb3JtYXR0ZWRMb2NhdGlvbicsIGpvYi5mb3JtYXR0ZWRMb2NhdGlvbiksIF9kZWZpbmVQcm9wZXJ0eShfcmVmLCAnc2hvd0luZm8nLCBmYWxzZSksIF9yZWY7XG4gICAgfSksXG4gICAgdG9nZ2xlTW9kYWw6IHN0YXRlLnRvZ2dsZU1vZGFsXG4gIH07XG59O1xuXG52YXIgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiAoMCwgX3JlZHV4LmJpbmRBY3Rpb25DcmVhdG9ycykoe1xuICAgIHRvZ2dsZU1vZGFsOiBfaW5kZXgudG9nZ2xlTW9kYWwsXG4gICAgdG9nZ2xlTW9kYWxPZmY6IF9pbmRleC50b2dnbGVNb2RhbE9mZlxuICB9LCBkaXNwYXRjaCk7XG59O1xuXG5leHBvcnRzLmRlZmF1bHQgPSAoMCwgX3JlYWN0UmVkdXguY29ubmVjdCkobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdNYXApO1xuXG4vLyB7XG4vLyAgIC8vIFNob3cgSW5mb1dpbmRvdyBvbmx5IGlmIGBzaG93SW5mb2Aga2V5IG9mIHRoZSBtYXJrZXIgaXMgYHRydWVgLiBUaGF0IGlzLCB3aGVuIHRoZSBcbi8vICAgLy8gTWFya2VyIHBpbiBoYXMgYmVlbiBjbGlja2VkIGFuZCAnaGFuZGxlTWFya2VyQ2xpY2snIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSBmaXJlZC5cbi8vICAgbWFya2VyLnNob3dJbmZvID8gdGhpcy5yZW5kZXJJbmZvV2luZG93KGluZGV4LCBtYXJrZXIpIDogbnVsbCBcbi8vIH1cblxuXG4vLyBmdW5jdGlvbiBwaW5Ecm9wcGVyKCkge1xuLy8gICAgICAgICAgICAgICAgIGxldCBtYXJrZXJzID0gW107XG5cblxuLy8gY29uc3QgcGluRHJvcERlbGF5ID0gMTAwMCxcbi8vICAgICAgICAgICAgICAgICAgICAgZGVsYXlQaW5Ecm9wID0gKGZuKSA9PiBzZXRUSW1lT3V0KGZuLCBwaW5Ecm9wRGVsYXkpOyBcbi8vIGRlbGF5UGluRHJvcCgoKSA9PiBuZXdNYXJrZXIsIHBpbkRyb3BEZWxheSk7XG5cbi8vIGNvbnN0IGRyb3BQaW5zID0gKCkgPT4gc2V0VGltZW91dChmdW5jdGlvbigpIHsgcmV0dXJuIG5ld01hcmtlcjsgfSwgMTAwMCk7XG4vLyBkcm9wUGlucygpO1xuXG4vKiBSRUFDVCBIT1QgTE9BREVSICovIH0pLmNhbGwodGhpcyk7IH0gZmluYWxseSB7IGlmIChtb2R1bGUuaG90KSB7IChmdW5jdGlvbiAoKSB7IHZhciBmb3VuZFJlYWN0Q2xhc3NlcyA9IG1vZHVsZS5ob3QuZGF0YSAmJiBtb2R1bGUuaG90LmRhdGEuZm91bmRSZWFjdENsYXNzZXMgfHwgZmFsc2U7IGlmIChtb2R1bGUuZXhwb3J0cyAmJiBtb2R1bGUubWFrZUhvdCkgeyB2YXIgbWFrZUV4cG9ydHNIb3QgPSByZXF1aXJlKFwiL1VzZXJzL29saXZlcmlzZW5yaWNoL25vZGovbm9kZV9tb2R1bGVzL3JlYWN0LWhvdC1sb2FkZXIvbWFrZUV4cG9ydHNIb3QuanNcIik7IGlmIChtYWtlRXhwb3J0c0hvdChtb2R1bGUsIHJlcXVpcmUoXCJyZWFjdFwiKSkpIHsgZm91bmRSZWFjdENsYXNzZXMgPSB0cnVlOyB9IHZhciBzaG91bGRBY2NlcHRNb2R1bGUgPSB0cnVlICYmIGZvdW5kUmVhY3RDbGFzc2VzOyBpZiAoc2hvdWxkQWNjZXB0TW9kdWxlKSB7IG1vZHVsZS5ob3QuYWNjZXB0KGZ1bmN0aW9uIChlcnIpIHsgaWYgKGVycikgeyBjb25zb2xlLmVycm9yKFwiQ2Fubm90IG5vdCBhcHBseSBob3QgdXBkYXRlIHRvIFwiICsgXCJnb29nbGVfbWFwX2NvbXBvbmVudC5qc1wiICsgXCI6IFwiICsgZXJyLm1lc3NhZ2UpOyB9IH0pOyB9IH0gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7IGRhdGEubWFrZUhvdCA9IG1vZHVsZS5tYWtlSG90OyBkYXRhLmZvdW5kUmVhY3RDbGFzc2VzID0gZm91bmRSZWFjdENsYXNzZXM7IH0pOyB9KSgpOyB9IH1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2NvbXBvbmVudHMvZ29vZ2xlX21hcF9jb21wb25lbnQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

})