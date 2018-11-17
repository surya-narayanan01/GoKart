import { Component } from "@angular/core";
import { IGokartList } from "./gokart-list";

@Component({
    selector: 'gl-root',
    templateUrl: './gokart-list.component.html'
}
)

export class GokartListComponent {
    filteredProducts: IGokartList[];
    constructor() {
        this.filteredProducts = this.gokartProductList;
        this.filterByText = '';

    }
    //getter , setter for filterByText
    //google why _variablename is working
    _filterByText: string;
    get filterByText(): string {
        return this._filterByText;
    }
    set filterByText(searchValue: string) {
        this._filterByText = searchValue;
        this.filteredProducts = this._filterByText ? this.performSearch(this._filterByText) : this.gokartProductList;
    }

    performSearch(searchValue: string): IGokartList[] {
        searchValue = searchValue.toLocaleLowerCase();
        console.log(this.gokartProductList.filter((products: IGokartList) =>
            products.productName.toLocaleLowerCase().indexOf(searchValue) !== -1));
        return this.gokartProductList.filter((products: IGokartList) =>
            products.productName.toLocaleLowerCase().indexOf(searchValue) !== -1);
    }
    imageWidth: number = 60;
    imageMargin: number = 3;
    refurbishedShow: boolean = false;
    showRefurbishedImg(): void {
        this.refurbishedShow = !this.refurbishedShow;
    }
    gokartProductList: IGokartList[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "certified": "yes",
            "refurbishUrl": "https://www.cfatrading.co.uk/templates/yootheme/cache/certified-refurbished-ec64538a.jpeg"

        },
        {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "certified": "yes",
            "refurbishUrl": "https://www.cfatrading.co.uk/templates/yootheme/cache/certified-refurbished-ec64538a.jpeg"

        }
    ];
}