import { FakeService } from "../db/fakeService";
import { IDBService } from "../db/types/dbService";

export class HouseController{
    dbService: IDBService;
    
    constructor(dbService: IDBService ){
        this.dbService = dbService;
    }
    async getHousesByType(type: string, minPrice: number, maxPrice: number){


        const houses = this.dbService.getHouses(type, minPrice, maxPrice);
        return houses;
    }


}