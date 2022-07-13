import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Showusers } from '../Redux/Actions/Actions';
import axios from "axios";
const useGet = (url) => {
  const usedispatch=useDispatch();
    const users = async () => {
        await axios
            .get(url)
            .then((response) => {
                // console.log(response.data);
                const uservalue = response.data;
                usedispatch(Showusers(uservalue));
            })
            .catch((error) => {
                console.log(error);
            });
    };
    useEffect(() => {
        users();
    }, []);
}
export default useGet;
