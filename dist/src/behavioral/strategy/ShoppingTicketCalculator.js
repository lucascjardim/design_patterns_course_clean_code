"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ShoppingTicketCalculator {
    calculate(checkInDate, checkOutDate) {
        const period = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60);
        const extra = period - 3;
        let price = 10;
        if (extra > 0) {
            price += extra * 10;
        }
        return price;
    }
}
exports.default = ShoppingTicketCalculator;
