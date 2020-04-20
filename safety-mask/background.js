chrome.notifications.onButtonClicked.addListener(function() {
  var location ='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public';
  chrome.tabs.create({active: true, url: location});
});
