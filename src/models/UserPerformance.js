export class UserPerformance {
  constructor(data) {
    this._data = data.data
    // this._kind = data.data.kind
  }

  get userId() {
    return this._data?.userId || null
  }

  get kind() {
    return this._data?.kind || null
  }

  // get data() {
  //   return this._data?.data || null
  // }

  get data() {
    const kindFR = [
      "Cardio",
      "Energie",
      "Endurance",
      "Force",
      "Vitesse",
      "Intensité",
    ]

    const data = this._data?.data.map((obj, index) => ({
      value: obj.value,
      kind: kindFR[index],
    }))

    return data
  }
}
