import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface SESSIONS {
  id: number;
  name: string;
  location: string;
  date: string;
  time: string;
  upcoming: boolean;
  canceled: boolean; // Corrected typo in the property name
}

interface sessionType {
  sessions: SESSIONS[];
}

let nextId = 1; // Initialize a counter for generating unique IDs

const initialState: sessionType = {
  sessions: [],
};

const pinSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    saveSessions: (state, action: PayloadAction<SESSIONS>) => {
      const newSession = action.payload;
      newSession.id = nextId++; // Assign the next ID and increment the counter
      state.sessions.push(action.payload);
    },
    cancelSession: (state, action: PayloadAction<number>) => {
      // Updated payload type to number
      const appointmentId = action.payload;
      const appointmentIndex = state.sessions.findIndex(
        appointment => appointment.id === appointmentId,
      );
      if (appointmentIndex !== -1) {
        state.sessions[appointmentIndex].upcoming = false;
        state.sessions[appointmentIndex].canceled = true;
      }
    },
  },
});

export const {saveSessions, cancelSession} = pinSlice.actions;

export const selectAllSessions = (state: {sessions: sessionType}) =>
  state.sessions.sessions;

export default pinSlice.reducer;
