import React from "react";


export default function AuthHeader() {
    return {
        authorization: localStorage.getItem('Token'),
        'Content-type': 'application/json',
    };
    // return { 'Authorization':"Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlzQWRtaW4iOnRydWUsImV4cCI6MTYwMTM1NzI0OSwiaWF0IjoxNjAxMzIxMjQ5fQ.mdXlOWyVU4v3EUTL6iWu70NwQcSph0dBYRvm9NoboXg"};
}