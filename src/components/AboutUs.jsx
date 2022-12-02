import React from 'react'

const AboutUs = () => {
  return (
    <section className="about py-5 py-md-5 px-md-0">
        <div className="container px-4 text-center">
        <h1>AYO Relieve!</h1>
        <p className="w-75 mx-auto capt">
            Platform untuk menghubungkan orang-orang di seluruh dunia yang ingin
            memberikan dukungan kepada penyandang disabilitas maupun individu
            lain secara berkelanjutan.
        </p>
        <div className="d-flex justify-content-center flex-column align-items-center gap-4 flex-md-row my-md-3 justify-content-md-evenly">
            <div className="card text-start" style={{ width: "18rem" }}>
            <div className="card-body">
                <span className="material-symbols-outlined">
                volunteer_activism
                </span>
                <h5 className="card-title">Dapatkan Donasi</h5>
                <p className="card-text">
                Cari bantuan yang cocok bagimu, daftar sebagai pelamar pada
                sebuah program.
                </p>
            </div>
            </div>
            <div className="card text-start" style={{ width: "18rem" }}>
            <div className="card-body">
                <span className="material-symbols-outlined">diversity_1</span>
                <h5 className="card-title">Disabilitas</h5>
                <p className="card-text">
                Bantu masyarakat penyandang disabilitas agar memiliki semangat
                untuk maju.
                </p>
            </div>
            </div>
            <div className="card text-start" style={{ width: "18rem" }}>
            <div className="card-body">
                <span className="material-symbols-outlined">
                sentiment_satisfied
                </span>
                <h5 className="card-title">Jadilah Penyalur</h5>
                <p className="card-text">
                Bagikan kebahagianmu kepada orang lain yang lebih membutuhkan.
                </p>
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}

export default AboutUs