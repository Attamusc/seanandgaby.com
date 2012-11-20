class Vendors extends Spine.Controller
  name: 'vendors'
  el: $('#vendors')

  constructor: ->
    super

  activate: ->
    $("li[data-content=#{@name}]").addClass "active"
    @el.addClass "active"
    @

  deactivate: ->
    $("li[data-content=#{@name}]").removeClass "active"
    @el.removeClass "active"
    @

module.exports = Vendors
