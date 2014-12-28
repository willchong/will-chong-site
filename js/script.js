$( document ).ready(function() {
  
  console.log('Hello there, welcome to my source!');
  console.log('Feel free to look around, I\'m sure you won\'t find anything out of the ordinary.');
  console.log('But if you wish to provide some constructive criticism, you can reach me at me@willchong.com');
  console.log('Cheers, Will.')
  
  var mobileNavOpen = false;
    
  $('.nav-mobile').on('click', function() {
    
    if (mobileNavOpen == false) {
      $('.nav-mobile a li').css({'display':'block'});
      $('.nav-mobile span').removeClass('glyphicon-chevron-down');
      $('.nav-mobile span').addClass('glyphicon-chevron-up');
      mobileNavOpen = true;
    } else if (mobileNavOpen == true) {
      $('.nav-mobile a li').css({'display':'none'});
      $('.nav-mobile span').removeClass('glyphicon-chevron-up');
      $('.nav-mobile span').addClass('glyphicon-chevron-down');
      mobileNavOpen = false;
    }
  });
  
    //initial video height setting
    
    var theWidth = $('.main-video').width();
    var theHeight = theWidth*.6304;
    $('.main-video').css({'height': theHeight+"px"});
    $('.main-video').css({'background-size':theWidth});
    $('.main-video .thevideo').css({'width': theWidth*.739+"px",'height':theHeight/546*400+"px"});
    var theTop = ($('.main-video').height()-$('.main-video .thevideo').height())*(66/146);
    $('.main-video .thevideo').css({'top': theTop+"px" });

    //video list updating

  $('.video-list ul li a').on('click',function(){
    var whichVideo = $(this).attr('id');
    $('.video-list ul li a').removeClass('active-video');
    $(this).addClass('active-video');
    var scrollBack = $('.main-video').offset().top;
    $('body,html').animate({scrollTop: scrollBack}, 250);
    var theYoutubeId;
    $('.main-video .thevideo').empty();

    switch (whichVideo) {
      case "ob-video":
        theYoutubeId = "41NvopnwIq8"
        break;
      case "3-track-video":
        theYoutubeId = "SdaDSw5yEjU"
        break;
      case "pet-trust-video":
        theYoutubeId = "GMqpSFrN01Q"
        break;
      case "pfaff-video":
        theYoutubeId = "1YjvujTLR5U"
        break;
      case "canopy-video":
        theYoutubeId = "vFHRW-UfUQQ"
        break;
      case "drive-video":
        theYoutubeId = "3BNSAGkIDd8"
        break;
    }
    
    $('.main-video .thevideo').append('<iframe width="100%" height="100%" src="http://www.youtube.com/embed/'+theYoutubeId+'?rel=0&autohide=1&autoplay=1&html5=1" frameborder="0" allowfullscreen></iframe></div>')
  });
  
  //see more work toggle
  
  var extraWork = false;
  
  $('#work .see-more').on('click', function(){
    if (extraWork == false) {
      $('.toggle-hide').removeClass('not-visible');
      $('.toggle-hide').addClass('visible');
      $('#work .see-more').html('');
      $('#work .see-more').html('See Less <span class="glyphicon glyphicon-minus"></span>');
      var scrollBackWork = $('.item.bento').offset().top - 32;
      $('body,html').animate({'scrollTop': scrollBackWork}, 500);
      extraWork = true;
    } else if (extraWork == true) {
      $('.toggle-hide').removeClass('visible');
      $('.toggle-hide').addClass('not-visible');
      $('#work .see-more').html('');
      $('#work .see-more').html('See More <span class="glyphicon glyphicon-plus"></span>');
      extraWork = false;
      $('body,html').animate({'scrollTop': 0}, 500);
    }
    
  });
  
  
  //carouseling
   $('.flexslider').flexslider();
  
  $('.about-img').hover(
  function() {
    $(this).attr("src", "img/me-3.jpg");
  }, function() {
    $(this).attr("src", "img/me-1.jpg");
  });
  
  //resize function
  
  $(window).resize(function(){
    
    var theWidth = $('.main-video').width();
    var theHeight = theWidth*.6304;
    $('.main-video').css({'height': theHeight+"px"});
    $('.main-video').css({'background-size':theWidth});
    $('.main-video .thevideo').css({'width': theWidth*.739+"px",'height':theHeight/546*400+"px"});
    var theTop = ($('.main-video').height()-$('.main-video .thevideo').height())*(66/146);
    $('.main-video .thevideo').css({'top': theTop+"px" });
  });
    
  animateLogo();
  
});

function animateLogo() {
  //animated logo shit
  var logoState; //var for logo variation
  var numStates = 11; //number of different variations
  var logoInterval = 2000; //milliseconds of delay between transformation
  var theLogo = $('#powerhouse #logo'); //div id of logo
  var logoTransformed = false; //transformation flag

  setInterval(animateLogo, logoInterval);
  
  $('#powerhouse #logo').hide();
  
  //just to initialize spritely
  theLogo.sprite({
    fps: 30,
    no_of_frames: 11
  });
  //theLogo.spStop();
  
  //animate logo switching
  function animateLogo() {
    
    $('#powerhouse #logo').fadeIn();
    
    if (logoTransformed === false) {
      theLogo.destroy();
      var random = generateRandom(logoState, numStates);
      theLogo.sprite({
        fps: 30,
        no_of_frames: 11,
        start_at_frame: 0,
        play_frames: 11
      });
      theLogo.spState(random);
      logoTransformed = true;
      
    } else if (logoTransformed === true) {
      theLogo.destroy();
      theLogo.sprite({
        fps: 30,
        no_of_frames: 11,
        start_at_frame: 11,
        play_frames: 10,
        rewind: true
      });
      logoTransformed = false;

    }
    
  }
  
  function generateRandom(theInt, theRandom) {

      theInt = Math.round(theRandom*Math.random());
      return theInt;
      
      
  }
}