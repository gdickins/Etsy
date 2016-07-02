var ans1 = document.querySelector('#answer1');
var ans2 = document.querySelector('#answer2');
var ans3 = document.querySelector('#answer3');
var ans4 = document.querySelector('#answer4');
var ans5 = document.querySelector('#answer5');
var ans6 = document.querySelector('#answer6');

function avg(array) {
  return array.reduce(function(startVal, object){
    return startVal + object.price;
  }, 0) / array.length;
}

function priceRange(array) {
  return array.filter(function(object){
    if(object.price > 14 && object.price < 18) {
      return object;
    }
  }).map(function(object){
    return object.title;
  }).join(' ');
}

function findGBP(array) {
  return array.filter(function(object){
    if(object.currency_code === 'GBP'){
      return object;
    }
  }).map(function(object){
    return object.title;
  }).join(' ');
}

function findWood(array) {
  return array.filter(function(object){
    if(object.materials.indexOf('wood') !== -1) {
      return object;
    }
  }).map(function(object){
    return object.title;
  }).join(' ');
}

function eightMore(array) {
  return array.filter(function(object){
    if(object.materials.length >= 7) {
      return object;
    }
  }).map(function(object){
    return object.title + ' has ' + (object.materials.length + 1) +
     ' materials: ' + object.materials.map(function(material) {
       return material;
     });
  });
}

function iMade(array) {
  return array.filter(function(object) {
    if(object.who_made === 'i_did') {
      return object;
    }
  }).length + ' items were made by their owner';
}

ans1.textContent = avg(items);
ans2.textContent = priceRange(items);
ans3.textContent = findGBP(items);
ans4.textContent = findWood(items);
ans5.textContent = eightMore(items);
ans6.textContent = iMade(items);
















//
