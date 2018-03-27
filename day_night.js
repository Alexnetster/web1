var links = {
  changeColor: function(textColor) {
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length) {
         console.log(alist[i]);
         alist[i].style.color = textColor;
         i = i + 1;
      }
    }
}
var body = {
  changeColor: function(color)
  {
    var target = document.querySelector('body');
    target.style.color = color;
  },
  changeBGColor: function(color)
  {
    var target = document.querySelector('body');
    target.style.backgroundColor = color;
  }
}
function nightdayhandler(self) {
  if(self.value === 'day') {
    body.changeBGColor('white');
    body.changeColor('black');
    self.value = 'night';

    links.changeColor('powderblue');
  }
  else {
    body.changeBGColor('black');
    body.changeColor('white');
    self.value = 'day';

    links.changeColor('yellow');
  }
}
