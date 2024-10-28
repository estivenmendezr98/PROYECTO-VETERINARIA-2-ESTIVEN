import { useForm } from 'react-hook-form';
import { useMedicalStore } from '../../store/medicalStore';

export default function VaccineForm({ vaccine, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: vaccine || {}
  });
  const addVaccine = useMedicalStore(state => state.addVaccine);
  const updateVaccine = useMedicalStore(state => state.updateVaccine);

  const onSubmit = (data) => {
    if (vaccine) {
      updateVaccine(vaccine.id, { ...vaccine, ...data });
    } else {
      addVaccine({ ...data, id: Date.now() });
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
          Type
        </label>
        <input
          type="text"
          {...register('tipo', { required: true })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.tipo && <span className="text-red-500 text-xs">This field is required</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Quantity
        </label>
        <input
          type="number"
          step="0.01"
          {...register('cantidad', { required: true, min: 0 })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.cantidad && <span className="text-red-500 text-xs">This field is required</span>}
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
          {vaccine ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  );
}