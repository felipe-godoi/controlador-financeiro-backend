export default class Response{
    constructor(
        public response: any,
        public error: boolean
    ){}

    toJson(): Object{
        let json = {
            "data": this.response,
            "error": this.error
        };

        return json;
    }
}