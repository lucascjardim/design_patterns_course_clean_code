import TicketCalculator from "./TicketCalculator";

export default class AirportTicketCalculate implements TicketCalculator{
  calculate(checkInDate: Date, checkOutDate: Date): number {
    const period = (checkOutDate.getTime() - checkInDate.getTime())/(1000*60*60);
    return period * 10;
  }

}