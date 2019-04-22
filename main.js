import {
    sql,
    createPool
} from slonik;

function PConn({host, port, database, user, pass}=ConnectionInfo){
    return `postgresql://${user}:${encodeURIComponent(pass)}@${host}:${port}/${database}`;
}

function GenerateGUID(){ // Nodejs is crypto.randomBytes(1)[0] % 16  ?
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
