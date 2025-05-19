export interface ICookTime {
  preparation: ITime,
  cooking: ITime,
  rest: ITime
}

export interface ITime {
  value: number | null,
  unit: string | null
}
