import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Showusers,Getcategory } from '../Redux/Actions/Actions';

import axios from "axios";
const useGet = (url,type) => {
    // console.log("type",type)
  const usedispatch=useDispatch();
    const users = async () => {
        await axios
            .get(url)
            .then((response) => {
                // console.log(response.data);
                const value = response.data;
                if(type=="user")
                {
                    usedispatch(Showusers(value));
                }
                else if(type=="category")
                {
                    usedispatch(Getcategory(value));
                }
               
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
