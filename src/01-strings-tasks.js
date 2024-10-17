/* eslint-disable no-plusplus */
/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                              *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String   *
 *                                                                                           *
 ******************************************************************************************* */


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatenateStrings(value1, value2) {
  // throw new Error('Not implemented');
  return value1 + value2;
}


/**
 * Returns the length of given string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'aaaaa' => 5
 *   'b'     => 1
 *   ''      => 0
 */
function getStringLength(value) {
  // throw new Error('Not implemented');
  return value.length;
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string :
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 *
 * @example
 *   'John','Doe'      => 'Hello, John Doe!'
 *   'Chuck','Norris'  => 'Hello, Chuck Norris!'
 */
function getStringFromTemplate(firstName, lastName) {
  // throw new Error('Not implemented');
  return `Hello, ${firstName} ${lastName}!`;
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, John Doe!' => 'John Doe'
 *   'Hello, Chuck Norris!' => 'Chuck Norris'
 */
function extractNameFromTemplate(value) {
  // throw new Error('Not implemented');
  return value.replace('Hello, ', '').replace('!', '');
  // заменяем Hello на пустую строку при помощи replace, заменяем ! на пустую строку в след .раз
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'John Doe'  => 'J'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  // throw new Error('Not implemented');
  return value.charAt(0);
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Abracadabra'    => 'Abracadabra'
 *   'cat'              => 'cat'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingWhitespaces(value) {
  // throw new Error('Not implemented');
  return value.trim();
  // метод trim(), чтобы удалить ведущие и завершающие пробелы из строки value
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'A', 5  => 'AAAAA'
 *   'cat', 3 => 'catcatcat'
 */
function repeatString(value, count) {
  // throw new Error('Not implemented');
  return value.repeat(count);
  // repeat(), чтобы повторить строку value указанное количество раз, переданное в count
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or  to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value) {
  // throw new Error('Not implemented');
  return str.replace(new RegExp(value), '');
  // RegExp, чтобы найти первое вхождение строки value в строке str.
  //  replace() для замены этого вхождения пустой строкой, тем самым удаляя его из исходной строки
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  // throw new Error('Not implemented');
  return str.slice(1, -1);
  // метод slice() для получения подстроки из исходной строки str,
  // начиная с индекса 1 и заканчивая индексом -1.
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  // throw new Error('Not implemented');
  return str.toUpperCase();
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'
 *   => [
 *      'angus.young@gmail.com',
 *      'brian.johnson@hotmail.com',
 *      'bon.scott@yahoo.com'
 *   ],
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  // throw new Error('Not implemented');
  return str.split(';');
  // split() для разделения строки str по символу точки с запятой (;) и создание массива
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  const topLine = `┌${'─'.repeat(width - 2)}┐\n`;
  const middleLine = `│${' '.repeat(width - 2)}│\n`;
  const bottomLine = `└${'─'.repeat(width - 2)}┘\n`;
  const rectangle = topLine + middleLine.repeat(height - 2) + bottomLine;
  return rectangle;
}


/**
 * Encode specified string with ROT13 cipher
 * See details:  https://en.wikipedia.org/wiki/ROT13
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *
 *   'hello' => 'uryyb'
 *   'Why did the chicken cross the road?' => 'Jul qvq gur puvpxra pebff gur ebnq?'
 *   'Gb trg gb gur bgure fvqr!' => 'To get to the other side!'
 *   'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
 *    => 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm'
 *
 */
function encodeToRot13(str) {
  // throw new Error('Not implemented');
  let result = '';
  // Переменная для хранения закодированной строки используем цикл цикл for
  //              для перебора всех символов в исх.строке str.
  // Для каждого символа получаем числовое значение.
  // В зависимости от типа символа применяем формулу ROT13
  //              для изменения символа на другой символ из алфавита.
  // В ASCII-кодировке буквы заглавных латинских букв находятся в диапазоне от 65 до 90,
  //              а строчные буквы - от 97 до 122.
  // При вычитании 65 или 97 мы приводим числовое значение символа к диапазону от 0 до 25.
  // Затем, после сдвига и взятия остатка от деления на 26,
  //              добавление 65 или 97 позволяет вернуться к числовому значению символа
  //              в диапазоне заглавных или строчных букв ASCII.
  // Изменяем символ на другую заглавную букву с помощью формулы ROT13
  //              ((charCode - 65 + 13) % 26) + 65
  //              charCode - 65: отнимаем 65,
  //              чтобы получить значение от 0 до 25 (A = 0, B = 1, и т.д.)
  //              + 13: сдвигаем значение на 13 позиций по алфавиту % 26:
  //              берем остаток от деления на 26, чтобы избежать выхода за пределы алфавита. + 65:
  //              добавляем 65, чтобы получить числовое значение символа обратно
  //              в диапазоне заглавных букв (A = 65, B = 66, и т.д.)
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    // Получаем числовое значение символа по его индексу в строке

    if (charCode >= 65 && charCode <= 90) {
      // Если символ - заглавная буква
      result += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
    } else if (charCode >= 97 && charCode <= 122) {
      // Если символ - строчная буква
      result += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
    } else {
      // Если символ не является буквой (например, пробелы, знаки препинания и т.д.)
      result += str.charAt(i); // Просто добавляем символ без изменений
    }
  }
  return result;
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  // throw new Error('Not implemented');
  return typeof value === 'string' || value instanceof String;
}


/**
 * Returns playid card id.
 *
 * Playing cards inittial deck inclides the cards in the following order:
 *
 *  'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
 *  'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
 *  'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
 *  'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
 *
 * (see https://en.wikipedia.org/wiki/Standard_52-card_deck)
 * Function returns the zero-based index of specified card in the initial deck above.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'A♣' => 0
 *   '2♣' => 1
 *   '3♣' => 2
 *     ...
 *   'Q♠' => 50
 *   'K♠' => 51
 */
function getCardId(value) {
  // throw new Error('Not implemented');
  const desk = [
    'A♣', '2♣', '3♣', '4♣', '5♣', '6♣', '7♣', '8♣', '9♣', '10♣', 'J♣', 'Q♣', 'K♣',
    'A♦', '2♦', '3♦', '4♦', '5♦', '6♦', '7♦', '8♦', '9♦', '10♦', 'J♦', 'Q♦', 'K♦',
    'A♥', '2♥', '3♥', '4♥', '5♥', '6♥', '7♥', '8♥', '9♥', '10♥', 'J♥', 'Q♥', 'K♥',
    'A♠', '2♠', '3♠', '4♠', '5♠', '6♠', '7♠', '8♠', '9♠', '10♠', 'J♠', 'Q♠', 'K♠',
  ];
  return desk.indexOf(value);
}


module.exports = {
  concatenateStrings,
  getStringLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingWhitespaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  encodeToRot13,
  isString,
  getCardId,
};
