import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { event } from "../../api";
const start = new Date();
const end = new Date(new Date().setMinutes(start.getMinutes() + 30));

const initialState = {
  events: [
    {
      title: "Event 1",
      start: new Date(),
      end: new Date(new Date().setMinutes(start.getMinutes() + 30)),
      backgroundColor: "green",
      extendedProps: { id: 1 },
    },
    {
      title: "Event 2",
      start: new Date(new Date().setHours(start.getHours() + 1)),
      end: new Date(new Date().setHours(start.getHours() + 2)),
      backgroundColor: "purple",
      extendedProps: { id: 2 },
    },
    {
      title: "Event 3",
      start: new Date(new Date().setHours(start.getHours() + 2)),
      end: new Date(new Date().setHours(start.getHours() + 3)),
      backgroundColor: "#000",
      extendedProps: { id: 3 },
    },
  ],
};

export const addEvent = createAsyncThunk("addEvent", async (query) => {
  return event.addEvent(query);
});

export const updateEvent = createAsyncThunk("updateEvent", async (query) => {
  return event.updateEvent(query);
});

export const getEvents = createAsyncThunk("getEvents", async () => {
  return event.getEvents();
});

export const eventSlice = createSlice({
  name: "events",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(addEvent.fulfilled, (state, action) => {
        if (action.payload.event) {
          state.events = [...state.events, action.payload.event];
        }
        if (action.payload.message) {
          state.error = action.payload.message;
        }
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        if (action.payload) {
          const events = [...state.events, action.payload];
          state.events = [...new Set(events)];
        }
        if (action.payload.message) {
          state.error = action.payload.message;
        }
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        if (action.payload.events) {
          state.events = action.payload.events;
        }
        if (action.payload.message) {
          state.error = action.payload.message;
        }
      });
  },
});

export const state = (state) => state.events;

export default eventSlice.reducer;
