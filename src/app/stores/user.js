import {create} from "zustand";

const userStore = create(set => ({
    username: "kk",
    login: false,
    changeUsername: (name) => set(state => ({
        ...state, username:name
    }))}));