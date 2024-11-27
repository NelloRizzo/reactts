import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface StringBuilder {
    content: string
}

const initialState: StringBuilder = { content: '' }

interface RemovePayload {
    from: number
    to: number
}
const stringBuilderSlice = createSlice({
    name: 'stringBuilder',
    initialState,
    reducers: {
        append: (state, action: PayloadAction<string>) => { state.content += action.payload },
        remove: (state, action: PayloadAction<RemovePayload>) => {
            state.content = state.content.slice(0, action.payload.from - 1) + state.content.slice(action.payload.to)
        }
    }
})

export const { append, remove } = stringBuilderSlice.actions
export default stringBuilderSlice.reducer