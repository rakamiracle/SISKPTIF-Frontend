import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "Apa saja syarat pendaftaran seminar KP?",
      answer:
        "Syarat pendaftaran meliputi telah menyelesaikan KP, memiliki laporan KP yang telah disetujui pembimbing, dan telah mengumpulkan semua dokumen yang diperlukan.",
    },
    {
      question: "Berapa lama proses verifikasi pendaftaran?",
      answer:
        "Proses verifikasi pendaftaran biasanya memakan waktu 2-3 hari kerja setelah semua dokumen lengkap.",
    },
    {
      question: "Bagaimana cara mengubah jadwal seminar?",
      answer:
        "Perubahan jadwal seminar dapat diajukan melalui sistem dengan menyertakan alasan yang jelas dan menunggu persetujuan dari koordinator KP.",
    },
    {
      question: "Apa format file yang diterima untuk upload dokumen?",
      answer:
        "Sistem menerima file dalam format PDF dengan ukuran maksimal 5MB per file.",
    },
  ];

  return (
    <div id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Temukan jawaban dari pertanyaan yang sering diajukan
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
