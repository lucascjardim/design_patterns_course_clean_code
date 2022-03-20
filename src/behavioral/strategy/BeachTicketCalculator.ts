import TicketCalculator from "./TicketCalculator";

export default class BeachTicketCalculator implements TicketCalculator {

  calculate(checkInDate: Date, checkOutDate: Date): number {
    return 20
  }

}