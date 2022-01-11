export namespace ApiTypes {

  export interface ResponseGenerator {
    config?: any,
    data?: any,
    headers?: any,
    request?: any,
    status?: number,
    statusText?: string
  }

  export interface Ids {
    vK_Text_Deutsch: string
    vK_Text_Englisch: string
    iD_BaaN: string
    "oeM-ID": string
  }

  export interface SearchResult {
    oid: string
    title: string
    description: string
    language: string
    brand: string
    customIds: Ids
    categories: string[]
    availability: string
    ids: Ids,
    sku: string
    score: number
    images: string[]
  }

}