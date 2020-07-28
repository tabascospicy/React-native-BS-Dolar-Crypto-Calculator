
 export interface props {
      name?:string
  }
export interface CoinType extends props {
  [key:string] : any,
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
   [key:string] : any,
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
export type theme  = {
  primary : string,
  secondary : string,
  warning : string,
  info : string,
  white:string,
  black:string,
  success : string,
  light:string,
  dark:string,
  grey:string
}
export type GlobalState = {
  "Bs"?: keyof Coins,
  Colors? : theme,
  [key:string] : any,
  inverted? : any,
  supportedCoins?:Coins,
  setInverted? :  React.Dispatch<React.SetStateAction<boolean>>,
  colocarMonto? : boolean,
  destiny?:string,
  setDestiny?:React.Dispatch<React.SetStateAction<string>>,
  origin?:number,
  setOrigin?:React.Dispatch<React.SetStateAction<number>>,
  originName?:string,
  setCalculated?:React.Dispatch<React.SetStateAction<CalculeValue>>,
  calculated?:CalculeValue,
  setOriginName?:React.Dispatch<React.SetStateAction<string>>,
  setColocarMonto? : React.Dispatch<React.SetStateAction<boolean>>,
}

export interface CalculeValue  {
    input:string,
    result:string,
}

export type Button  = {
  press:Function
}
 