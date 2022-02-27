import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
    selectedMail: null
  },

  reducers: {
    changeSendMessageIsOpen: (state) => {
      state.sendMessageIsOpen = !state.sendMessageIsOpen;
    },
    selectMail: (state, action) => {
      state.selectedMail = action.payload;
    }
  },

});

export const { changeSendMessageIsOpen, selectMail } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;
export const selectOpenMail = (state) => state.mail.selectedMail;

export default mailSlice.reducer;
