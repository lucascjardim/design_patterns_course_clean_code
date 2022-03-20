"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AirportTicketCalculate_1 = __importDefault(require("../../../src/behavioral/strategy/AirportTicketCalculate"));
const BeachTicketCalculator_1 = __importDefault(require("../../../src/behavioral/strategy/BeachTicketCalculator"));
const ParkingLot_1 = __importDefault(require("../../../src/behavioral/strategy/ParkingLot"));
const ShoppingTicketCalculator_1 = __importDefault(require("../../../src/behavioral/strategy/ShoppingTicketCalculator"));
test("Deve criar um estacionamento com 500 vagas", function () {
    const parkingLot = new ParkingLot_1.default(500, new BeachTicketCalculator_1.default());
    expect(parkingLot.getEmptySpaces()).toBe(500);
});
test("Deve entrar um carro", function () {
    const parkingLot = new ParkingLot_1.default(500, new BeachTicketCalculator_1.default());
    parkingLot.checkIn("AAA-9999", new Date("2022-03-20T10:00:00"));
    expect(parkingLot.getEmptySpaces()).toBe(499);
});
test("Deve sair um carro", function () {
    const parkingLot = new ParkingLot_1.default(500, new BeachTicketCalculator_1.default());
    parkingLot.checkIn("AAA-9999", new Date("2022-03-20T10:00:00"));
    parkingLot.checkOut("AAA-9999");
    expect(parkingLot.getEmptySpaces()).toBe(500);
});
test("Deve calcular um tiket de estacionamento na praia, na praia é sempre 20, independente do tempo", function () {
    const parkingLot = new ParkingLot_1.default(500, new BeachTicketCalculator_1.default());
    parkingLot.checkIn("AAA-9999", new Date("2022-03-20T10:00:00"));
    const tiket = parkingLot.calculateTicket("AAA-9999", new Date("2022-03-20T15:00:00"));
    parkingLot.checkOut("AAA-9999");
    expect(tiket.price).toBe(20);
});
test("Deve calcular um tiket de estacionamento no shopping. 10 reais nas primeiras 3 horas + 10 reais por hora excedente", function () {
    const parkingLot = new ParkingLot_1.default(500, new ShoppingTicketCalculator_1.default());
    parkingLot.checkIn("AAA-9999", new Date("2022-03-20T10:00:00"));
    const tiket = parkingLot.calculateTicket("AAA-9999", new Date("2022-03-20T15:00:00"));
    parkingLot.checkOut("AAA-9999");
    expect(tiket.price).toBe(30);
});
test("Deve calcular um tiket de estacionamento no aeroporto. No aeroporto é 10 reais por hora", function () {
    const parkingLot = new ParkingLot_1.default(500, new AirportTicketCalculate_1.default());
    parkingLot.checkIn("AAA-9999", new Date("2022-03-20T10:00:00"));
    const tiket = parkingLot.calculateTicket("AAA-9999", new Date("2022-03-20T15:00:00"));
    parkingLot.checkOut("AAA-9999");
    expect(tiket.price).toBe(50);
});
