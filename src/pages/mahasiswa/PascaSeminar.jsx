import {useState} from 'react'
import CardPersyaratan from "../../components/CardPersyaratan.jsx";
import { CirclePlus } from "lucide-react";
import ModalUploadPascaSeminar from "../../components/ModalUploadPascaSeminar.jsx";

const PascaSeminar = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const submissions = [
        { number: 1, date: "Senin, 4 November 2024", status: "revisi" },
        { number: 2, date: "Selasa, 5 November 2024", status: "diterima" },
        { number: 3, date: "Rabu, 6 November 2024", status: "menunggu" },
    ];
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Riwayat Pengajuan Dokumen Pasca Seminar
                </h3>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Create
                    <CirclePlus className="w-6 h-6 ml-2"/>
                </button>
            </div>

            {/* Submission Cards */}
            {submissions.map((submission, index) => (
                <CardPersyaratan
                    key={index}
                    number={submission.number}
                    date={submission.date}
                    status={submission.status}
                />
            ))}

            {/* Modal */}
            <ModalUploadPascaSeminar
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    )
}

export default PascaSeminar