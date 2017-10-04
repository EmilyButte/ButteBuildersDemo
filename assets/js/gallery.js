$(document).ready(function () {
  $('.filter-button').click(function () {
    var value = $(this).attr('data-filter')

    if (value === 'all') {
    // $('.filter').removeClass('hidden');
      $('.filter').show('1000')
    } else {
      //  $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //  $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $('.filter').not('.' + value).hide('3000')
      $('.filter').filter('.' + value).show('3000')
    }
  })

  if ($('.filter-button').removeClass('active')) {
    $(this).removeClass('active')
  }
  $(this).addClass('active')
})

$('#zoom_05').elevateZoom({
  zoomType: 'inner',
  cursor: 'crosshair'
})

$('#thumbnailImage').click(function () {
  $(this).attr('width', '400')
  $(this).attr('height', '300')
})
