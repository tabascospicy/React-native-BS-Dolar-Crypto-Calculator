
 export interface props {
      name?:string
  }
export interface CoinType extends props {
  keys?:number,
  Mount?:string | number,
  Title?:string,
  Icon?:string,
  USD?:number,
  BS?:number | string,
  EUR?:number
}
export interface Notifier {
  visible? : boolean,
  setVisible : React.Dispatch<React.SetStateAction<boolean>>
}
export interface ServerResponse {
  data:Object
}

export interface Coins {
    Bs? :  CoinType,
    EUR? : CoinType,
    PTR? : CoinType,
    USD? : CoinType,
    BTC? : CoinType,
    DASH? : CoinType,
    DODGE? : CoinType,
    ETH? : CoinType,
    LTC? : CoinType,
    select?: {Title?:string}
}
export interface CoinIcon {
      name? : string
}
export interface GlobalState {
  "Bs"?: keyof Coins;
  supportedCoins?:Coins,
  setSelectedCoin? : React.Dispatch<React.SetStateAction<{}>>,
  result? : string,
  selected?: boolean,
  setSelected? :  React.Dispatch<React.SetStateAction<boolean>>,
  colocarMonto? : boolean,
  destiny?:string,
  setDestiny?:React.Dispatch<React.SetStateAction<string>>,
  origin?:number,
  setOrigin?:React.Dispatch<React.SetStateAction<number>>,
  setColocarMonto? : React.Dispatch<React.SetStateAction<boolean>>,
  setResult? : React.Dispatch<React.SetStateAction<number>>
}
 