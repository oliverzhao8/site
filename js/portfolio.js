/*globals portfolioData*/
'use strict';
var loadPortfolio = function() {
  $('li').mouseenter(function() {
    $(this).addClass('active');
  });
  $('li').mouseout(function() {
    $(this).removeClass('active');
  });

  //if change ITEMS_PER_ROW, also change col-md-4 to something else
  var ITEMS_PER_ROW = 3;
  var createItem = function(name, imgSrc, description) {
return `<div class="col-md-4 portfolio-item">
    <a href="#">
        <img class="img-responsive" src=` + imgSrc + ` alt="">
    </a>
    <h3>
        <a href="#">` + name + `</a>
    </h3>
    <p>` + description +`</p>
</div>`
  };

  var createRow = function(content) {
    $('#content').append('<div class="row">' + content + '</div>');
  };
  var items = portfolioData.map(function(item) {
    return createItem(item.name, item.img, item.description);
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
};