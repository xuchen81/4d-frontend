$(() => {
  const $rgbResult = $('.rgb-result')
  colorjoe.rgb('rgbPicker').on('change', function(c) {
    $rgbResult.css('background', c.css())
  }).update();
  $('.dropdown').click(function() {
    $(this).toggleClass('is-active')
  })
  $('.slider').on('input', function () {
    const $this = $(this)
    $this.parent().find('output').text($this.val())
  })
  const layoutBoxCover = $('.layout-box .cover')
  $('#toggleViews').change(function() {
    layoutBoxCover.toggle()
  })
  const $specularTabs = $('.specular-tabs li')
  $specularTabs.click(function () {
    $specularTabs.toggleClass('is-active')
  })
  const $allCheck = $('.filter-box').find('input[type=checkbox]')
  $('#switchRoundedDefault').change(function() {
    $allCheck.prop('checked', this.checked)
  })
  const $tabTitle = $('.main-tabs li')
  const $tabContent = $('.tab-content')
  $tabContent.hide(0).eq(2).show(0)
  $tabTitle.click(function () {
    $tabTitle.removeClass('is-active')
    const $this = $(this)
    $this.addClass('is-active')
    $tabContent.hide(0)
    const index = $this.index()
    $tabContent.eq(index).show(500)
  })
  $('.collapse-title').click(function () {
    $(this).parent().find('.content').eq(0).toggle()
  })
  $('.toggle-picker').click(function () {
    const $this = $(this)
    $this.parent().find('.colorPicker').toggle()
    $this.parent().find('.texture-area').toggle()
  })
})
