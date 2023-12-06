import { faker } from "@faker-js/faker";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const addUser = createAsyncThunk('users/add',async ()=>{
    const addedUser = await axios.post('http://localhost:3005/users',{
        name:faker.person.fullName(),
    })

    return addedUser.data;
})

export { addUser };