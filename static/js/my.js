function Today(){
  return moment.tz(new Date(),"America/Los_Angeles").format("YYYY-MM-DD");
}
function LocalTime(x){
  var y = new Date(x)
  return y.toLocaleTimeString([], {hour: '2-digit',minute: '2-digit'})
}
function GetLogo(x,y){
  let mlbt = ["OAK", "PIT", "SD", "SEA", "SF", "STL", "TB", "TEX", "TOR", "MIN", "PHI", "ATL", "CWS", "MIA", "NYY", "MIL", "LAA", "ARI", "BAL", "BOS", "CHC", "CIN", "CLE", "COL", "DET", "HOU", "KC", "LAD", "WSH", "NYM"];
  let nhlt = ["NJD", "NYI", "NYR", "PHI", "PIT", "BOS", "BUF", "MTL", "OTT", "TOR", "CAR", "FLA", "TBL", "WSH", "CHI", "DET", "NSH", "STL", "CGY", "COL", "EDM", "VAN", "ANA", "DAL", "LAK", "SJS", "CBJ", "MIN", "WPG", "ARI", "VGK"];
  if (y == null)
  y = 'nhl';
  if(y=='nhl' && !nhlt.includes(x))
  return 'https://a4.espncdn.com/combiner/i?img=/i/espn/misc_logos/500/nhl.png';
  if(y=='mlb' && !mlbt.includes(x))
  return 'https://a4.espncdn.com/combiner/i?img=/i/espn/misc_logos/500/mlb.png';
  switch (x) {
    default: break;
    case 'LAK':x = "la";break;
    case 'TBL':x = "tb";break;
    case 'NJD':x = "nj";break;
    case 'SJS':x = "sj";break;
    case 'VGK':x = "vgs";break;
    case 'CWS':x = "chw";break;
  }
  return 'http://a1.espncdn.com/combiner/i?img=/i/teamlogos/'+y+'/500/scoreboard/'+x+'.png';
}

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-125822077-1');
