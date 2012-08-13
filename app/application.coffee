
class App extends Spine.Controller
  element:
    ".main": "main"
    "#about-us": "aboutUs"

  events:
    "click .nav a": "switchFocus"

  constructor: ->
    super
    @currentTab = $("li[data-content=#{window.location.hash || '#about-us'}]")
    @currentTab.addClass "active"
    $(@currentTab.data("content")).fadeIn 'slow'

  switchFocus: (e) ->
    e.preventDefault()
    selectedTab = $(e.target.parentElement)
    unless selectedTab is @currentTab
      @currentTab.removeClass "active"
      selectedTab.addClass "active"
      $(@currentTab.data("content")).fadeOut 'slow', ->
        $(selectedTab.data("content")).fadeIn 'slow'
      @currentTab = selectedTab

module.exports = App
