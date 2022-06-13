$(window).on("load", function() {
  function scrollToAnchor(aid){
      const destination = $("a[name='"+ aid +"']");
      var offset = 40;
      if ($(window).outerWidth() > 768) {
        offset = 50;
      }
      $('html,body').animate({
          scrollTop: destination.offset().top - offset
      },'slow');
  }

  $(document).on('click', '.site__nav-menu-item-anchor', function(event) {
    event.preventDefault();
    var dest = $(this).attr('href');
    if ($(window).outerWidth() <= 768) {
      $('.site__nav').slideToggle( "slow", function() {
        $(this).removeClass('active');
      });
    }
    scrollToAnchor(dest);
  });

  $(document).on('click', '.menu-toggle', function(event) {
    event.preventDefault();
    $('.site__nav').slideToggle( "slow", function() {
      $(this).toggleClass('active');
    });
  });
});
