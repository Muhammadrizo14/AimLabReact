import { createSlice } from '@reduxjs/toolkit';

// Начальное значение
const initialState = {
  timeTraining: !localStorage.getItem('timeTraining') ? 6 : Number(localStorage.getItem('timeTraining')), //seconds
  countTarget: !localStorage.getItem('countTarget') ? 2 : Number(localStorage.getItem('countTarget')),
  movement: !localStorage.getItem('movement') ? false : localStorage.getItem('movement')
};

const settingSlice = createSlice({
  name: 'settingSlice',
  initialState,
  // Редьюсеры в слайсах меняют состояние и ничего не возвращают
  reducers: {
    trainingTime: (state, action) => {
      localStorage.setItem('timeTraining', action.payload)
      state.timeTraining = Number(action.payload);
    },
    countTarget: (state, action) => {
      localStorage.setItem('countTarget', action.payload)
      state.countTarget = Number(action.payload);

    },
    // Пример с данными
    movementTarget: (state) => {
      localStorage.setItem('movement', (!state.movement).toString())
      state.movement = !state.movement
    },
  },
});

// Слайс генерирует действия, которые экспортируются отдельно
// Действия генерируются автоматически из имен ключей редьюсеров
export const { trainingTime, countTarget, movementTarget } = settingSlice.actions;

// По умолчанию экспортируется редьюсер, сгенерированный слайсом
export default settingSlice.reducer;