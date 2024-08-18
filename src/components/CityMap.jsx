import React from 'react';

const offices = [
  { city: 'Delhi', state: 'Delhi' },
  { city: 'Khera', state: 'Haryana' },
  { city: 'Amedabad', state: 'Gujarat' },
  { city: 'Noida', state: 'Uttar Pradesh' },
  { city: 'Pune', state: 'Maharashtra' },
  { city: 'Rajkot', state: 'Gujarat' },
  { city: 'Bhiwandi', state: 'Maharashtra' },
  { city: 'Ankleshwar', state: 'Gujarat' },
  { city: 'Kanpur', state: 'Uttar Pradesh' },
  { city: 'Lucknow', state: 'Uttar Pradesh' },
];

const OfficeTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">City</th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">State</th>
          </tr>
        </thead>
        <tbody>
          {offices.map((office, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="px-6 py-4 border-b border-gray-300">{office.city}</td>
              <td className="px-6 py-4 border-b border-gray-300">{office.state}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OfficeTable;
