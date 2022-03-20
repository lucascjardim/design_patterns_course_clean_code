import TicketCalculator from "./TicketCalculator";

export default class ParkingLot{
  parkedCars: {plate: string, checkInDate:Date}[];

  constructor(readonly capacity: number, readonly ticketCalculator:TicketCalculator){
    this.parkedCars = [];
  }

  getEmptySpaces(){
    return this.capacity - this.parkedCars.length;  
  }

  checkIn(plate:string, checkInDate: Date){
    this.parkedCars.push({plate,checkInDate })
  }

  checkOut(plate:string){
    const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate === plate);
    if(!parkedCar) throw new Error("Car not found");
    const position = this.parkedCars.indexOf(parkedCar);
    this.parkedCars.splice(position, 1); 
  } 

  calculateTicket(plate:string, checkOutDate: Date){
    const parkedCar = this.parkedCars.find(parkedCar => parkedCar.plate === plate);
    if(!parkedCar) throw new Error("Car not found");
    const price = this.ticketCalculator.calculate(parkedCar.checkInDate, checkOutDate )
    return { price };
  }
}