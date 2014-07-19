  function oneBot(id) {
    var botIdDigits = idHelper.isValid(id,3,5,16) ? id.split("") : idHelper.random  (5,16).split(""),
      botString = botSplit(robots.templates[botIdDigits[botIdDigits.length - 3]])[0] +
      botSplit(robots.templates[botIdDigits[botIdDigits.length - 2]])[1] +
      botSplit(robots.templates[botIdDigits[botIdDigits.length - 1]])[2];
      if (botIdDigits.length >= 4) {
        botString = replaceParts(botIdDigits[botIdDigits.length - 4], botString, robots.spareParts.eyes, 6, 1);
      }
      if (botIdDigits.length >= 5) {
        botString = replaceParts(botIdDigits[botIdDigits.length - 5], botString, robots.spareParts.mouths, 7, 2);
      }
    return botString;
  }

  function replaceParts(id, botString, parts, x, y) {
    lines = botString.split("\n");
    newPart = parts[id];
    lines[y] = lines[y].slice(0, x) + newPart + lines[y].slice(x + newPart.length);
    return lines.join("\n");
  }

  function botSplit(botString) {
    var splitBot = [];
    splitBot[0] = botString.split("\n").slice(0, 3).join("\n") + "\n";
    splitBot[1] = botString.split("\n").slice(3, 5).join("\n") + "\n";
    splitBot[2] = botString.split("\n").slice(5, 7).join("\n");
    return splitBot;
  }