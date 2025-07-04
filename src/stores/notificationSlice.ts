import type { StateCreator } from "zustand";

type Notificacion = {
    text: string
    error: boolean 
    show: boolean
}

export type NotificationSliceType = {
    notification: Notificacion
}

export const crateNotificationSlice : StateCreator<NotificationSliceType> = (set, get) => ({
    notification: {
        text: "",
        error: false, 
        show: false
    }
})