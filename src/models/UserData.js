/**
 * Represents a data modeling class for user data.
 */
export class UserData {
  /**
   * Creates a new instance of the UserData data modeling class.
   * @param {Object} data - The data of the user.
   */
  constructor(data) {
    this._data = data.data
  }

  /**
   * Gets the user ID.
   * @returns {number|null} - The user ID, or null if it's not available.
   */
  get id() {
    return this._data?.id || null
  }

  /**
   * Gets the user's information.
   * @returns {Object|null} - The user's information, or null if there is none.
   */
  get userInfos() {
    return this._data?.userInfos || null
  }

  /**
   * Gets the user's key data.
   * @returns {Object|null} - The user's key data, or null if there is none.
   */
  get keyData() {
    return this._data?.keyData || null
  }

  /**
   * Gets the user's score pourcentage for today.
   * @returns {number|null} - The user's score for today convert in pourcentage, or null if it's not available.
   */
  get todayScore() {
    const score = this._data?.todayScore || this._data?.score || null
    if (score !== null) {
      return score * 100
    }
    return null
  }
}
