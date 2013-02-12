AboutUs = require('controllers/about_us')
WeddingInfo = require('controllers/wedding_info')
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
      'trans': new Trans
      'contact': new Contact

    new Spine.Manager((for key, controller of @controllers
      controller)...)

    hash = window.location.hash.substr(1)
    if hash and @controllers.hasOwnProperty(hash)
      @controllers[hash].active()
    else
      @controllers['about-us'].active()

  switchFocus: (e) ->
    e.preventDefault()
    @controllers[$(e.target.parentElement).data('content')].active()

module.exports = App
