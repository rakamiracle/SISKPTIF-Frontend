import React from 'react';
import {ListChecks, Loader, FileX} from 'lucide-react';

const CardPersyaratan = ({number, date, status}) => {
    const getStatusButton = () => {
        if (status === 'revisi') {
            return (
                <div
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-red-700 rounded-lg">
                    <FileX className="w-6 h-6 mr-2"/>
                    Revisi
                </div>
            );
        } else if (status === 'diterima') {
            return (
                <div
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-lg">
                    <ListChecks className="w-6 h-6 mr-2"/>
                    Diterima
                </div>
            );
        } else if (status === 'menunggu') {
            return (
                <div
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-yellow-500 rounded-lg">
                    <Loader className="w-6 h-6 mr-2"/>
                    Menunggu
                </div>
            );
        }
    };

    return (
        <div
            className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-col gap-2">
                    <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Pengajuan #{number}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {date}
                    </p>
                </div>
                <div className="flex gap-3">
                    {getStatusButton()}
                    <a href="#"
                       className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        View
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardPersyaratan;