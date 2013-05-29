class AboutUs extends Spine.Controller
  name: 'about-us'
  el: $("#about-us")

  elements:
    '#count': 'count'

  constructor: ->
    super
    #@count.html(Math.ceil (new Date('May 25, 2013 14:00') - new Date()) / (1000*60*60*24))

  activate: ->
    $("li[data-content=#{@name}]").addClass "active"
    @el.addClass "active"

    src = document.body.scrollTop
    window.location.hash = @name
    document.body.scrollTop = src

    @

  deactivate: ->
    $("li[data-content=#{@name}]").removeClass "active"
    @el.removeClass "active"
    @

module.exports = AboutUs
