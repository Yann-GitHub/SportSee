/**
 * Represents a data modeling class for user activity.
 */
export class UserActivity {
  /**
   * Creates a new instance of the UserActivity data modeling class.
   * @param {Object} data - The data of the user's activity.
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
   * Gets the user's sessions, with day indexes added to each session.
   * @returns {Array|null} - The user's sessions with day indexes added, or null if there are none.
   */
  get sessions() {
    const sessionsWithIndex = this._data?.sessions?.map((session, index) => {
      return { ...session, dayNumber: index + 1 }
    })

    return sessionsWithIndex || null
  }
}
