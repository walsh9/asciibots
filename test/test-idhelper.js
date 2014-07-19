QUnit.module( "idhelper" );
QUnit.test( "Valid ids are considered valid", function( assert ) {
  assert.ok( idHelper.isValid("999", 3, 3, 10) );
  assert.ok( idHelper.isValid("999", 3, 5, 10) );
  assert.ok( idHelper.isValid("abc", 1, 3, 13) );
  assert.ok( idHelper.isValid("01101001", 8, 8, 2) );
  assert.ok( idHelper.isValid("fff", 3, 3, 16) );
  assert.ok( idHelper.isValid("FFF", 3, 3, 16) );
  assert.ok( idHelper.isValid("z", 1, 3, 36) );
});

QUnit.test( "Invalid ids are considered valid", function( assert ) {
  assert.ok( !idHelper.isValid("9-9", 3, 5, 10) );
  assert.ok( !idHelper.isValid("99", 3, 5, 10) );
  assert.ok( !idHelper.isValid("999999", 3, 5, 10) );
  assert.ok( !idHelper.isValid("###", 3, 5, 10) );
  assert.ok( !idHelper.isValid("fff", 3, 3, 10) );
  assert.ok( !idHelper.isValid("fff", 3, 3, 15) );
  assert.ok( !idHelper.isValid("zzz", 3, 3, 35) );
  assert.ok( !idHelper.isValid("", 1, 3, 35) );
});