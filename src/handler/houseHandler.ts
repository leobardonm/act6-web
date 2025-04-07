import { HouseController } from "../controller/houseController"
import FakeService from "../db/fakeService";

export class HouseHandler{
    getHouses = async (req: any, res: any) => {
        const ctrl = new HouseController(new FakeService());


    
}