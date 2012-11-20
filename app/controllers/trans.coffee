class Trans extends Spine.Controller
  name: 'trans'
  el: $('#trans')

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

module.exports = Trans
