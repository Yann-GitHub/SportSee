export class UserData {
  constructor(data) {
    this._data = data.data
  }

  get id() {
    return this._data?.id || null
  }

  get userInfos() {
    return this._data?.userInfos || null
  }

  get keyData() {
    return this._data?.keyData || null
  }

  // get todayScore() {
  //   return this._data?.todayScore || this._data?.score || null
  // }

  get todayScore() {
    const score = this._data?.todayScore || this._data?.score || null
    if (score !== null) {
      return score * 100
    }
    return null
  }
}
