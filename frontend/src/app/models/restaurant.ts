export class Restaurants {

    constructor(_id = '', name = '', kind = '', direction = '' ) {
        this._id = _id;
        this.name = name;
        this.kind = kind;
        this.direction = direction;
    }

    _id: String;
    name: String;
    kind: String;
    direction: String;

}
