export interface House{
    price: number;
    address: string;
    description: string;
    rating: number;
    terrainArea: number;
    constructionArea: number;
    duration: number; 
    type: string; //rent or sale
}

const houses: House[] = [
    {
        price: 100000,
        address: "123 Main St",
        description: "This is a beautiful house",
        rating: 4.5,
        terrainArea: 1000,
        constructionArea: 2000,
        duration: 10,
        type: "sale"
    },
    {
        price: 100000,
        address: "123 Main St",
        description: "This is a beautiful house",
        rating: 4.5,
        terrainArea: 1000,
        constructionArea: 2000,
        duration: 10,
        type: "rent"
    }
]

export class FakeService{
    async getHouses(type : string, minPrice : number, maxPrice : number): Promise<House[]> {
        return houses;
    }

    async getHouseById(id: number): Promise<House> {
        return  houses[id];
    }
    
}
export default FakeService;
