"use strict";
var Pizza = (function () {
    function Pizza(_id, _name, _size, _price, _image) {
        this._id = _id;
        this._name = _name;
        this._size = _size;
        this._price = _price;
        this._image = _image;
    }
    Object.defineProperty(Pizza.prototype, "id", {
        //Get-Set ID
        get: function () { return this._id; },
        set: function (value) { this._id = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "name", {
        // Get-Set Name
        get: function () { return this._name; },
        set: function (value) { this._name = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "size", {
        // Get-Set Size
        get: function () { return this._size; },
        set: function (value) { this._size = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "price", {
        // Get-Set Price
        get: function () { return this._price; },
        set: function (value) { this._price = value; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pizza.prototype, "image", {
        // Get-Set Image
        get: function () { return this._image; },
        set: function (value) { this._image = value; },
        enumerable: true,
        configurable: true
    });
    return Pizza;
}());
exports.Pizza = Pizza;
//# sourceMappingURL=pizza.model.js.map