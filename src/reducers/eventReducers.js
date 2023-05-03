import { 
    IS_LOADING,
    EVENT_ERROR,
    GET_ALL_EVENTS_SUCCESS,
    GET_EVENT_BY_ID_SUCCESS,
    CREATE_EVENT_SUCCESS,
    UPDATE_EVENT_SUCCESS,
    DELETE_EVENT_SUCCESS,
    GET_ALL_EVENTS_ERROR,
    CREATE_EVENT_ERROR,
    UPDATE_EVENT_ERROR,
    DELETE_EVENT_ERROR,
    CLEAN_ERR_AND_MSG
} from "../actions/actionTypes";

export const initStateEvent = {
    loading: false,
    events: [],
    error: null,
    msg: ""
}

export const eventReducer = (state, action) => {
    switch(action.type){
        case GET_ALL_EVENTS_SUCCESS:
            return {loading:false, events:action.payload, error:null, msg:"Events Successfully fetched."}
        //case GET_EVENT_BY_ID_SUCCESS :
        case CREATE_EVENT_SUCCESS :
            return {loading: false, events: [...state.events, action.payload], error: null, msg: `Events <id:${action.payload.id}> successfully created`}
        case UPDATE_EVENT_SUCCESS:
            return {loading: false, events: [...state.events.filter(e => e.id !== action.payload.id), action.payload], error: null, msg: `Events <id:${action.payload.id}> successfully updated`}
        case DELETE_EVENT_SUCCESS :
            return {events: [...state.events.filter(e => e.id !== action.payload.id)], error:null,loading:false, msg:"Events Successfully deleted."}
        case IS_LOADING :
            return {...state , loading:true, msg: ""}
        case CLEAN_ERR_AND_MSG:
            return {...state, error: null, msg: null}
        case GET_ALL_EVENTS_ERROR:
            return {loading:false, events:[], error:action.payload, msg:""}
        case CREATE_EVENT_ERROR:
        case UPDATE_EVENT_ERROR:
        case DELETE_EVENT_ERROR:
            return {...state, loading: false, error:action.payload, msg:""}
        case EVENT_ERROR:
            return {loading:false, events:[], error:action.payload, msg: ""}
        default:
            return state
    }
}