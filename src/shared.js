;

  function oneBot( id ) {
    var botIdDigits = isValidId(id) ? id.split("") : randomId().split(""),
        botString = botSplit( robots.templates[botIdDigits[0]] )[0] +
                    botSplit( robots.templates[botIdDigits[1]] )[1] +
                    botSplit( robots.templates[botIdDigits[2]] )[2];
    return botString;
  }

  function isValidId ( id ) {
    return  (id && (/^\d{3}$/).test(id));
  }

  function randomId () {
    return String(Math.floor(Math.random() * 999 + 1000)).slice(1,4);
  }

  function botSplit ( botString ) {
    var splitBot = [];
    splitBot[0] = botString.split("\n").slice(0,3).join("\n") + "\n";
    splitBot[1] = botString.split("\n").slice(3,5).join("\n") + "\n";
    splitBot[2] = botString.split("\n").slice(5,7).join("\n");
    return splitBot;
  }