import { useForm } from 'react-hook-form';
import { useMedicalStore } from '../../store/medicalStore';

export default function AnamnesisForm({ anamnesis, onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: anamnesis || {}
  });
  const addAnamnesis = useMedicalStore(state => state.addAnamnesis);
  const updateAnamnesis = useMedicalStore(state => state.updateAnamnesis);

  const onSubmit = (data) => {
    if (anamnesis) {
      updateAnamnesis(anamnesis.id, { ...anamnesis, ...data });
    } else {
      addAnamnesis({ ...data, id: Date.now() });
    }
    onClose();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register('descripcion', { required: true })}
          rows={4}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
        {errors.descripcion && <span className="text-red-500 text-xs">This field is required</span>}
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
          {anamnesis ? 'Update' : 'Save'}
        </button>
      </div>
    </form>
  );
}