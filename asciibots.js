var Asciibots = (function () {

  var robots = { 
"templates" : {
"0": [
"     ___T_\n" +
"    | o o |\n" +
"    |__-__|\n",
"    /| []|\\\n" +
"  ()/|___|\\()\n",
"     |_|_|\n" +
"     /_|_\\"],
"1": [
"    \\.===./\n" +
"    | b d |\n" +
"     \\_=_/\n",
"  o==|ooo|==o\n" +
"     |___|\n",
"    .'._.'.\n" +
"    |_| |_|\n"],
"2": [
"     o___o\n" +
"    //0-0\\\\\n" +
"    |\\_-_/|\n",
"    /|(\\)|\\\n" +
"   d |___| b\n",
"    . \\_/  .\n" +
"   . .:::.. ."],
"3": [
"     T___\n" +
"     |[o]|\n" +
"     \\_-_/\n",
"  7--|=0=|--<\n" +
"     |___|\n",
"     // \\\\\n" +
"    _\\\\ //_"],
"4": [
"      )_(\n" +
"     |ooo|\n" +
"     |_#_|\n",
" .-._/___\\_.-.\n" +
" :\"  \\___/  \";\n",
"     (   )\n" +
"    __) (__"],
"5": [
"     |---|\n" +
"     |6=6|\n" +
"     |_o_|\n",
"}-. /\\--o/\\ .-{\n" +
"   \" |___| \"\n",
"      .\".\n" +
"      |_|"],
"6": [
"     .---.\n" +
"    } - - {\n" +
"     \\_0_/\n",
"   .=[::+]=.\n" +
" ]=' [___] '=[\n",
"     /| |\\\n" +
"    [_] [_]"],
"7": [
"      Y__\n" +
"    _/o o\\_\n" +
"     \\_o_/\n",
" )=o=|L88|=o=(\n" +
" )=o=|___|=o=(\n",
"  .  /___\\  .\n" +
". ..:::::::.  ."],
"8": [
"     .===.\n" +
"    //d d\\\\\n" +
"    \\\\_u_//\n",
"    ,=|x|=.\n" +
"    'c/_\\  'c\n",
"     /| |\\\n" +
"    (0) (0)"],
"9": [
"     _._._\n" +
"    -)o o(-\n" +
"     \\_=_/\n",
"()ooo|\\=/|ooo()\n" +
"     |___|\n",
"      |_|\n" +
"     (ooo)"]
  }
};

  function escapeHtml( str ) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function myBot( id ) {
    var botId = (id && (/^\d{3}$/).test(id)) ? String(1000 + parseInt(id, 10)) : String(Math.floor(Math.random() * 999 + 1000)),
        botString = robots.templates[botId.charAt(1)][0] +
                    robots.templates[botId.charAt(2)][1] +
                    robots.templates[botId.charAt(3)][2];
    return botString;
  }

  return {
    bot: myBot
  };

})();