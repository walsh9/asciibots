
var idHelper = {

  isValid: function (id, minlength, maxlength, radix) {
    var range = "";
    if (radix < 2 || radix > 36) {
      throw "RangeError: radix must be an integer at least 2 and no greater than 36";
    } else if (radix <= 10) {
      range = "0-" + radix - 1;
    } else {
      range = "0-9a-" + (radix - 1).toString(radix);
    }
    var re = new RegExp("^[" + range + "]{" + minlength + "," + maxlength + "}$");
    return re.test(id);
  },

  random: function (length, radix) {
    var id = "";
    for (var i = length; i > 0; i--) {
      id = id + Math.floor(Math.random() * radix).toString(radix);
    }
    return id;
  }

};