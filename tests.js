// All constant variables could be removed, but I have decided to do it in several lines and constants to make the code clearer and not saturated lines.

// Test all cases
test("Example", function(assert) {
  // Test case 1
  assert.propEqual(convertIntegerToRoman(1), { value: 'I', message: '', result: true }, 'Test Case 1');

  // Test case 2
  assert.propEqual(convertIntegerToRoman(9), { value: 'IX', message: '', result: true }, 'Test Case 2');

  // Test case 3
  assert.propEqual(convertIntegerToRoman(49), { value: 'XLIX', message: '', result: true }, 'Test Case 3');

  // Test case 4
  assert.propEqual(convertIntegerToRoman(1984), { value: 'MCMLXXXIV', message: '', result: true }, 'Test Case 4');

  // Test case 5
  assert.propEqual(convertIntegerToRoman(3999), { value: 'MMMCMXCIX', message: '', result: true }, 'Test Case 5');

  // Test case 6
  assert.propEqual(convertIntegerToRoman(0), { value: '', message: 'Invalid input', result: false }, 'Test Case 6');

  // Test case 7
  assert.propEqual(convertIntegerToRoman(4000), { value: '', message: 'Invalid input', result: false }, 'Test Case 7');

  // Test case 8
  assert.propEqual(convertIntegerToRoman(3999), { value: 'MMMCMXCIX', message: '', result: true }, 'Test Case 8 with integer that has a 9');

  // Test case 9
  assert.propEqual(convertRomanToInteger('I'), { value: 1, message: '', result: true }, 'Test Case 9');

  // Test case 10
  assert.propEqual(convertRomanToInteger('IX'), { value: 9, message: '', result: true }, 'Test Case 10');

  // Test case 11
  assert.propEqual(convertRomanToInteger('XLIX'), { value: 49, message: '', result: true }, 'Test Case 11');

  // Test case 12
  assert.propEqual(convertRomanToInteger('MCMLXXXIV'), { value: 1984, message: '', result: true }, 'Test Case 12');

  // Test case 13
  assert.propEqual(convertRomanToInteger('MMMCMXCIX'), { value: 3999, message: '', result: true }, 'Test Case 13');

  // Test case 14
  assert.propEqual(convertRomanToInteger('ABC'), { value: 0, message: 'Invalid Roman numeral', result: false }, 'Test Case 14');

  // Test case 15
  assert.propEqual(convertRomanToInteger(''), { value: 0, message: 'Empty input', result: false }, 'Test Case 15');
});

