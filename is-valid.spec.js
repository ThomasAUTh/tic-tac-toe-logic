const {isValidBoard} = require('./is-valid')

test('Board of 2x3 should be invalid', () => {
  const board = [
    [null, null, null],
    [null, null, null]
  ]
  expect(isValidBoard(board)).toBe(false)
})

test('Board of 3x2 should be invalid', () => {
  const board = [
    [null, null],
    [null, null],
    [null, null]
  ]
  expect(isValidBoard(board)).toBe(false)
})

test('Board of 3x3 should be valid', () => {
  const board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]
  expect(isValidBoard(board)).toBe(true)
})

test('Board 3x3 with X and O should be valid', () => {
  const board = [
    [null, 'X', 'X'],
    ['O', 'O', null],
    [null, 'X', 'O']
  ]
  expect(isValidBoard(board)).toBe(true)
})

test('Boards that contain invalid symbols should be invalid', () => {
    const board = [
      [null, 'X', 'X'],
      ['O', 'NONSENSE', null],
      [null, 'X', 'I\'m a hacker!']
    ]
    expect(isValidBoard(board)).toBe(false)
  })