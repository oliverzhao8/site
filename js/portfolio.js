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
    <a class="portfolio-item-image">
        <img class="img-responsive" src=` + imgSrc + ` alt="">
    </a>
    <div class="portfolio-short-description">
      <p>` + description +`</p>
    </div>
</div>`
  };

  var createRow = function(content) {
    $('#content').append('<div class="row">' + content + '</div>');
  };
  var items = $.map(portfolioData, function(item, index) {
    return createItem(index, item.name, item.img, item.description);
  });
  var counter = 0;
  var content = "";
  for (var i = 0; i < items.length; ++i) {
    if (counter === ITEMS_PER_ROW) {
      counter = 0;
      createRow(content);
      content = "";
    }
    content += items[i];
  }
  if (counter !== ITEMS_PER_ROW) {
    createRow(content);
  }

  //onclick portfolio items, modal w/ information
  $('.portfolio-item-image').mouseenter(function() {
    $(this).parent().find('.portfolio-short-description').addClass('hover-bg');
  });
  $('.portfolio-item-image').mouseout(function() {
    $(this).parent().find('.portfolio-short-description').removeClass('hover-bg');
  });
  $('.portfolio-item').click(function() {
    $('#my-modal').modal('show');
    var id = $(this).attr('id');
    // console.log(portfolioData[id]);
    var data = portfolioData[id];
    $('#my-modal-title').text(data.name);
    $('#modal-body-text').text(data.description);
  });
};