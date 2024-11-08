import React from 'react'
import Upload from "../../components/Upload"

const Pendaftaran = () => {
  return (
    <div className='grid grid-cols-1 gap-4'>
      <Upload title={"Lembar Pernyataan Telah Melaksanakan KP"} text={"Lembar pernyataan sudah ditandatangani dan distempel basah oleh instansi KP, juga sudah ditanda tangan basah oleh dosen pembimbing KP. Link template : https://s.id/pernyataan-selesai-kp  "}/>
      <Upload title={"Lembar Form Bimbingan KP"} text={"Dengan minimal sudah melakukan bimbingan sebanyak 5 kali"}/>
      <Upload title={"Setoran Hafalan"} text={"Scan bukti setoran hafalan surat 1 - 16"}/>
      <Upload title={"Formulir Pengajuan Pendaftaran Diseminasi KP"} text={"Link template : https://s.id/form-diseminasi-kp"}/>
    </div>
  )
}

export default Pendaftaran