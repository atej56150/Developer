type Status = any | unknown

function setStatus(status: Status): void {
    console.log(`Status set to: ${status}`);
}

setStatus("approved")
setStatus("pending")
setStatus("applied")            // applied is not in the Status list 