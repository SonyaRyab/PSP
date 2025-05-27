class CarUrls {
    constructor() {
        this.baseUrl = 'http://localhost:3000';
    }

    getCars() {
        return `${this.baseUrl}/cars`;
    }

    getCarById(id) {
        return `${this.baseUrl}/cars/${id}`;
    }

    createCar() {
        return `${this.baseUrl}/cars`;
    }

    removeCarById() {
        return `${this.baseUrl}/cars/${id}`;
    }

    updateCarById() {
        return `${this.baseUrl}/cars/${id}`;
    }
}

export const carsUrls = new CarUrls();