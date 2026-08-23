// const Enum

enum HTTPstatus {
    OK = 200,
    BadRequest = 400,
    unauthorized = 401,
    NotFound = 404
}

function handleResponse(status: HTTPstatus): void | HTTPstatus {
    if (status === HTTPstatus.OK) {
        console.log ("Success..!")
    } else {
        return HTTPstatus.NotFound
    }
}

handleResponse(200)

handleResponse(HTTPstatus.OK);
console.log(handleResponse(HTTPstatus.BadRequest));
