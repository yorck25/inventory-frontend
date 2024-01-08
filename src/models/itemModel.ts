export interface IItem {
    map(arg0: (element: IItem) => import("react/jsx-runtime").JSX.Element): unknown
    _id: String
    item: String
    buy: Number
    sell: Number
    buyindate: String
    selldate: String
    memo: String
    userId: String
}