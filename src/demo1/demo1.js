(function() {
    var botId = "00000";
    randomize();

    function updateView() {
        for (var i = 0; i < 5; i++) {
            document.getElementById("bot" + i).textContent = botId.split("")[i];
        }
        document.getElementById("botid").textContent = botId;
        document.getElementById("robot").textContent = Asciibots.bot(botId);
    }

    function inc(index) {
        var digit = String(botId.charAt(index));
        digit = ((parseInt(digit, 16) + 17) % 16).toString(16);
        botId = botId.slice(0, index) + "" + digit + "" + botId.slice(index + 1);
        updateView();
    }

    function dec(index) {
        var digit = botId.charAt(index);
        digit = ((parseInt(digit, 16) + 15) % 16).toString(16);
        botId = String(botId.slice(0, index)) + digit + String(botId.slice(index + 1));
        updateView();
    }

    function randomize() {
        botId = Math.floor(Math.random() * 0xfffff + 0x100000).toString(16).slice(1, 6);
        updateView();
    }

    for (var i = 0; i < 5; i++) {
        (function(index) {
            document.getElementById("dec" + index).addEventListener("click", function() {
                dec(index)
            });
            document.getElementById("inc" + index).addEventListener("click", function() {
                inc(index)
            });
        }(i));
    }
    document.getElementById("random").addEventListener("click", randomize);
}());
