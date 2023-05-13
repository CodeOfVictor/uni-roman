// All constant variables could be removed, but I have decided to do it in several lines and constants to make the code clearer and not saturated lines.

// Test all cases
test('all', function (assert) {
  // Test case 1
  const result1 = convertIntegerToRoman(1);
  const expected1 = { value: 'I', message: '', result: true };
  assert.propEqual(result1, expected1, 'Test Case 1');

  // Test case 2
  const result2 = convertIntegerToRoman(9);
  const expected2 = { value: 'IX', message: '', result: true };
  assert.propEqual(result2, expected2, 'Test Case 2');

  // Test case 3
  const result3 = convertIntegerToRoman(49);
  const expected3 = { value: 'XLIX', message: '', result: true };
  assert.propEqual(result3, expected3, 'Test Case 3');

  // Test case 4
  const result4 = convertIntegerToRoman(1984);
  const expected4 = { value: 'MCMLXXXIV', message: '', result: true };
  assert.propEqual(result4, expected4, 'Test Case 4');

  // Test case 5
  const result5 = convertIntegerToRoman(3999);
  const expected5 = { value: 'MMMCMXCIX', message: '', result: true };
  assert.propEqual(result5, expected5, 'Test Case 5');

  // Test case 6
  const result6 = convertIntegerToRoman(0);
  const expected6 = { value: '', message: 'Invalid input', result: false };
  assert.propEqual(result6, expected6, 'Test Case 6');

  // Test case 7
  const result7 = convertIntegerToRoman(4000);
  const expected7 = { value: '', message: 'Invalid input', result: false };
  assert.propEqual(result7, expected7, 'Test Case 7');

  // Test case 8
  const result8 = convertIntegerToRoman(3999);
  const expected8 = { value: 'MMMCMXCIX', message: '', result: true };
  assert.propEqual(result8, expected8, 'Test Case 8 with integer that has a 9');
  
  // Test case 9
  const result1 = convertRomanToInteger('I');
  const expected1 = { value: 1, message: '', result: true };
  assert.propEqual(result1, expected1, 'Test Case 1');

  // Test case 10
  const result2 = convertRomanToInteger('IX');
  const expected2 = { value: 9, message: '', result: true };
  assert.propEqual(result2, expected2, 'Test Case 2');

  // Test case 11
  const result3 = convertRomanToInteger('XLIX');
  const expected3 = { value: 49, message: '', result: true };
  assert.propEqual(result3, expected3, 'Test Case 3');

  // Test case 12
  const result4 = convertRomanToInteger('MCMLXXXIV');
  const expected4 = { value: 1984, message: '', result: true };
  assert.propEqual(result4, expected4, 'Test Case 4');

  // Test case 13
  const result5 = convertRomanToInteger('MMMCMXCIX');
  const expected5 = { value: 3999, message: '', result: true };
  assert.propEqual(result5, expected5, 'Test Case 5');

  // Test case 14
  const result6 = convertRomanToInteger('ABC');
  const expected6 = { value: 0, message: 'Invalid Roman numeral', result: false };
  assert.propEqual(result6, expected6, 'Test Case 6');

  // Test case 15
  const result7 = convertRomanToInteger('');
  const expected7 = { value: 0, message: 'Empty input', result: false };
  assert.propEqual(result7, expected7, 'Test Case 7');
});

// Test integer to roman
test('convertIntegerToRoman', function (assert) {
  // Test case 1
  const result1 = convertIntegerToRoman(1);
  const expected1 = { value: 'I', message: '', result: true };
  assert.propEqual(result1, expected1, 'Test Case 1');

  // Test case 2
  const result2 = convertIntegerToRoman(9);
  const expected2 = { value: 'IX', message: '', result: true };
  assert.propEqual(result2, expected2, 'Test Case 2');

  // Test case 3
  const result3 = convertIntegerToRoman(49);
  const expected3 = { value: 'XLIX', message: '', result: true };
  assert.propEqual(result3, expected3, 'Test Case 3');

  // Test case 4
  const result4 = convertIntegerToRoman(1984);
  const expected4 = { value: 'MCMLXXXIV', message: '', result: true };
  assert.propEqual(result4, expected4, 'Test Case 4');

  // Test case 5
  const result5 = convertIntegerToRoman(3999);
  const expected5 = { value: 'MMMCMXCIX', message: '', result: true };
  assert.propEqual(result5, expected5, 'Test Case 5');

  // Test case 6
  const result6 = convertIntegerToRoman(0);
  const expected6 = { value: '', message: 'Invalid input', result: false };
  assert.propEqual(result6, expected6, 'Test Case 6');

  // Test case 7
  const result7 = convertIntegerToRoman(4000);
  const expected7 = { value: '', message: 'Invalid input', result: false };
  assert.propEqual(result7, expected7, 'Test Case 7');

  // Test case 8
  const result8 = convertIntegerToRoman(3999);
  const expected8 = { value: 'MMMCMXCIX', message: '', result: true };
  assert.propEqual(result8, expected8, 'Test Case 8 with integer that has a 9');
});

// Test roman to integer
test('convertRomanToInteger', function (assert) {
  // Test case 1
  const result1 = convertRomanToInteger('I');
  const expected1 = { value: 1, message: '', result: true };
  assert.propEqual(result1, expected1, 'Test Case 1');

  // Test case 2
  const result2 = convertRomanToInteger('IX');
  const expected2 = { value: 9, message: '', result: true };
  assert.propEqual(result2, expected2, 'Test Case 2');

  // Test case 3
  const result3 = convertRomanToInteger('XLIX');
  const expected3 = { value: 49, message: '', result: true };
  assert.propEqual(result3, expected3, 'Test Case 3');

  // Test case 4
  const result4 = convertRomanToInteger('MCMLXXXIV');
  const expected4 = { value: 1984, message: '', result: true };
  assert.propEqual(result4, expected4, 'Test Case 4');

  // Test case 5
  const result5 = convertRomanToInteger('MMMCMXCIX');
  const expected5 = { value: 3999, message: '', result: true };
  assert.propEqual(result5, expected5, 'Test Case 5');

  // Test case 6
  const result6 = convertRomanToInteger('ABC');
  const expected6 = { value: 0, message: 'Invalid Roman numeral', result: false };
  assert.propEqual(result6, expected6, 'Test Case 6');

  // Test case 7
  const result7 = convertRomanToInteger('');
  const expected7 = { value: 0, message: 'Empty input', result: false };
  assert.propEqual(result7, expected7, 'Test Case 7');
});
