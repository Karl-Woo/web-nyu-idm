document.addEventListener('DOMContentLoaded', function () {
    var links = document.getElementsByTagName("a");
    for (var i = 0; i < links.length; i++) {
        (function () {
            var ln = links[i];
            var location = ln.href;
            ln.onclick = function () {
                chrome.tabs.create({active: true, url: location});
            };
        })();
    }
})

function search(){
  var x =  document.getElementById("state").value;
  var location ='https://coronavirusapi.com/state/'+ x;
  chrome.tabs.create({active: true, url: location});
}

function news(){
  var location ='https://www.nytimes.com/2020/04/20/world/coronavirus-cases-news.html';
  chrome.tabs.create({active: true, url: location});
}

function tip() {
  var k=Math.floor(Math.random() * 12);

  if (k==0){
    var a="Wash your hands frequently";
    var b="Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water.";
  }
  else if (k==1){
    var a="Maintain social distancing";
    var b="Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.";
  }
  else if (k==2){
    var a="Avoid touching eyes, nose and mouth";
    var b="Hands touch many surfaces and can pick up viruses. Once contaminated, hands can transfer the virus to your eyes, nose or mouth.";
  }
  else if (k==3){
    var a="Practice respiratory hygiene";
    var b="Make sure you, and the people around you, follow good respiratory hygiene.";
  }
  else if (k==4){
    var a="If you have fever, cough and difficulty breathing, seek medical care early";
    var b="Stay home if you feel unwell. If you have a fever, cough and difficulty breathing, seek medical attention and call in advance.";
  }
  else if (k==5){
    var a="Make TV time active time";
    var b="Do a few simple exercises like jumping jacks or walking in place, or by doing stretches in front of the screen.";
  }
  else if (k==6){
    var a="Advice on shopping";
    var b="Stock your kitchen with ingredients for easy-to-prepare meals.";
  }
  else if (k==7){
    var a="Keep a Consistent Sleep Schedule";
    var b="Stick to the same wake time and bedtime are crucial aspects of self-care, because those contribute to sleep quality.";
  }
  else if (k==8){
    var a="Create a Home-to-School ‘Commute’";
    var b="In the same way that getting showered and dressed is a message to your brain, so is having a home-to-work commute.";
  }
  else if (k==9){
    var a="Carve Out a Designated Workspace";
    var b="It's very helpful to have a space that you assign as your work area, even if that means a corner of the kitchen table.";
  }
  else if (k==9){
    var a="Build Breaks Into Your Schedule";
    var b="Have a general grasp of what you'd like to accomplish today and when you'll tackle those projects, as well as when you'll take breaks.";
  }
  else if (k==10){
    var a="Eat a Real Lunch";
    var b="Think of eating healthy lunches as another form of self-care, because that gives you the nourishment you need to have consistent energy.";
  }
  else if (k==11){
    var a="Set a Workout Time to Reset and Refresh";
    var b="Even simply standing up and moving for a 15-minute break can lift your mood and help you process information better.";
  }

  chrome.notifications.create({
      type:     'basic',
      iconUrl:  'mask128.png',
      title:    a ,
      message:  b ,
      buttons: [
        {title: 'More Advices from WHO'}
      ],
      priority: 0});
}

document.getElementById('search').addEventListener('click', search);
document.getElementById('news').addEventListener('click', news);
document.getElementById('healthyTip').addEventListener('click', tip);
