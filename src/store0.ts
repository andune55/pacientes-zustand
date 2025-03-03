import { create } from "zustand" 
import { v4 as uuidv4 } from 'uuid'
import { DraftPatient, Patient } from "./types"

type PatientState = {
    patients: Patient[]
    addPatient: (data: DraftPatient) => void
}

const createPatient = (Patient: DraftPatient) : Patient => {
    return { ...Patient, id: uuidv4()}
}

export const usePatientStore = create<PatientState>((set) => ({
    patients: [],
    addPatient: (data) => {
        //console.log(data)
        const newPatient = createPatient(data)
        set((state) => ({
            patients: [...state.patients, newPatient]
        }))
    }
}))