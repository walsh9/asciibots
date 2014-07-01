# asciibots.js 

Based on [1k ASCII Mini Robot Factory](https://github.com/walsh9/1k-ASCII-Robots), but written in readable modern Javascript, without the constraints of fitting into 1k.

Inspired by the classic Tomy Pocket Game, [Robot Factory](http://www.masters.me.uk/pocketeers/Htm-Designs/flipflopfaces.htm), the code generates robots using parts from the models below:
 
       #MRF-000        #MRF-111        #MRF-222        #MRF-333
        "Finn"          "Glork"         "Tilde"         "Scone"
         ___T_          \.===./          o___o           T___
        | o o |         | b d |         //0-0\\          |[o]|
        |__-__|          \_=_/          |\_-_/|          \_-_/
        /| []|\       o==|ooo|==o       /|(\)|\       7--|=0=|--< 
      ()/|___|\()        |___|         d |___| b         |___|
         |_|_|          .'._.'.         . \_/  .         // \\
         /_|_\          |_| |_|        . .:::.. .       _\\ //_

       #MRF-444        #MRF-555        #MRF-666        #MRF-777
        "Flrrx"        "Wheldon"        "Omex"         "Ruffle" 
          )_(            |---|           .---.            Y__
         |ooo|           |6=6|          } - - {         _/o o\_
         |_#_|           |_o_|           \_0_/           \_o_/
     .-._/___\_.-.  }-. /\--o/\ .-{    .=[::+]=.     )=o=|L88|=o=(
     :"  \___/  ";     " |___| "     ]=' [___] '=[   )=o=|___|=o=(
         (   )            .".            /| |\        .  /___\  .
        __) (__           |_|           [_] [_]     . ..:::::::.  .

       #MRF-888        #MRF-999        #MRF-AAA        #MRF-BBB
        "Sirn"          "Tozar"         "Ern"           "Plux"
         .===.           _._._          .=._,=.           .-.
        //d d\\         -)o o(-        ' (q q) `       ._(u u)_.
        \\_u_//          \_=_/           _)-(_           (_-_)
        ,=|x|=.     ()ooo|\=/|ooo() .'c ."|_|". n`.    .=(+++)=.
        'c/_\  'c        |___|      '--'  /_\  `--' o="  (___)  "=o
         /| |\            |_|           _// \\_          (_|_)
        (0) (0)          (ooo)         /_o| |o_\         (o|o)

       #MRF-CCC        #MRF-DDD        #MRF-EEE        #MRF-FFF
       "Boltez"         "Tena"         "Boccle"        "Morton"
         ,_,_,           .===./`          __i          _ _,_,_ _
         \9 9/          /.n n.\          [p q]         \( q p )/
         /_-_\          "\_=_/"           ]-[            \_"_/
       ,"|+  |".      (m9\:::/\      >===]__o[===<    .==|>o<|==:=L
       _\|+__|/_         /___\6          [o__]        '=c|___|
         /  |            [] []           ]| |[           /7 [|
        _\  |_          /:] [:\         [_| |_]        \/7  [|_

# Usage

Include the script in your page.

`<script src="asciibots.js"></script>`

Call the `.bot()` method on the `Asciibots` object with a specific 3-5 hex digit ID to get a particular combination as a text string. The final three digits indcate the robot's head, its body, and its legs or whatever. See above for reference. The id may be preceded with 2 additional digits which will change its 'eyes' and 'mouth'. 

For example:

`Asciibots.bot('13059')`

Always results in:

        \.===./
        | d b |
         \_=_/
      7--|=0=|--<
         |___|
         |_|_|
         /_|_\

Call the .bot() method with no parameters to get a random robot as a text string.

`Asciibots.bot()`

Has a 1/1048576 chance of producing

         T___      
         |[o]|     
         \_-_/     
    ()ooo|\=/|ooo()
         |___|     
         // \\     
        _\\ //_    

Or any other combination. If you don't specify a parameter it's random!

#jQuery Plugin

There's also a jQuery plugin.  This adds the `asciibot()` method to jQuery objects. When you call the `asciibot()` method it will set the text contents of each matched element to an ASCII robot.  Same as the vanilla Javascript version, if you pass a 3-5 digit hex string you will get a specific robot.  If you leave the parameters empty you will get a random robot.

## License

asciibots.js is licensed under the MIT License.
