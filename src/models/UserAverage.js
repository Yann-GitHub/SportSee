/**
 * Represents a data modeling class for user averages.
 */
export class UserAverage {
  /**
   * Creates a new instance of the UserAverage data modeling class.
   * @param {Object} data - The data of the user's averages.
   */
  constructor(data) {
    this._data = data.data
  }

  /**
   * Gets the user ID.
   * @returns {number|null} - The user ID, or null if it's not available.
   */
  get userId() {
    return this._data?.userId || null
  }

  /**
   * Gets the user's average values for each day of the week.
   * @returns {Array|null} - The user's average values for each day of the week, or null if there are none.
   */
  get sessions() {
    return this._data?.sessions || null
  }
}
