import { configureStore } from '@reduxjs/toolkit';
import settingSlice from "./settingSlice.ts";

export default configureStore({
  reducer: {
    // Свойство counter будет внутри объекта общего состояния: state.counter
    settings: settingSlice,
  },
});