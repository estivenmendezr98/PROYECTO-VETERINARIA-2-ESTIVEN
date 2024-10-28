import { useState } from 'react';

export default function Appointments() {
  const [appointments] = useState([
    { 
      id: 1, 
      patient: 'Max',
      owner: 'John Doe',
      date: '2023-12-21',
      time: '10:00 AM',
      status: 'Scheduled'
    },
    {
      id: 2,
      patient: 'Luna',
      owner: 'Jane Smith',
      date: '2023-12-22',
      time: '2:30 PM',
      status: 'Confirmed'
    },
  ]);

  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
            Appointments
          </h2>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-500"
          >
            New appointment
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Patient</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Owner</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Date</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Time</th>
                  <th className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {appointments.map((appointment) => (
                  <tr key={appointment.id}>
                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                      {appointment.patient}
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{appointment.owner}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{appointment.date}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{appointment.time}</td>
                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{appointment.status}</td>
                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                      <button className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
                      <button className="text-red-600 hover:text-red-900">Cancel</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}