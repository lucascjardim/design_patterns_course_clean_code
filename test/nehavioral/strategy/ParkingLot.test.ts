import AirportTicketCalculate from "../../../src/behavioral/strategy/AirportTicketCalculate";
import BeachTicketCalculator from "../../../src/behavioral/strategy/BeachTicketCalculator";
import ParkingLot from "../../../src/behavioral/strategy/ParkingLot";
import ShoppingTicketCalculator from "../../../src/behavioral/strategy/ShoppingTicketCalculator";

test("Deve criar um estacionamento com 500 vagas", function(){
  const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
  expect(parkingLot.getEmptySpaces()).toBe(500);
});

test("Deve entrar um carro", function(){
  const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
  parkingLot.checkIn("AAA-9999", new Date("2022-03-20T10:00:00"));
  expect(parkingLot.getEmptySpaces()).toBe(499);
});

test("Deve sair um carro", function(){
  const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
  parkingLot.checkIn("AAA-9999", new Date("2022-03-20T10:00:00"));
  parkingLot.checkOut("AAA-9999");
  expect(parkingLot.getEmptySpaces()).toBe(500);
});

test("Deve calcular um tiket de estacionamento na praia, na praia é sempre 20, independente do tempo", function(){
  const parkingLot = new ParkingLot(500, new BeachTicketCalculator());
  parkingLot.checkIn("AAA-9999", new Date("2022-03-20T10:00:00"));
  const tiket = parkingLot.calculateTicket("AAA-9999", new Date("2022-03-20T15:00:00"))
  parkingLot.checkOut("AAA-9999");
  expect(tiket.price).toBe(20);
});

test("Deve calcular um tiket de estacionamento no shopping. 10 reais nas primeiras 3 horas + 10 reais por hora excedente", function(){
  const parkingLot = new ParkingLot(500, new ShoppingTicketCalculator());
  parkingLot.checkIn("AAA-9999", new Date("2022-03-20T10:00:00"));
  const tiket = parkingLot.calculateTicket("AAA-9999", new Date("2022-03-20T15:00:00"))
  parkingLot.checkOut("AAA-9999");
  expect(tiket.price).toBe(30);
});

test("Deve calcular um tiket de estacionamento no aeroporto. No aeroporto é 10 reais por hora", function(){
  const parkingLot = new ParkingLot(500, new AirportTicketCalculate());
  parkingLot.checkIn("AAA-9999", new Date("2022-03-20T10:00:00"));
  const tiket = parkingLot.calculateTicket("AAA-9999", new Date("2022-03-20T15:00:00"))
  parkingLot.checkOut("AAA-9999");
  expect(tiket.price).toBe(50);
});