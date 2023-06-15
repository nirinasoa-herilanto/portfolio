/**
 * Use to slice and get a portion of an long text
 * @param {string} txt an paragraph of text
 * @param {number} nb  text sliced number
 * @returns portion of text
 */
export const truncate = (txt: string, nb: number) =>
  txt.length > nb ? `${txt.slice(0, nb - 1)} ...` : txt;
