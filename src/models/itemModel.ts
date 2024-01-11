export interface IItem {
    map(arg0: (element: IItem) => import("react/jsx-runtime").JSX.Element): unknown
    _id: string
    item: string
    buy: number
    sell: number
    buyindate: string
    selldate: string
    memo: string
    userId: string
}