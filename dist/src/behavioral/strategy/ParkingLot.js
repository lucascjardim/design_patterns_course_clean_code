"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParkingLot {
    constructor(capacity, ticketCalculator) {
        this.capacity = capacity;
        this.ticketCalculator = ticketCalculator;
        this.parkedCars = [];
    }
    getEmptySpaces() {
        return this.capacity - this.parkedCars.length;
    }
    checkIn(plate, checkInDate) {
        this.parkedCars.push({ plate, checkInDate });
    }
    checkOut(plate) {
        const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate === plate);
        if (!parkedCar)
            throw new Error("Car not found");
        const position = this.parkedCars.indexOf(parkedCar);
        this.parkedCars.splice(position, 1);
    }
    calculateTicket(plate, checkOutDate) {
        const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate === plate);
        if (!parkedCar)
            throw new Error("Car not found");
        const price = this.ticketCalculator.calculate(parkedCar.checkInDate, checkOutDate);
        return { price };
    }
}
exports.default = ParkingLot;
