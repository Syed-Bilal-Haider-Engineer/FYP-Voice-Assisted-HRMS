import React, { useState, useEffect } from 'react';
import axios from 'axios';
export const usePOST=(values,url)=>{
    const usersPost = async() => {
        await axios
            .post(url,values)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        // console.log("values",values,"url",url);
    };
    useEffect(() => {
        values && usersPost();
    }, [values]);
}
