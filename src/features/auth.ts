import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    IAuthInitialState,
    IAuthPayloadProps
} from "../Interface/Pages/Auth/Auth";
const initialState: IAuthInitialState = {
  user: {},
  isAuthenticated: false,
  sessionId: "",
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state: IAuthInitialState,
      action: PayloadAction<IAuthPayloadProps>
    ) => {
      // console.log(action.payload.id,'from auth action');
      state.user = action.payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem("session_id");

      localStorage.setItem("accountId", action.payload.id.toString());
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
