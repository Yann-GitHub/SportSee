export class UserAverage {
  constructor(data) {
    this._data = data.data
  }

  get userId() {
    return this._data.userId || null
  }

  get sessions() {
    return this._data?.sessions || null
  }
}
