class Contact extends Spine.Controller
  name: 'contact'
  el: $('#contact')

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

module.exports = Contact
