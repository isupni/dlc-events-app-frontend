import { GET_ALL_EVENTS_SUCCESS, GET_ALL_EVENTS_ERROR, IS_LOADING, CREATE_EVENT_SUCCESS, CREATE_EVENT_ERROR, UPDATE_EVENT_SUCCESS, UPDATE_EVENT_ERROR, DELETE_EVENT_SUCCESS, DELETE_EVENT_ERROR, CLEAN_ERR_AND_MSG } from "./actionTypes"
import {mockEvents} from "../mockData"

export const getAllevents = async (dispatch) => {
    dispatch({type: IS_LOADING})
    try{
        if (process.env.NODE_ENV==='development'){
            dispatch({type: GET_ALL_EVENTS_SUCCESS, payload:mockEvents})
            return
        }
        const res = await fetch("/api/events/")
       
        if (res.ok){
            const data = await res.json()
            dispatch({type: GET_ALL_EVENTS_SUCCESS, payload:data})
        }
        else {
            const err = await res.text()
            throw { status: res.status, title:res.statusText ,message: err}
        }
    }
    catch (err) {
        dispatch(
        {
            type:GET_ALL_EVENTS_ERROR, 
            payload:{
                status:err.status || 500 , 
                message:err.message || `${err.stack}`,
                title: err.title || "Generic Error fetching all events"
            }
        })
        console.log(err.message)

    }
}

//export const getEventById = async (id) => {}

export const createEvent = async (dispatch,event) => {
    dispatch({type: IS_LOADING})
    try{
        if (process.env.NODE_ENV==='development'){
            event['id'] = Math.floor(Math.random() * (199 - 100) + 100);
            dispatch({type: CREATE_EVENT_SUCCESS, payload:event})
            return
        }
        event.severity = {value: event.severity}
        const res = await fetch("/api/events/add",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        });
       
        if (res.ok){
            const data = await res.json()
            dispatch({type: CREATE_EVENT_SUCCESS, payload:data})
        }
        else {
            const err = await res.text()
            throw { status: res.status, title:res.statusText ,message: err}
        }
    }
    catch (err) {
        dispatch(
        {
            type:CREATE_EVENT_ERROR, 
            payload:{
                status:err.status || 500 , 
                message:err.message || `${err.stack}`,
                title: err.title || "Generic Error Adding an Event"
            }
        })
        console.log(err.message)
    }
}

export const updateEvent = async (dispatch,event) => {
    dispatch({type: IS_LOADING})
    try{
        if (process.env.NODE_ENV==='development'){
            dispatch({type: UPDATE_EVENT_SUCCESS , payload:event})
            return
        }
        event.severity = {value: event.severity}
        const res = await fetch(`/api/events/${event.id}`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        });
       
        if (res.ok){
            const data = await res.json()
            dispatch({type: UPDATE_EVENT_SUCCESS, payload:data})
        }
        else {
            const err = await res.text()
            throw { status: res.status, title:res.statusText ,message: err}
        }
    }
    catch (err) {
        dispatch(
        {
            type: UPDATE_EVENT_ERROR, 
            payload:{
                status:err.status || 500 , 
                message:err.message || `${err.stack}`,
                title: err.title || `Generic Error Updating Event ${event.id}`
            }
        })
        console.log(err.message)
    }
}
export const deleteEvent = async (dispatch,id) => {
    dispatch({type: IS_LOADING})
    try{
        // if (process.env.NODE_ENV==='development'){
        //     dispatch({type: UPDATE_EVENT_SUCCESS , payload:event})
        //     return
        // }
        
        const res = await fetch(`/api/events/${id}`,{
            method: 'DELETE'
        });
       
        if (res.ok){
            const data = await res.json()
            dispatch({type: DELETE_EVENT_SUCCESS, payload:data})
        }
        else {
            const err = await res.text()
            throw { status: res.status, title:res.statusText ,message: err}
        }
    }
    catch (err) {
        dispatch(
        {
            type: DELETE_EVENT_ERROR, 
            payload:{
                status:err.status || 500 , 
                message:err.message || `${err.stack}`,
                title: err.title || `Generic Error Deletinh Event ${id}`
            }
        })
        console.log(err.message)
    }
}

export const cleanMsgAndErr = (dispatch) => {
    dispatch({type: CLEAN_ERR_AND_MSG})
}