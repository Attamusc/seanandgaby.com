class WeddingInfo extends Spine.Controller
  name: 'wedding-info'
  el: $('#wedding-info')

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

module.exports = WeddingInfo
