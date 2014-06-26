(function($) {

  $.fn.asciibot = function(botId) {
    return this.each(function() {
      $(this).text(oneBot(botId));
      return this;
    });
  };

  robots = {
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
      "9": "     _._._\n    -)o o(-\n     \\_=_/\n()ooo|\\=/|ooo()\n     |___|\n      |_|\n     (ooo)",
      "a": "    .=._,=.\n   ' (q q) `\n     _)-(_\n.'c .\"|_|\". n`.\n'--'  /_\\  `--'\n    _// \\\\_\n   /_o| |o_\\",
      "b": "      .-.\n   ._(u u)_.\n     (_-_)\n   .=(+++)=.\no=\"  (___)  \"=o\n     (_|_)\n     (o|o)",
      "c": "     ,_,_,\n     \\9 9/\n     /_-_\\ \n   ,\"|+  |\".\n   _\\|+__|/_\n     /  |\n    _\\  |_",
      "d": "     .===./`\n    /.n n.\\\n    \"\\_=_/\"\n  (m9\\:::/\\\n     /___\\6\n     [] []\n    /:] [:\\",
      "e": "      __i\n     [p q]\n      ]-[ \n >===]__o[===<\n     [o__]\n     ]| |[\n    [_| |_]",
      "f": "   _ _,_,_ _\n   \\( q p )/\n     \\_\"_/\n  .==|>o<|==:=L\n  '=c|___|\n     /7 [|\n   \\/7  [|_"
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
    return (id && (/^[0-9a-f]{3}$/).test(id));
  }

  function randomId() {
    return Math.floor(Math.random() * 0xfff + 0x1000).toString(16).slice(1, 4);
  }

  function botSplit(botString) {
    var splitBot = [];
    splitBot[0] = botString.split("\n").slice(0, 3).join("\n") + "\n";
    splitBot[1] = botString.split("\n").slice(3, 5).join("\n") + "\n";
    splitBot[2] = botString.split("\n").slice(5, 7).join("\n");
    return splitBot;
  }
}(jQuery));
