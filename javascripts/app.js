(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
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
      return globals.require(absolute);
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
    var AboutUs, App, Contact, Trans, Vendors, WeddingInfo,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    AboutUs = require('controllers/about_us');

    WeddingInfo = require('controllers/wedding_info');

    Vendors = require('controllers/vendor');

    Trans = require('controllers/trans');

    Contact = require('controllers/contact');

    App = (function(_super) {

      __extends(App, _super);

      App.prototype.elements = {
        ".main": "main",
        "#count": "count"
      };

      App.prototype.events = {
        "click .nav a": "switchFocus"
      };

      function App() {
        var controller, key;
        App.__super__.constructor.apply(this, arguments);
        this.controllers = {
          'about-us': new AboutUs,
          'wedding-info': new WeddingInfo,
          'vendors': new Vendors,
          'trans': new Trans,
          'contact': new Contact
        };
        (function(func, args, ctor) {
          ctor.prototype = func.prototype;
          var child = new ctor, result = func.apply(child, args);
          return typeof result === "object" ? result : child;
        })(Spine.Manager, (function() {
          var _ref, _results;
          _ref = this.controllers;
          _results = [];
          for (key in _ref) {
            controller = _ref[key];
            _results.push(controller);
          }
          return _results;
        }).call(this), function() {});
        this.controllers['about-us'].active();
      }

      App.prototype.switchFocus = function(e) {
        e.preventDefault();
        return this.controllers[$(e.target.parentElement).data('content')].active();
      };

      return App;

    })(Spine.Controller);

    module.exports = App;

  }).call(this);
  
}});

window.require.define({"controllers/about_us": function(exports, require, module) {
  (function() {
    var AboutUs,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    AboutUs = (function(_super) {

      __extends(AboutUs, _super);

      AboutUs.prototype.name = 'about-us';

      AboutUs.prototype.el = $("#about-us");

      AboutUs.prototype.elements = {
        '#count': 'count'
      };

      function AboutUs() {
        AboutUs.__super__.constructor.apply(this, arguments);
        this.count.html(Math.ceil((new Date('2013-05-25') - new Date()) / (1000 * 60 * 60 * 24)));
      }

      AboutUs.prototype.activate = function() {
        $("li[data-content=" + this.name + "]").addClass("active");
        this.el.addClass("active");
        return this;
      };

      AboutUs.prototype.deactivate = function() {
        $("li[data-content=" + this.name + "]").removeClass("active");
        this.el.removeClass("active");
        return this;
      };

      return AboutUs;

    })(Spine.Controller);

    module.exports = AboutUs;

  }).call(this);
  
}});

window.require.define({"controllers/contact": function(exports, require, module) {
  (function() {
    var Contact,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    Contact = (function(_super) {

      __extends(Contact, _super);

      Contact.prototype.name = 'contact';

      Contact.prototype.el = $('#contact');

      function Contact() {
        Contact.__super__.constructor.apply(this, arguments);
      }

      Contact.prototype.activate = function() {
        $("li[data-content=" + this.name + "]").addClass("active");
        this.el.addClass("active");
        return this;
      };

      Contact.prototype.deactivate = function() {
        $("li[data-content=" + this.name + "]").removeClass("active");
        this.el.removeClass("active");
        return this;
      };

      return Contact;

    })(Spine.Controller);

    module.exports = Contact;

  }).call(this);
  
}});

window.require.define({"controllers/trans": function(exports, require, module) {
  (function() {
    var Trans,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    Trans = (function(_super) {

      __extends(Trans, _super);

      Trans.prototype.name = 'trans';

      Trans.prototype.el = $('#trans');

      function Trans() {
        Trans.__super__.constructor.apply(this, arguments);
      }

      Trans.prototype.activate = function() {
        $("li[data-content=" + this.name + "]").addClass("active");
        this.el.addClass("active");
        return this;
      };

      Trans.prototype.deactivate = function() {
        $("li[data-content=" + this.name + "]").removeClass("active");
        this.el.removeClass("active");
        return this;
      };

      return Trans;

    })(Spine.Controller);

    module.exports = Trans;

  }).call(this);
  
}});

window.require.define({"controllers/vendor": function(exports, require, module) {
  (function() {
    var Vendors,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    Vendors = (function(_super) {

      __extends(Vendors, _super);

      Vendors.prototype.name = 'vendors';

      Vendors.prototype.el = $('#vendors');

      function Vendors() {
        Vendors.__super__.constructor.apply(this, arguments);
      }

      Vendors.prototype.activate = function() {
        $("li[data-content=" + this.name + "]").addClass("active");
        this.el.addClass("active");
        return this;
      };

      Vendors.prototype.deactivate = function() {
        $("li[data-content=" + this.name + "]").removeClass("active");
        this.el.removeClass("active");
        return this;
      };

      return Vendors;

    })(Spine.Controller);

    module.exports = Vendors;

  }).call(this);
  
}});

window.require.define({"controllers/wedding_info": function(exports, require, module) {
  (function() {
    var WeddingInfo,
      __hasProp = Object.prototype.hasOwnProperty,
      __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

    WeddingInfo = (function(_super) {

      __extends(WeddingInfo, _super);

      WeddingInfo.prototype.name = 'wedding-info';

      WeddingInfo.prototype.el = $('#wedding-info');

      function WeddingInfo() {
        WeddingInfo.__super__.constructor.apply(this, arguments);
      }

      WeddingInfo.prototype.activate = function() {
        $("li[data-content=" + this.name + "]").addClass("active");
        this.el.addClass("active");
        return this;
      };

      WeddingInfo.prototype.deactivate = function() {
        $("li[data-content=" + this.name + "]").removeClass("active");
        this.el.removeClass("active");
        return this;
      };

      return WeddingInfo;

    })(Spine.Controller);

    module.exports = WeddingInfo;

  }).call(this);
  
}});

