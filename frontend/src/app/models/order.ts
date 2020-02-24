export class Order {
    constructor(_id = '', name = '', surname = '', direction = '', dished = '' ) {
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.direction = direction;
        this.dished = dished;
    }

    _id: String;
    name: String;
    surname: String;
    direction: String;
    dished: String;
}
