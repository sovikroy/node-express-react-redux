export const callApiReducer = (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_API':
            return {
                ...state,
                response: action.payload
            }
        default:
            return state;
    }
};