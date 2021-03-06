import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import controller from '../features/controller/controllerSlice';
import meteo from '../features/meteo/meteoSlice';
import area from '../features/area/areaSlice';
import menu from '../features/menu/menuSlice';

export const store = configureStore({
  reducer: {
    area,
    controller,
    meteo,
    menu,
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
