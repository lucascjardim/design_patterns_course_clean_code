"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AirportTicketCalculate {
    calculate(checkInDate, checkOutDate) {
        const period = (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60);
        return period * 10;
    }
}
exports.default = AirportTicketCalculate;
