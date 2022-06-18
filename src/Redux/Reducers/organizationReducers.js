import * as types from "../Constants/action-types";

const initialState = {
    organizations: [],
    organization: {},
    loading: true,
}


export const organizationReducers = (state = initialState, action) => {
    

    switch (action.type) {

        case types.GET_ORGANIZATIONS:
            return {
                ...state,
                organizations: action.payload,
                loading: false,
            };
            

      
            
        case types.ADD_ORGANIZATIONS:
            return {
                ...state,
                loading: false,
            }

        case types.UPDATE_ORGANIZATIONS:
            return {
                ...state,
                loading: false,
            }

        case types.DELETE_ORGANIZATIONS:
            return {
                ...state,
                loading: false,
            }


        //------------------Team CRUD------------------

        case types.ADD_TEAMS:
            return {
                ...state,
                loading: false,
            }

    
        default:
            return state;
    }  

    
};
