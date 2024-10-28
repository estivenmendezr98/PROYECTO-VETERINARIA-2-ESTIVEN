import { create } from 'zustand';

export const useMedicalStore = create((set) => ({
  diagnoses: [],
  treatments: [],
  vaccines: [],
  anamnesis: [],

  setDiagnoses: (diagnoses) => set({ diagnoses }),
  setTreatments: (treatments) => set({ treatments }),
  setVaccines: (vaccines) => set({ vaccines }),
  setAnamnesis: (anamnesis) => set({ anamnesis }),

  addDiagnosis: (diagnosis) => set((state) => ({ 
    diagnoses: [...state.diagnoses, diagnosis] 
  })),
  addTreatment: (treatment) => set((state) => ({ 
    treatments: [...state.treatments, treatment] 
  })),
  addVaccine: (vaccine) => set((state) => ({ 
    vaccines: [...state.vaccines, vaccine] 
  })),
  addAnamnesis: (anamnesisRecord) => set((state) => ({ 
    anamnesis: [...state.anamnesis, anamnesisRecord] 
  })),

  updateDiagnosis: (id, updatedDiagnosis) => set((state) => ({
    diagnoses: state.diagnoses.map(d => d.id === id ? updatedDiagnosis : d)
  })),
  updateTreatment: (id, updatedTreatment) => set((state) => ({
    treatments: state.treatments.map(t => t.id === id ? updatedTreatment : t)
  })),
  updateVaccine: (id, updatedVaccine) => set((state) => ({
    vaccines: state.vaccines.map(v => v.id === id ? updatedVaccine : v)
  })),
  updateAnamnesis: (id, updatedAnamnesis) => set((state) => ({
    anamnesis: state.anamnesis.map(a => a.id === id ? updatedAnamnesis : a)
  })),

  deleteDiagnosis: (id) => set((state) => ({
    diagnoses: state.diagnoses.filter(d => d.id !== id)
  })),
  deleteTreatment: (id) => set((state) => ({
    treatments: state.treatments.filter(t => t.id !== id)
  })),
  deleteVaccine: (id) => set((state) => ({
    vaccines: state.vaccines.filter(v => v.id !== id)
  })),
  deleteAnamnesis: (id) => set((state) => ({
    anamnesis: state.anamnesis.filter(a => a.id !== id)
  })),
}));