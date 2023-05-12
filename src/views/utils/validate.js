/**
 *
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal (path) {
  return /^(http[s]?:|mailto:|tel:)/.test(path)
}
