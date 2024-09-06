import { configureStore } from '@reduxjs/toolkit';

import api_r from "./actions"

export const store = configureStore({
    reducer: {

        api: api_r,

    },
});
