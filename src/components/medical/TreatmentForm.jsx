import { useForm } from 'react-hook-form';
import { useMedicalStore } from '../../store/medicalStore';

export default function TreatmentForm({ treatment, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: treatment || {}
  });
  const addTreatment = useMedicalStore(state => state.addTreatment);
  const updateTreatment = useMedicalStore(state => state.updateTreatment);

  const onSubmit = (data) => {
    if (treatment) {
      updateTreatment(treatment.id, { ...treatment, ...data });
    } else {
      addTreatment({ ...data, id: Date.now() });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          {...register('nombre', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.nombre && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register('descripcion', { required: true })}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.descripcion && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            {...register('fechaInicio', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.fechaInicio && <span className="text-red-500 text-xs">This field is required</span>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <input
            type="date"
            {...register('fechaFin', { required: true })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.fechaFin && <span className="text-red-500 text-xs">This field is required</span>}
        </div>
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
          {treatment ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  );
}