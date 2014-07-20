QUnit.module( "asciibots" );
QUnit.test( "Default bots are valid", function( assert ) {
    assert.equal(Asciibots.bot("000"), "     ___T_     \n    | o o |    \n    |__-__|    \n    /| []|\\    \n  ()/|___|\\()  \n     |_|_|     \n     /_|_\\     ");
    assert.equal(Asciibots.bot("111"), "    \\.===./    \n    | b d |    \n     \\_=_/     \n  o==|ooo|==o  \n     |___|     \n    .'._.'.    \n    |_| |_|    ");
    assert.equal(Asciibots.bot("222"), "     o___o     \n    //0-0\\\\    \n    |\\_-_/|    \n    /|(\\)|\\    \n   d |___| b   \n    . \\_/  .   \n   . .:::.. .  ");
    assert.equal(Asciibots.bot("333"), "     T___      \n     |[o]|     \n     \\_-_/     \n  7--|=0=|--<  \n     |___|     \n     // \\\\     \n    _\\\\ //_    ");
    assert.equal(Asciibots.bot("444"), "      )_(      \n     |ooo|     \n     |_#_|     \n .-._/___\\_.-. \n ;   \\___/   ; \n     (   )     \n    __) (__    ");
    assert.equal(Asciibots.bot("555"), "     |---|     \n     |6=6|     \n     |_o_|     \n}-. /\\--o/\\ .-{\n   \" |___| \"   \n      .\".      \n      |_|      ");
    assert.equal(Asciibots.bot("666"), "     .---.     \n    } - - {    \n     \\_0_/     \n   .=[::+]=.   \n ]=' [___] '=[ \n     /| |\\     \n    [_] [_]    ");
    assert.equal(Asciibots.bot("777"), "      Y__      \n    _/o o\\_    \n     \\_o_/     \n )=o=|L88|=o=( \n )=o=|___|=o=( \n  .  /___\\  .  \n. ..:::::::.  .");
    assert.equal(Asciibots.bot("888"), "     .===.     \n    //d d\\\\    \n    \\\\_u_//    \n    ,=|x|=.    \n    'c/_\\  'c  \n     /| |\\     \n    (0) (0)    ");
    assert.equal(Asciibots.bot("999"), "     _._._     \n    -)o o(-    \n     \\_=_/     \n()ooo|\\=/|ooo()\n     |___|     \n      |_|      \n     (ooo)     ");
    assert.equal(Asciibots.bot("aaa"), "    .=._,=.    \n   ' (q q) `   \n     _)-(_     \n.'c .\"|_|\". n`.\n'--'  /_\\  `--'\n    _// \\\\_    \n   /_o| |o_\\   ");
    assert.equal(Asciibots.bot("bbb"), "      .-.      \n   ._(u u)_.   \n     (_-_)     \n   .=(+++)=.   \no=\"  (___)  \"=o\n     (_|_)     \n     (o|o)     ");
    assert.equal(Asciibots.bot("ccc"), "     ,_,_,     \n     \\9 9/     \n     /_-_\\     \n   ,\"|+  |\".   \n   _\\|+__|/_   \n     /  |      \n    _\\  |_     ");
    assert.equal(Asciibots.bot("ddd"), "     .===./`   \n    /.n n.\\    \n    \"\\_=_/\"    \n  (m9\\:::/\\    \n     /___\\6    \n     [] []     \n    /:] [:\\    ");
    assert.equal(Asciibots.bot("eee"), "      __i      \n     [p q]     \n      ]-[      \n >===]__o[===< \n     [o__]     \n     ]| |[     \n    [_| |_]    ");
    assert.equal(Asciibots.bot("fff"), "   _ _,_,_ _   \n   \\( q p )/   \n     \\_\"_/     \n  .==|>o<|==:=L\n  '=c|___|     \n     /7 [|     \n   \\/7  [|_    ");
});

QUnit.test( "Random bots are correct height", function( assert ) {
    var iterations = 1000;
    var count = 0;
    for (var i = 0; i < iterations; i++) {
      if ( Asciibots.bot().split("\n").length == 7 ) {
            count++;
        }
    }
    assert.equal(count, iterations);
});

QUnit.test( "Bots with 4 digit ids are correct height", function( assert ) {
   assert.equal(Asciibots.bot("0000").split("\n").length, 7);
   assert.equal(Asciibots.bot("ffff").split("\n").length, 7);
});

QUnit.test( "Bots with 5 digit ids are correct height", function( assert ) {
   assert.equal(Asciibots.bot("00000").split("\n").length, 7);
   assert.equal(Asciibots.bot("fffff").split("\n").length, 7);
});