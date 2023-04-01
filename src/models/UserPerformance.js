/**
 * Represents a data modeling class for user performance.
 */
export class UserPerformance {
  /**
   * Creates a new instance of the UserPerformance data modeling class.
   * @param {Object} data - The data of the user's performance.
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
   * Gets the performance type.
   * @returns {string|null} - The performance type, or null if it's not available.
   */
  get kind() {
    return this._data?.kind || null
  }

  /**
   * Gets the user's performance data for each type of performance.
   * @returns {Array|null} - The user's performance data for each type of performance, or null if there is none.
   */
  get data() {
    const kindFR = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ]

    return (
      this._data?.data.map((obj, index) => ({
        value: obj.value,
        kind: kindFR[index],
      })) || null
    )
  }
}
