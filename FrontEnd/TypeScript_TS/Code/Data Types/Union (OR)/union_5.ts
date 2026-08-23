type SuccessResponse = {
    status: "Succes";
    data: any;
}

type ErrorResponse = {
    status: "error"
    message: string
}

type API_Respone = SuccessResponse | ErrorResponse

let API: API_Respone = {
    status: "Succes",
    data: {
        name: "Arun",
        age: 30
    }
};
