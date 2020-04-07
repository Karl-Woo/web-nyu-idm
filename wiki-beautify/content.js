var elts = document.getElementsByTagName('p');

for (var i = 0; i < elts.length; i++) {

  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var j = 0; j < 6; j++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  elts[i].style['background-color'] = color ;
}
