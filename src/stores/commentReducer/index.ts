import { createSlice } from "@reduxjs/toolkit";
import { initCommentState } from "./init";

const commentSlice = createSlice({
    name: 'comment',
    initialState: initCommentState,
    reducers: {}
})

export default commentSlice.reducer;