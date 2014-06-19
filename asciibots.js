var Asciibots = (function () {

  var robots = [
"     ___T_     \n" +
"    | o o |    \n" +
"    |__-__|    \n" +
"    /| []|\\    \n" +
"  ()/|___|\\()  \n" +
"     |_|_|     \n" +
"     /_|_\\     ",
"    \\.===./    \n" +
"    | b d |    \n" +
"     \\_=_/     \n" +
"  o==|ooo|==o  \n" +
"     |___|     \n" +
"    .'._.'.    \n" +
"    |_| |_|    \n",
"     o___o     \n" +
"    //0-0\\\\    \n" +
"    |\\_-_/|    \n" +
"    /|(\\)|\\    \n" +
"   d |___| b   \n" +
"    . \\_/  .   \n" +
"   . .:::.. .  ",
"     T___      \n" +
"     |[o]|     \n" +
"     \\_-_/     \n" +
"  7--|=0=|--<  \n" +
"     |___|     \n" +
"     // \\\\     \n" +
"    _\\\\ //_    ",
"      )_(      \n" +
"     |ooo|     \n" +
"     |_#_|     \n" +
" .-._/___\\_.-. \n" +
" :\"  \\___/  \"; \n" +
"     (   )     \n" +
"    __) (__    ",
"     |---|     \n" +
"     |6=6|     \n" +
"     |_o_|     \n" +
"}-. /\\--o/\\ .-{\n" +
"   \" |___| \"   \n" +
"      .\".      \n" +
"      |_|      ",
"     .---.     \n" +
"    } - - {    \n" +
"     \\_0_/     \n" +
"   .=[::+]=.   \n" +
" ]=' [___] '=[ \n" +
"     /| |\\     \n" +
"    [_] [_]    ",
"      Y__      \n" +
"    _/o o\\_    \n" +
"     \\_o_/     \n" +
" )=o=|L88|=o=( \n" +
" )=o=|___|=o=( \n" +
"  .  /___\\  .  \n" +
". ..:::::::.  .",
"     .===.     \n" +
"    //d d\\\\    \n" +
"    \\\\_u_//    \n" +
"    ,=|x|=.    \n" +
"    'c/_\\  'c  \n" +
"     /| |\\     \n" +
"    (0) (0)    ",
"     _._._     \n" +
"    -)o o(-    \n" +
"     \\_=_/     \n" +
"()ooo|\\=/|ooo()\n" +
"     |___|     \n" +
"      |_|      \n" +
"     (ooo)     "
  ];

  function escapeHtml( str ) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function myBot( id ) {
    var botId = (id && (/^\d{3}$/).test(id)) ? String(1000 + parseInt(id, 10)) : String(Math.floor(Math.random() * 999 + 1000)),
        sensors = robots[botId.charAt(1)].split("\n").slice(0, 3).join("\n"),
        chassis = robots[botId.charAt(2)].split("\n").slice(3, 5).join("\n"),
        mobility = robots[botId.charAt(3)].split("\n").slice(5, 7).join("\n"),
        botString = sensors + "\n" + chassis + "\n" + mobility;
    return botString;
  }

  return {
    bot: myBot
  };

})();