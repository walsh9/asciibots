var Asciibots = (function() {

  var robots = {
    "templates": {
      "0": "     ___T_\n    | o o |\n    |__-__|\n    /| []|\\\n  ()/|___|\\()\n     |_|_|\n     /_|_\\",
      "1": "    \\.===./\n    | b d |\n     \\_=_/\n  o==|ooo|==o\n     |___|\n    .'._.'.\n    |_| |_|",
      "2": "     o___o\n    //0-0\\\\\n    |\\_-_/|\n    /|(\\)|\\\n   d |___| b\n    . \\_/  .\n   . .:::.. .",
      "3": "     T___\n     |[o]|\n     \\_-_/\n  7--|=0=|--<\n     |___|\n     // \\\\\n    _\\\\ //_",
      "4": "      )_(\n     |ooo|\n     |_#_|\n .-._/___\\_.-.\n ;   \\___/   ;\n     (   )\n    __) (__",
      "5": "     |---|\n     |6=6|\n     |_o_|\n}-. /\\--o/\\ .-{\n   \" |___| \"\n      .\".\n      |_|",
      "6": "     .---.\n    } - - {\n     \\_0_/\n   .=[::+]=.\n ]=' [___] '=[\n     /| |\\\n    [_] [_]",
      "7": "      Y__\n    _/o o\\_\n     \\_o_/\n )=o=|L88|=o=(\n )=o=|___|=o=(\n  .  /___\\  .\n. ..:::::::.  .",
      "8": "     .===.\n    //d d\\\\\n    \\\\_u_//\n    ,=|x|=.\n    'c/_\\  'c\n     /| |\\\n    (0) (0)",
      "9": "     _._._\n    -)o o(-\n     \\_=_/\n()ooo|\\=/|ooo()\n     |___|\n      |_|\n     (ooo)"
    }
  };

  function oneBot(id) {
    var botIdDigits = isValidId(id) ? id.split("") : randomId().split(""),
      botString = botSplit(robots.templates[botIdDigits[0]])[0] +
      botSplit(robots.templates[botIdDigits[1]])[1] +
      botSplit(robots.templates[botIdDigits[2]])[2];
    return botString;
  }

  function isValidId(id) {
    return (id && (/^\d{3}$/).test(id));
  }

  function randomId() {
    return String(Math.floor(Math.random() * 999 + 1000)).slice(1, 4);
  }

  function botSplit(botString) {
    var splitBot = [];
    splitBot[0] = botString.split("\n").slice(0, 3).join("\n") + "\n";
    splitBot[1] = botString.split("\n").slice(3, 5).join("\n") + "\n";
    splitBot[2] = botString.split("\n").slice(5, 7).join("\n");
    return splitBot;
  }
  return {
    bot: oneBot
  };

})();
