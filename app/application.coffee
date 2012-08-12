
class App extends Spine.Controller
  element:
    ".main": "main"
    "#about-us": "aboutUs"

  events:
    "click .nav a": "switchFocus"

  constructor: ->
    super
    @currentTab = $("a[href=#about-us]").parent()

  switchFocus: (e) ->
    e.preventDefault()
    selectedTab = $(e.target.parentElement)
    unless selectedTab is @currentTab
      @currentTab.removeClass "active"
      $(selectedTab).addClass "active"
      @currentTab = selectedTab

module.exports = App
