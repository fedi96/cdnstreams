function Today(){
    return moment.tz(new Date(),"America/Los_Angeles").format("YYYY-MM-DD");
  }
function LocalTime(x){
    var y = new Date(x)
    return y.toLocaleTimeString([], {hour: '2-digit',minute: '2-digit'})
  }
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-125822077-1');
