export class UserPerformance {
  constructor(data) {
    this._data = data.data
  }

  get userId() {
    return this._data?.userId || null
  }

  get kind() {
    return this._data?.kind || null
  }

  get data() {
    return this._data?.data || null
  }
}
