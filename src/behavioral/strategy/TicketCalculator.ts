export default interface TicketCalculator{
  calculate(checkInDate:Date, checkOutDate: Date):number;
}