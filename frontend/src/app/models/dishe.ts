export class Dishe {
    constructor(_id = '', name = '', price = 0) {
        this._id = _id;
        this.name = name;
        this.price = price;

    }

    _id: String;
    name: String;
    price: Number;
}
