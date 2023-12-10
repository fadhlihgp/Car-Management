export class NotFoundException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "Not Found Exception"
    }
}