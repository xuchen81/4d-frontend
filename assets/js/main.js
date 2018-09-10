$(() => {
  const val = document.getElementById('rgbValue')
  colorjoe.rgb('rgbPicker').on('change', function(c) {
    val.innerHTML = c.css();
  }).update();
  $('#toggleViews').change(function() {
    $('.layout-box .cover').toggle()
  })
  $('#switchRoundedDefault').change(function() {
    const $allCheck = $('.filter-box').find('input[type=checkbox]')
    $allCheck.prop('checked', this.checked)
  })
  const $tabTitle = $('.tabs li')
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
    $(this).parent().find('.colorPicker').toggle()
  })
})
