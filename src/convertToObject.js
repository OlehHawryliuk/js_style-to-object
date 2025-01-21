'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const style = sourceString.split(';');
  const styleNoSpaces = [];
  const arrayOfarrays = [];

  for (const i of style) {
    styleNoSpaces.push(i.trim());
  }

  for (const i of styleNoSpaces) {
    arrayOfarrays.push(i.split(':'));
  }

  return arrayOfarrays.reduce((prev, elem) => {
    return { ...prev, [elem[0]]: [elem[1]] };
  }, {});
}

module.exports = convertToObject;
