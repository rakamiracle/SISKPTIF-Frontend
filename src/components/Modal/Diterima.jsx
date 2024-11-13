import {X, MoveRight} from "lucide-react";
import {useNavigate} from "react-router-dom";
import {File } from 'lucide-react';

const Diterima = ({title, text, textButton, isOpen, onClose, linkTo}) => {

    const navigate = useNavigate();
    if (!isOpen) return null;

    const handleButtonClick = () => {
        onClose();
        navigate(linkTo);
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4">
            <div
                className="bg-white dark:bg-gray-900 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="p-6 border-b">
                    <div className="flex justify-between items-start">
                        <div>
                            <h2 className="text-xl font-semibold">
                                {title}
                            </h2>
                            <p className="text-blue-500 font-semibold mt-2 underline">
                                Diterima!
                            </p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <X size={24}/>
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    <div className="border border-gray-200 rounded-lg p-4 bg-white">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-700">
                                {text}
                            </p>
                            <button
                                onClick={handleButtonClick}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                {textButton}
                                <MoveRight className="w-4 h-4 ml-2"/>
                            </button>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-3 mt-3">Nama Berkas</h3>
                        <div className="space-y-2">
                            {[
                                'Surat keterangan selesai kp dari instansi',
                                ...Array(6).fill('Daily Report Kerja Praktik')
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="text-black-600">
                                            <File className="w-5 h-5"/>
                                        </div>
                                        <span className="text-sm">{item}</span>
                                    </div>
                                    <button
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                                        View
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 text-sm text-black-600 font-medium">
                            Total: 7
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Diterima