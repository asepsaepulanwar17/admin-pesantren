export default function DashboardPesantren() {
  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-emerald-800 mb-6">SIM Pondok Pesantren</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
          <p className="text-sm text-gray-500">Total Santri</p>
          <h2 className="text-2xl font-bold text-emerald-600">450 Santri</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
          <p className="text-sm text-gray-500">Pemasukan Bulan Ini</p>
          <h2 className="text-2xl font-bold text-blue-600">Rp 45.000.000</h2>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
          <p className="text-sm text-gray-500">Ustaz / Pengajar</p>
          <h2 className="text-2xl font-bold text-amber-600">35 Orang</h2>
        </div>
      </div>
    </main>
  );
}