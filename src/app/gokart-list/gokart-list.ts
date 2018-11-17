//for debugging purpose only , to be excluded out because once transpiled to 
//javasript , the typescrit code will be omitted.
//interface has support only in typescript

export interface IGokartList {
    productId: number;
    productName: string;
    productCode: string;
    releaseDate: string;
    description: string;
    price: number;
    starRating: number;
    certified: string;
    refurbishUrl: string;
}