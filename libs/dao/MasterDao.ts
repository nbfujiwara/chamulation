export default class MasterDao {
  public static sexList(): ISex[] {
    return [{ id: 1, name: '男性' }, { id: 2, name: '女性' }]
  }
  public static outRateTypeList(): IOutRateType[] {
    return [
      { id: 1, name: 'かなり倹約家', rate: -50 },
      { id: 2, name: 'やや倹約家', rate: -25 },
      { id: 3, name: 'ふつう', rate: 0 },
      { id: 4, name: 'やや浪費家', rate: 50 },
      { id: 5, name: 'かなり浪費家', rate: 100 }
    ]
  }
}

export interface ISex {
  id: number
  name: string
}
export interface IOutRateType {
  id: number
  name: string
  rate: number
}
