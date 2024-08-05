import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-md p-4">
        <h1 className="text-2xl font-bold text-gray-800">Kullanıcı Dashboard</h1>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Sunucu Bilgileri Kartları */}
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Sunucu 1</h2>
            <p className="text-gray-600">Durum: Aktif</p>
            <p className="text-gray-600">IP: 192.168.1.1</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Yeniden Başlat</button>
          </div>

          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Sunucu 2</h2>
            <p className="text-gray-600">Durum: Pasif</p>
            <p className="text-gray-600">IP: 192.168.1.2</p>
            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded">Başlat</button>
          </div>

          {/* Daha fazla sunucu kartı ekleyin */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
