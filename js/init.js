(function($){
  $(function(){
    // Age verification pop-up
    $(document).ready(function(){
      if (sessionStorage.getItem('ageVerified') !== 'true') {
        $('#age-verification').modal({dismissible: false}).modal('open').blur();
      }
    });

    // Age verifid, store session
    $('#age-verification-enter').on('click', function() {
      sessionStorage.setItem('ageVerified','true');
    })

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space
