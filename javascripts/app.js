(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle) {
    for (var key in bundle) {
      if (has(bundle, key)) {
        modules[key] = bundle[key];
      }
    }
  }

  globals.require = require;
  globals.require.define = define;
  globals.require.brunch = true;
})();

window.require.define({"application": function(exports, require, module) {
  (function() {
    var App,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    App = (function(_super) {

      __extends(App, _super);

      App.prototype.element = {
        ".main": "main",
        "#about-us": "aboutUs"
      };

      App.prototype.events = {
        "click .nav a": "switchFocus"
      };

      function App() {
        App.__super__.constructor.apply(this, arguments);
        this.currentTab = $("li[data-content=" + (window.location.hash || '#about-us') + "]");
        this.currentTab.addClass("active");
        $(this.currentTab.data("content")).fadeIn('slow');
      }

      App.prototype.switchFocus = function(e) {
        var selectedTab;
        e.preventDefault();
        selectedTab = $(e.target.parentElement);
        if (selectedTab !== this.currentTab) {
          this.currentTab.removeClass("active");
          selectedTab.addClass("active");
          $(this.currentTab.data("content")).fadeOut('slow', function() {
            return $(selectedTab.data("content")).fadeIn('slow');
          });
          return this.currentTab = selectedTab;
        }
      };

      return App;

    })(Spine.Controller);

    module.exports = App;

  }).call(this);
  
}});

