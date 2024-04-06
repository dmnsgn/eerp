/** @module eerp */

/**
 * Logarithmic/exponential interpolation
 *
 * @alias module:eerp
 * @param {number} a Start
 * @param {number} b End
 * @param {number} t Interpolant
 * @returns {number}
 */
const eerp = (a, b, t) => a * (b / a) ** t;

export default eerp;
