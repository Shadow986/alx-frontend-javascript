class Building {
    constructor(sqft) {
        if (this.constructor === Building) {
            throw new TypeError('Abstract class "Building" cannot be instantiated directly');
        }
        if (this.evacuationWarningMessage === undefined) {
            throw new TypeError('Classes extending the Building abstract class must define an evacuationWarningMessage method');
        }
        this._sqft = sqft;
    }

    get sqft() {
        return this._sqft;
    }
}
