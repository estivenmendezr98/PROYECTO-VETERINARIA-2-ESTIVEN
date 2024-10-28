import { useForm } from 'react-hook-form';
import { useMedicalStore } from '../../store/medicalStore';

export default function DiagnosisForm({ diagnosis, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: diagnosis || {}
  });
  const addDiagnosis = useMedicalStore(state => state.addDiagnosis);
  const updateDiagnosis = useMedicalStore(state => state.updateDiagnosis);

  const onSubmit = (data) => {
    if (diagnosis) {
      updateDiagnosis(diagnosis.id, { ...diagnosis, ...data });
    } else {
      addDiagnosis({ ...data, id: Date.now() });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Classification
        </label>
        <input
          type="text"
          {...register('clasificacion', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.clasificacion && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Code
        </label>
        <input
          type="text"
          {...register('codigo', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.codigo && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onClose}
          className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          {diagnosis ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  );
}