import { Injectable } from '@angular/core';

@Injectable()
export class HouseService {
    getHouse() {
        return {
            id: 1,
            name: "My House",
            floors: [
                { id: 1, name: 'Basement', rooms: ['Bedroom', 'Bathroom', 'Leaving'] },
                { id: 2, name: 'First floor', rooms: ['Bedroom', 'Bathroom', 'Office'] },
                { id: 3, name: 'Second floor', rooms: ['Master Bedroom', 'Bathroom', 'Bedroom'] },
            ]
        }
    }
}