var links = document.getElementsByTagName("a");
for(var i = 0; i < links.length; i++)
{
  if((links[i].href.indexOf("https://steamcommunity.com/") !== -1) || (links[i].href.indexOf("http://steamcommunity.com/") !== -1) || (links[i].href.indexOf("https://store.steampowered.com/") !== -1) || (links[i].href.indexOf("http://store.steampowered.com/") !== -1))
  {
    links[i].href = "steam://openurl/" + links[i].href;
  }
}