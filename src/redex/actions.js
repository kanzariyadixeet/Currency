import { createAsyncThunk, createSlice, } from "@reduxjs/toolkit";

export const apidata = createAsyncThunk("api", async () => {
    const response = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
    return response.json();
});



const apiSlice = createSlice({
    name: 'api',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },


    extraReducers: (builder) => {
        builder.addCase(apidata.pending, (state) => {
            state.isLoading = true;
        })
            .addCase(apidata.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(apidata.rejected, (state, action) => {
                console.log("error", action.error);
                state.isLoading = false;
                state.isError = true;
            });
    }

});
export default apiSlice.reducer;
