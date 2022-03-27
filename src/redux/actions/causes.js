import * as type from '../types/causes';

export function getCauses(causes) {
    return {
        type: type.GET_CAUSES,
        payload: causes,
    }
}