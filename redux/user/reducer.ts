import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    profile: {
      name: "Lim",
      summary: "asdasd",
      image: "",
    },
    experience: {
      Hiredly: {
        position: "",
        type: "",
        description: "",
        startDate: "",
        endDate: "",
      },
      MHP_Miracle: {
        position: "",
        type: "",
        description: "",
        startDate: "",
        endDate: "",
      },
      Econsave: {
        position: "",
        type: "",
        description: "",
        startDate: "",
        endDate: "",
      },
      UTAR: {
        position: "",
        type: "",
        description: "",
        startDate: "",
        endDate: "",
      },
    },
    education: {
      UTAR: {
        course: "",
        grade: "",
        startDate: "",
        endDate: "",
      },
      CHHS: {
        course: "",
        grade: "",
        startDate: "",
        endDate: "",
      },
    },
    projects: {
      SpaceZ: {
        name: "",
        description: "",
      },
    },
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.user = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    updateUser: (state, action) => {
      const stateKeys = Object.keys(state.user).map(k => k.toLowerCase());
      const actionKeys = Object.keys(action.payload).map(k => k.toLowerCase());
      
      if (stateKeys.some(key => actionKeys.includes(key))) {
        return;
      }
      
      state.user = { ...state.user, ...(action.payload as typeof state.user) };
    },
  },
});

export const { getUser, setUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
