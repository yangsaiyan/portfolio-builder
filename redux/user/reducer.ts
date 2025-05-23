import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    profile: {
      name: "Elon Musk",
      summary: "I am the founder of Tesla, SpaceX, and Neuralink. I am also the CEO of Twitter. I am a software engineer and a full stack developer.",
      email: "elon@tesla.com",
      image: "/elon.png",
      social: {
        linkedin: "https://www.linkedin.com",
        github: "https://github.com",
        x: "https://x.com",
        facebook: "https://www.facebook.com",
        instagram: "https://www.instagram.com",
        spotify: "https://open.spotify.com",
        youtube: "https://www.youtube.com",
        tiktok: "https://www.tiktok.com",
        twitch: "https://www.twitch.tv",
        discord: "https://discord.com",
        telegram: "https://telegram.org",
      },
    },
    experience: [
      {
        title: "",
        company: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
        url: "",
        image: "",
        tags: [],
      },
      {
        title: "",
        company: "",
        location: "",
        description: "",
        startDate: "",
        endDate: "",
        url: "",
        image: "",
        tags: [],
      },
      {},
    ],
    education: [
      {
        school: "",
        title: "",
        grade: "",
        startDate: "",
        endDate: "",
        url: "",
        image: "",
        tags: [],
      },
      {
        school: "",
        title: "",
        grade: "",
        startDate: "",
        endDate: "",
        url: "",
        image: "",
        tags: [],
      },
    ],
    skills: [
      {
        name: "",
        level: "",
        description: "",
      },
      {
        name: "",
        level: "",
        description: "",
      },
      {
        name: "",
        level: "",
        description: "",
      },
      {
        name: "",
        level: "",
        description: "",
      },
      {
        name: "",
        level: "",
        description: "",
      },
    ],
    projects: [
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
    ],
    certifications: [
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
    ],
    achievements: [
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
    ],
    publications: [
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
    ],
    awards: [
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
    ],
    patents: [
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
    ],
    volunteer: [
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
      {
        name: "",
        description: "",
        url: "",
        image: "",
      },
    ],
    references: [
      {
        name: "",
        description: "",
        email: "",
        phone: "",
      },
      {
        name: "",
        description: "",
        email: "",
        phone: "",
      },
    ],
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
      const stateKeys = Object.keys(state.user).map((k) => k.toLowerCase());
      const actionKeys = Object.keys(action.payload).map((k) =>
        k.toLowerCase()
      );

      if (stateKeys.some((key) => actionKeys.includes(key))) {
        return;
      }

      state.user = { ...state.user, ...(action.payload as typeof state.user) };
    },
  },
});

export const { getUser, setUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
