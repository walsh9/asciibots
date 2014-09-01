/*! asciibots.js - v1.0 - 2014-08-31 
 **  https://walsh9.github.io/asciibots
 **  Copyright (c) 2014 Matthew Walsh; Licensed under MIT license. */
var Asciibots = (function() {
    robots = {
        "templates": {
            "0": "     ___T_     \n    | o o |    \n    |__-__|    \n    /| []|\\    \n  ()/|___|\\()  \n     |_|_|     \n     /_|_\\     ",
            "1": "    \\.===./    \n    | b d |    \n     \\_=_/     \n  o==|ooo|==o  \n     |___|     \n    .'._.'.    \n    |_| |_|    ",
            "2": "     o___o     \n    //0-0\\\\    \n    |\\_-_/|    \n    /|(\\)|\\    \n   d |___| b   \n    . \\_/  .   \n   . .:::.. .  ",
            "3": "     T___      \n     |[o]|     \n     \\_-_/     \n  7--|=0=|--<  \n     |___|     \n     // \\\\     \n    _\\\\ //_    ",
            "4": "      )_(      \n     |ooo|     \n     |_#_|     \n .-._/___\\_.-. \n ;   \\___/   ; \n     (   )     \n    __) (__    ",
            "5": "     |---|     \n     |6=6|     \n     |_o_|     \n}-. /\\--o/\\ .-{\n   \" |___| \"   \n      .\".      \n      |_|      ",
            "6": "     .---.     \n    } - - {    \n     \\_0_/     \n   .=[::+]=.   \n ]=' [___] '=[ \n     /| |\\     \n    [_] [_]    ",
            "7": "      Y__      \n    _/o o\\_    \n     \\_o_/     \n )=o=|L88|=o=( \n )=o=|___|=o=( \n  .  /___\\  .  \n. ..:::::::.  .",
            "8": "     .===.     \n    //d d\\\\    \n    \\\\_u_//    \n    ,=|x|=.    \n    'c/_\\  'c  \n     /| |\\     \n    (0) (0)    ",
            "9": "     _._._     \n    -)o o(-    \n     \\_=_/     \n()ooo|\\=/|ooo()\n     |___|     \n      |_|      \n     (ooo)     ",
            "a": "    .=._,=.    \n   ' (q q) `   \n     _)-(_     \n.'c .\"|_|\". n`.\n'--'  /_\\  `--'\n    _// \\\\_    \n   /_o| |o_\\   ",
            "b": "      .-.      \n   ._(u u)_.   \n     (_-_)     \n   .=(+++)=.   \no=\"  (___)  \"=o\n     (_|_)     \n     (o|o)     ",
            "c": "     ,_,_,     \n     \\9 9/     \n     /_-_\\     \n   ,\"|+  |\".   \n   _\\|+__|/_   \n     /  |      \n    _\\  |_     ",
            "d": "     .===./`   \n    /.n n.\\    \n    \"\\_=_/\"    \n  (m9\\:::/\\    \n     /___\\6    \n     [] []     \n    /:] [:\\    ",
            "e": "      __i      \n     [p q]     \n      ]-[      \n >===]__o[===< \n     [o__]     \n     ]| |[     \n    [_| |_]    ",
            "f": "   _ _,_,_ _   \n   \\( q p )/   \n     \\_\"_/     \n  .==|>o<|==:=L\n  '=c|___|     \n     /7 [|     \n   \\/7  [|_    "
        },
        "spareParts": {
            "eyes": {
                "0": "o o",
                "1": "p q",
                "2": "q p",
                "3": "d b",
                "4": "b d",
                "5": "ooo",
                "6": "[o]",
                "7": "9 9",
                "8": "6=6",
                "9": "u u",
                "a": "n n",
                "b": "q q",
                "c": "d d",
                "d": "- -",
                "e": "0 0",
                "f": "O O"
            },
            "mouths": {
                "0": "-",
                "1": "=",
                "2": "o",
                "3": "O",
                "4": "0",
                "5": "#",
                "6": "u",
                "7": "v",
                "8": "n",
                "9": "r",
                "a": "`",
                "b": "^",
                "c": "A",
                "d": "@",
                "e": "e",
                "f": "E"
            }
        }
    };
    var idHelper = {
        isValid: function(id, minlength, maxlength, radix) {
            var range = "",
                idPattern;
            if (radix < 2 || radix > 36) {
                throw new RangeError("radix must be an integer at least 2 and no greater than 36");
            } else if (radix <= 10) {
                range = "0-" + String(radix - 1);
            } else {
                range = "0-9a-" + (radix - 1).toString(radix);
            }
            idPattern = new RegExp("^[" + range + "]{" + minlength + "," + maxlength + "}$");
            return (id && idPattern.test(id.toLowerCase()));
        },
        random: function(length, radix) {
            var id = "";
            for (var i = length; i > 0; i--) {
                id = id + Math.floor(Math.random() * radix).toString(radix);
            }
            return id;
        }
    };
    var oneBot = function(id) {
        var botIdDigits = idHelper.isValid(id, 3, 5, 16) ? id.split("") : idHelper.random(5, 16).split(""),
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
    };
    var replaceParts = function(id, botString, parts, x, y) {
        var lines = botString.split("\n"),
            newPart = parts[id];
        lines[y] = lines[y].slice(0, x) + newPart + lines[y].slice(x + newPart.length);
        return lines.join("\n");
    };
    var botSplit = function(botString) {
        var splitBot = [];
        splitBot[0] = botString.split("\n").slice(0, 3).join("\n") + "\n";
        splitBot[1] = botString.split("\n").slice(3, 5).join("\n") + "\n";
        splitBot[2] = botString.split("\n").slice(5, 7).join("\n");
        return splitBot;
    };
    return {
        bot: oneBot
    };
})();
