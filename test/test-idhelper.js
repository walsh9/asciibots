QUnit.module( "idhelper" );
QUnit.test( "Valid ids are considered valid", function( assert ) {
  assert.ok( idHelper.isValid("999", 3, 3, 10) );
  assert.ok( idHelper.isValid("999", 3, 5, 10) );
  assert.ok( idHelper.isValid("abc", 1, 3, 13) );
  assert.ok( idHelper.isValid("01101001", 8, 8, 2) );
  assert.ok( idHelper.isValid("fff", 3, 3, 16) );
  assert.ok( idHelper.isValid("FFF", 3, 3, 16) );
  assert.ok( idHelper.isValid("z", 1, 3, 36) );
  assert.ok( idHelper.isValid("0", 1, 100, 2) );
  assert.ok( idHelper.isValid("012012", 6, 6, 3) );
  assert.ok( idHelper.isValid("01234567", 6, 8, 8) );
});

QUnit.test( "Invalid ids are considered invalid", function( assert ) {
  assert.ok( !idHelper.isValid("9-9", 3, 5, 10) );
  assert.ok( !idHelper.isValid("99", 3, 5, 10) );
  assert.ok( !idHelper.isValid("999999", 3, 5, 10) );
  assert.ok( !idHelper.isValid("###", 3, 5, 10) );
  assert.ok( !idHelper.isValid("fff", 3, 3, 10) );
  assert.ok( !idHelper.isValid("fff", 3, 3, 15) );
  assert.ok( !idHelper.isValid("zzz", 3, 3, 35) );
  assert.ok( !idHelper.isValid("", 1, 3, 35) );
  assert.ok( !idHelper.isValid("10201", 1, 4, 10) );
  assert.ok( !idHelper.isValid(undefined, 1, 3, 35) );
});

QUnit.test( "Invalid radix throws exception (isValid)", function( assert ) {
  assert.throws( function() { idHelper.isValid("999", 3, 5, 1) } );
  assert.throws( function() { idHelper.isValid("999", 3, 5, 37) } );
});

QUnit.test( "Invalid radix throws exception (random)", function( assert ) {
  assert.throws( function() { idHelper.random(20, 1) } );
  assert.throws( function() { idHelper.random(20, 37) } );
});

QUnit.test( "Random generates valid Ids", function( assert ) {
  function countValidIds(iterations, idlength, idradix, pattern) {
    var count = 0;
    for (var i = 0; i < iterations; i++) {
      var id = idHelper.random(idlength, idradix) 
      if ( pattern.test(id) ) {
          count++;
      }
    }
    return count;
  }
  var iterations = 1000;
  assert.equal( countValidIds(iterations, 10, 10, /^[0-9]{10}$/), iterations );
  assert.equal( countValidIds(iterations, 10, 16, /^[0-9a-f]{10}$/), iterations );
  assert.equal( countValidIds(iterations, 16, 2, /^[0-1]{16}$/), iterations );
  assert.equal( countValidIds(iterations, 50, 36, /^[0-9a-z]{50}$/), iterations );
});

QUnit.test( "Random generates all ids within a range", function( assert ) {
  // Create object of all possible ids.
  var allNumbers = [];
  for ( var i = 0x0; i <= 0xfff; i++ ) {
    var n = (i + 0x1000).toString(16).slice(1, 6);
    allNumbers.push(n);
  };
  // Play "darts" until all ids are gone.
  var tries = 0;
  while (allNumbers.length > 0 && tries < 100000 ) {
    tries++;
    var random = idHelper.random(3,16); 
    allNumbers = allNumbers.filter( function(n) { return (n != random); } );
  };
  console.log(tries);
  assert.equal( allNumbers.length, 0 );
});
