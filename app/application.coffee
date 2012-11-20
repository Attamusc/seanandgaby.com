AboutUs = require('controllers/about_us')
WeddingInfo = require('controllers/wedding_info')
Vendors = require('controllers/vendor')
Trans = require('controllers/trans')
Contact = require('controllers/contact')

class App extends Spine.Controller
  elements:
    ".main": "main"
    "#count": "count"

  events:
    "click .nav a": "switchFocus"

  constructor: ->
    super

    @controllers =
      'about-us': new AboutUs
      'wedding-info': new WeddingInfo
      'vendors': new Vendors
      'trans': new Trans
      'contact': new Contact

    new Spine.Manager((for key, controller of @controllers
      controller)...)

    @controllers['about-us'].active()

  switchFocus: (e) ->
    e.preventDefault()
    @controllers[$(e.target.parentElement).data('content')].active()

module.exports = App
