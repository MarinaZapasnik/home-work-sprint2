export type InitStateType = {
    themeId: number
}

const initState: InitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionsTypes): InitStateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID': {
            return { ...state, themeId: action.id}
        }
        // дописать

        default:
            return state
    }
}

export type ActionsTypes = ChangeThemeIdAT



export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID' as const, id }) // fix any


type ChangeThemeIdAT = ReturnType<typeof changeThemeId>

