export class Pizza {

    constructor(
        private _id: number,
        private _name: string,
        private _size: string,
        private _price: number,
        private _image: string) {

    }
    //Get-Set ID
    get id(): number {return this._id;}
    set id(value: number) { this._id = value; }
    // Get-Set Name
    get name(): string {return this._name;}
    set name(value: string) {this._name = value;}
    // Get-Set Size
    get size(): string {return this._size;}
    set size(value: string) {this._size = value;}
    // Get-Set Price
    get price(): number {return this._price;}
    set price(value: number) {this._price = value;}
    // Get-Set Image
    get image(): string {return this._image;}
    set image(value: string) {this._image = value;}
}