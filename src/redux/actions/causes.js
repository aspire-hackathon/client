import * as type from '../types/causes';

export function getCauses(causes) {
    return {
        type: type.GET_CAUSES,
        payload: causes,
    }
}

export function getCauseById(id) {
    return {
        type: type.GET_CAUSE_BYID,
        payload: id,
    }
}

export function joinCause(id,volId) {
    return {
        type: type.UPDATE_VOLUNTEER,
        payload: {
            id,
            volId
        }
    }
}