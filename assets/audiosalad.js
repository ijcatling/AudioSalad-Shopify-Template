jQuery(document).ready(function(){
  $('a.as-popup').click(function(e){
    e.preventDefault();
    ASpopUp($(this).attr('href'));
  });
});


function ASpopUp(URL) {
  day = new Date();
  id = day.getTime();
  eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=365,height=420');");
}