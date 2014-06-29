  function oneBot(id) {
    var botIdDigits = isValidId(id) ? id.split("") : randomId().split(""),
      botString = botSplit(robots.templates[botIdDigits[0]])[0] +
      botSplit(robots.templates[botIdDigits[1]])[1] +
      botSplit(robots.templates[botIdDigits[2]])[2];
      if (botIdDigits.length >= 4) {
        botString = replaceParts(botIdDigits[botIdDigits.length - 4], botString, robots.spareParts.eyes, 6, 1);
      }
      if (botIdDigits.length >= 5) {
        botString = replaceParts(botIdDigits[botIdDigits.length - 5], botString, robots.spareParts.mouths, 7, 2);
      }
    return botString;
  }

  function isValidId(id) {
    return (id && (/^[0-9a-f]{3,5}$/).test(id));
  }

  function randomId() {
    return Math.floor(Math.random() * 0xfffff + 0x100000).toString(16).slice(1, 6);
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
