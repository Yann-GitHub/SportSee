export class UserActivity {
  constructor(data) {
    this._data = data.data
  }

  get userId() {
    return this._data?.userId || null
  }

  //   get sessions() {
  //     return this._data?.sessions || null
  //   }

  get sessions() {
    const sessionsWithIndex = this._data?.sessions?.map((session, index) => {
      return { ...session, dayNumber: index + 1 }
    })

    return sessionsWithIndex || null
  }
}
