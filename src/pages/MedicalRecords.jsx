import { useState } from 'react';
import { useMedicalStore } from '../store/medicalStore';
import DiagnosisForm from '../components/medical/DiagnosisForm';
import TreatmentForm from '../components/medical/TreatmentForm';
import VaccineForm from '../components/medical/VaccineForm';
import AnamnesisForm from '../components/medical/AnamnesisForm';

export default function MedicalRecords() {
  const [activeTab, setActiveTab] = useState('diagnoses');
  const [showForm, setShowForm] = useState(false);
  const [editItem, setEditItem] = useState(null);

  const {
    diagnoses,
    treatments,
    vaccines,
    anamnesis,
    deleteDiagnosis,
    deleteTreatment,
    deleteVaccine,
    deleteAnamnesis
  } = useMedicalStore();

  const handleAdd = () => {
    setEditItem(null);
    setShowForm(true);
  };

  const handleEdit = (item) => {
    setEditItem(item);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this record?')) {
      switch (activeTab) {
        case 'diagnoses':
          deleteDiagnosis(id);
          break;
        case 'treatments':
          deleteTreatment(id);
          break;
        case 'vaccines':
          deleteVaccine(id);
          break;
        case 'anamnesis':
          deleteAnamnesis(id);
          break;
      }
    }
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'diagnoses':
        return <DiagnosisForm diagnosis={editItem} onClose={() => setShowForm(false)} />;
      case 'treatments':
        return <TreatmentForm treatment={editItem} onClose={() => setShowForm(false)} />;
      case 'vaccines':
        return <VaccineForm vaccine={editItem} onClose={() => setShowForm(false)} />;
      case 'anamnesis':
        return <AnamnesisForm anamnesis={editItem} onClose={() => setShowForm(false)} />;
      default:
        return null;
    }
  };

  const getActiveData = () => {
    switch (activeTab) {
      case 'diagnoses':
        return diagnoses;
      case 'treatments':
        return treatments;
      case 'vaccines':
        return vaccines;
      case 'anamnesis':
        return anamnesis;
      default:
        return [];
    }
  };

  const renderTableHeaders = () => {
    switch (activeTab) {
      case 'diagnoses':
        return (
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Classification</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Code</th>
            <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">Actions</th>
          </tr>
        );
      case 'treatments':
        return (
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Description</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Start Date</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">End Date</th>
            <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">Actions</th>
          </tr>
        );
      case 'vaccines':
        return (
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Quantity</th>
            <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">Actions</th>
          </tr>
        );
      case 'anamnesis':
        return (
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Description</th>
            <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">Actions</th>
          </tr>
        );
      default:
        return null;
    }
  };

  const renderTableRow = (item) => {
    switch (activeTab) {
      case 'diagnoses':
        return (
          <tr key={item.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              {item.clasificacion}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.codigo}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <button
                onClick={() => handleEdit(item)}
                className="text-indigo-600 hover:text-indigo-900 mr-4"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      case 'treatments':
        return (
          <tr key={item.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              {item.nombre}
            </td>
            <td className="px-3 py-4 text-sm text-gray-500">{item.descripcion}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.fechaInicio}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.fechaFin}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <button
                onClick={() => handleEdit(item)}
                className="text-indigo-600 hover:text-indigo-900 mr-4"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      case 'vaccines':
        return (
          <tr key={item.id}>
            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
              {item.nombre}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.tipo}</td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{item.cantidad}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <button
                onClick={() => handleEdit(item)}
                className="text-indigo-600 hover:text-indigo-900 mr-4"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      case 'anamnesis':
        return (
          <tr key={item.id}>
            <td className="py-4 pl-4 pr-3 text-sm text-gray-500">{item.descripcion}</td>
            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
              <button
                onClick={() => handleEdit(item)}
                className="text-indigo-600 hover:text-indigo-900 mr-4"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="text-red-600 hover:text-red-900"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      default:
        return null;
    }
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Medical Records</h1>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            onClick={handleAdd}
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500"
          >
            Add New
          </button>
        </div>
      </div>

      <div className="mt-4">
        <div className="sm:hidden">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            <option value="diagnoses">Diagnoses</option>
            <option value="treatments">Treatments</option>
            <option value="vaccines">Vaccines</option>
            <option value="anamnesis">Anamnesis</option>
          </select>
        </div>

        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              {['diagnoses', 'treatments', 'vaccines', 'anamnesis'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
                    ${activeTab === tab
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            {renderForm()}
          </div>
        </div>
      )}

      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                {renderTableHeaders()}
              </thead>
              <tbody className="divide-y divide-gray-200">
                {getActiveData().map(renderTableRow)}
              </tbody>
            </table>
            {getActiveData().length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No records found. Click "Add New" to create one.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}