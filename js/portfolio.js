/*globals portfolioData*/
'use strict';
var loadPortfolio = function() {
  //nav bar
  $('li').mouseenter(function() {
    $(this).addClass('active');
  });
  $('li').mouseout(function() {
    $(this).removeClass('active');
  });

  //portfolio items
  //if change ITEMS_PER_ROW, also change col-md-4 to something else
  var ITEMS_PER_ROW = 3;
  var createItem = function(index, name, imgSrc, description) {
return `<div class="col-md-4 portfolio-item" id="` + index +  `">
    <img class="img-responsive portfolio-item-image" src=` + imgSrc + ` alt="">
    <div class="portfolio-preview-title">
      <p>` + name +`</p>
    </div>
</div>`
  };

  var createRow = function(content) {
    $('#content').append('<div class="row">' + content + '</div>');
  };
  var items = $.map(portfolioData, function(item, index) {
    return createItem(index, item.name, item.imgs[0], item.desription);
  });
  var counter = 0;
  var content = '';
  for (var i = 0; i < items.length; ++i) {
    ++counter;
    content += items[i];
    if (counter === ITEMS_PER_ROW) {
      counter = 0;
      createRow(content);
      content = '';
    }
  }
  if (counter !== 0) {
    createRow(content);
  }

  //onclick portfolio items, modal w/ information
  $('.portfolio-item-image').mouseenter(function() {
    $(this).parent().find('.portfolio-preview-title').addClass('hover-bg');
  });
  $('.portfolio-item-image').mouseout(function() {
    $(this).parent().find('.portfolio-preview-title').removeClass('hover-bg');
  });
  $('.portfolio-item').click(function() {
    $('#portfolio-modal').modal('show');
    var id = $(this).attr('id');
    var data = portfolioData[id];
    if (data.hasOwnProperty('youtubeVideo')) {
      $('#modal-youtube-video').append('<div class="video-container row-centered"><iframe src="' + data.youtubeVideo + '" frameborder="0" allowfullscreen></iframe></div>');
    }
    $('#portfolio-modal-title').text(data.name);
    $('#modal-body-text').multiline(data.description);
    for (var i = 1; i < data.imgs.length; ++i) {
      $('#modal-body-imgs').append('<div class="row-centered"><img class="modal-img" src="' + data.imgs[i] +'"></img></div>');
    }
  });

  //empties modal-imgs and youtube video when closed
  $('#portfolio-modal').on('hidden.bs.modal', function () {
    $('#modal-body-imgs').empty();
    $('#modal-youtube-video').empty();
  });
};