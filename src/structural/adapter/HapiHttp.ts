import Hapi from "@hapi/hapi";
import Http from "./Http";

export default class HabiHttp implements Http{
  server: Hapi.Server;

  constructor(){
    this.server = Hapi.server({});
  }

  async route(method: string, url: string, callback: any): Promise<any> {
    this.server.route({
      path: url,
      method: method,
      handler(request:any, headers:any){
      return callback(request.params, request.body) ;
      }
    }); 
  }
  
  async listen(port: number): Promise<void> {
    this.server.settings.port = port;
    await this.server.start();
  }
}