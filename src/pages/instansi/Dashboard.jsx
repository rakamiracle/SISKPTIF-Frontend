import Navbar from '../../components/Navbar.jsx';

const Dashboard = () => {
    const students = [
        {
            nim: '1910518001',
            name: 'Budi Santoso',
            department: 'Teknik Informatika',
            status: 'Aktif',
            action: 'Input Nilai'
        },
        {
            nim: '1910518002',
            name: 'Ani Wijaya',
            department: 'Teknik Informatika',
            status: 'Aktif',
            action: 'Input Nilai'
        },
        {
            nim: '1910518003',
            name: 'Deni Pratama',
            department: 'Teknik Informatika',
            status: 'Selesai',
            action: 'Sudah Dinilai'
        }
    ];

    return (
        <div>
            <Navbar/>
            <h1 className="text-4xl font-semibold mb-6">Halo, Ahmad Supardi</h1>

            {/* Stats Boxes */}
            <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold">3</h2>
                    <p>Mahasiswa Aktif</p>
                </div>
                <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold">2</h2>
                    <p>Menunggu Penilaian</p>
                </div>
                <div className="bg-blue-900 text-white p-4 rounded-lg text-center">
                    <h2 className="text-2xl font-semibold">1</h2>
                    <p>Mahasiswa Selesai KP</p>
                </div>
            </div>

            {/* Student Card List */}
            <div className="bg-gray-100 p-6 rounded-lg">
                <h2 className="text-lg font-medium mb-4">Daftar Mahasiswa</h2>

                {/* Search and Filter */}
                <div className="flex items-center mb-4">
                    <input
                        type="text"
                        placeholder="Cari mahasiswa..."
                        className="flex-1 p-2 border border-gray-300 rounded-l-lg focus:outline-none"
                    />
                    <button className="bg-blue-900 text-white p-2 rounded-r-lg">Filter</button>
                </div>

                {/* Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {students.map((student, index) => (
                        <div
                            key={index}
                            className="p-4 bg-white rounded-lg shadow-md flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
                                <p className="text-gray-600">NIM: {student.nim}</p>
                                <p className="text-gray-600">Jurusan: {student.department}</p>
                                <div className="mt-2">
                  <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                          student.status === "Aktif" ? "bg-green-500" : "bg-gray-500"
                      }`}
                  >
                    {student.status}
                  </span>
                                </div>
                            </div>
                            <div className="mt-4">
                                <button
                                    className={`w-full py-2 rounded-lg font-medium ${
                                        student.action === "Input Nilai" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-700"
                                    }`}
                                >
                                    {student.action}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;