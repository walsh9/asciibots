# ASCII Robot Generator

Based on [1k ASCII Mini Robot Factory](https://github.com/walsh9/1k-ASCII-Robots), but written in readable modern Javascript, without the constraints of fittitng into 1k.

Inspired by the classic Tomy Pocket Game, [Robot Factory](http://www.masters.me.uk/pocketeers/Htm-Designs/flipflopfaces.htm), the code generates robots using parts from the models below:

       #MRF-000       #MRF-111       #MRF-222       #MRF-333       #MRF-444
        "Finn"         "Glork"        "Tilde"        "Scone"        "Flrrx"
         ___T_         \.===./         o___o          T___            )_(
        | o o |        | b d |        //0-0\\         |[o]|          |ooo|
        |__-__|         \_=_/         |\_-_/|         \_-_/          |_#_|
        /| []|\      o==|ooo|==o      /|(\)|\      7--|=0=|--<   .-._/___\_.-.
      ()/|___|\()       |___|        d |___| b        |___|      :"  \___/  ";
         |_|_|         .'._.'.        . \_/  .        // \\          (   )
         /_|_\         |_| |_|       . .:::.. .      _\\ //_        __) (__

       #MRF-555       #MRF-666       #MRF-777       #MRF-888       #MRF-999
       "Wheldon"       "Omex"        "Ruffle"        "Sirn"         "Tozar"
         |---|          .---.           Y__           .===.          _._._
         |6=6|         } - - {        _/o o\_        //d d\\        -)o o(-
         |_o_|          \_0_/          \_o_/         \\_u_//         \_=_/
    }-. /\--o/\ .-{   .=[::+]=.    )=o=|L88|=o=(     ,=|x|=.    ()ooo|\=/|ooo()
       " |___| "    ]=' [___] '=[  )=o=|___|=o=(     'c/_\  'c       |___|
          .".           /| |\       .  /___\  .       /| |\           |_|
          |_|          [_] [_]    . ..:::::::.  .    (0) (0)         (ooo)

# Usage

Include the script in your page.

`<script src="asciibots.js"></script>`

Call the `.bot()` method on the `Asciibots` object with a specific 3-digit ID to get a particular combination as a text string. The first digit indcates the robot's head, the second, its body, and the third, its legs or whatever. See above for reference. 

For example:

`Asciibots.bot('012')`

Always results in

        ___T_     
       | o o |    
       |__-__|    
     o==|ooo|==o  
        |___|     
       . \_/  .   
      . .:::.. .   

Call the .bot() method with no parameters to get a random robot as a text string.

`Asciibots.bot()`

Has a 1/1000 chance of producing

         T___      
         |[o]|     
         \_-_/     
    ()ooo|\=/|ooo()
         |___|     
         // \\     
        _\\ //_    

Or any other combination. If you don't specify a parameter it's random!

## License

The 1k ASCII Mini Robot Factory is licensed under the MIT License.
