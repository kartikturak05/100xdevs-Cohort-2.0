
import {atom,selector} from "recoil"

export const networkAtom = atom({
    key : "networkAtom",
    default:104 
});

export const jobsAtom = atom({
    key:"jobsAtom",
    default:2
});

export const notificationAtom = atom({
    key:"notificationAtom",
    default:34
});

export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
});

export const totalNotificationCountSelector = selector({
    key : "totalNotificationCountSelector",
    get: ({get})=>{
        return get(networkAtom)+get(jobsAtom)+get(notificationAtom)+get(messagingAtom)
    }
})
