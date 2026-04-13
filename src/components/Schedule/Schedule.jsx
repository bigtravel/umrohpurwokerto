import React from 'react';
import './Schedule.css';

const scheduleData = [
  {
    month: 'JUNI',
    list: [
      {
        date: '23 JUN',
        program: 'Yalla',
        makkah: 'Kayan Ar Raya',
        madinah: 'Mukhtar Algharbi',
        airlines: 'Qatar, Emirates, Etihad, Oman Air, Lion Air',
        duration: '9D'
      },
      {
        date: '23 JUN',
        program: 'Silver',
        makkah: 'Elaf Prestige',
        madinah: 'Golden Tulip',
        airlines: 'Garuda Indonesia, Saudia',
        duration: '9D'
      },
      {
        date: '23 JUN',
        program: 'Gold',
        makkah: 'Pullman / Sofwah',
        madinah: 'Rove Al Madinah',
        airlines: 'Garuda Indonesia, Saudia',
        duration: '9D'
      },
      {
        date: '30 JUN',
        program: 'Silver COMBAIN',
        makkah: 'Orinsis',
        madinah: 'Dar An Naem',
        airlines: 'Garuda Indonesia, Saudia',
        duration: '10D'
      }
    ]
  },
  {
    month: 'JULI',
    list: [
      {
        date: '07 JUL',
        program: 'Silver',
        makkah: 'Elaf Prestige',
        madinah: 'Golden Tulip',
        airlines: 'Garuda Indonesia, Saudia',
        duration: '9D'
      },
      {
        date: '14 JUL',
        program: 'Yalla',
        makkah: 'Kayan Ar Raya',
        madinah: 'Mukhtar Algharbi',
        airlines: 'Qatar, Emirates, Etihad, Oman Air, Lion Air',
        duration: '9D'
      },
      {
        date: '21 JUL',
        program: 'Silver',
        makkah: 'Elaf Prestige',
        madinah: 'Golden Tulip',
        airlines: 'Garuda Indonesia, Saudia',
        duration: '9D'
      }
    ]
  },
  {
    month: 'AGUSTUS',
    list: [
      {
        date: '04 AUG',
        program: 'Yalla',
        makkah: 'Kayan Ar Raya',
        madinah: 'Mukhtar Algharbi',
        airlines: 'Qatar, Emirates, Etihad, Oman Air, Lion Air',
        duration: '9D'
      },
      {
        date: '11 AUG',
        program: 'Silver',
        makkah: 'Elaf Prestige',
        madinah: 'Golden Tulip',
        airlines: 'Garuda Indonesia, Saudia',
        duration: '9D'
      },
      {
        date: '22 AUG',
        program: 'Gold',
        makkah: 'Pullman / Sofwah',
        madinah: 'Rove Al Madinah',
        airlines: 'Garuda Indonesia, Saudia',
        duration: '9D'
      }
    ]
  },
  {
    month: 'SEPTEMBER',
    list: [
      {
        date: '09 SEP',
        program: 'Yalla',
        makkah: 'Kayan Ar Raya',
        madinah: 'Mukhtar Algharbi',
        airlines: 'Qatar, Emirates, Etihad, Oman Air, Lion Air',
        duration: '9D'
      },
      {
        date: '23 SEP',
        program: 'Silver',
        makkah: 'Elaf Prestige',
        madinah: 'Golden Tulip',
        airlines: 'Garuda Indonesia, Saudia',
        duration: '9D'
      },
      {
        date: '30 SEP',
        program: 'Yalla (STO DUBAI)',
        makkah: 'Kayan Ar Raya',
        madinah: 'Mukhtar Algharbi',
        airlines: 'Emirates',
        duration: '9D'
      }
    ]
  }
];

const Schedule = () => {
  const handleBooking = (item) => {
    const message = `Assalamu'alaikum BIG Travel, saya tertarik dengan paket Umroh ${item.program} tanggal ${item.date}. Mohon informasi lebih lanjut.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/628119116163?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="schedule-section" id="jadwal">
      <div className="container">
        <div className="schedule-header">
          <h2 className="schedule-title">List Jadwal Keberangkatan Umroh Big Travel 2026</h2>
          <p className="schedule-subtitle">Pilih jadwal terbaik untuk ibadah Umroh Anda bersama keluarga</p>
        </div>

        {scheduleData.map((group, groupIndex) => (
          <div className="month-section" key={groupIndex}>
            <h3 className="month-title">{group.month}</h3>
            
            <div className="schedule-table-container">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th>Tanggal</th>
                    <th>Program</th>
                    <th>Hotel Makkah</th>
                    <th>Hotel Madinah</th>
                    <th>Maskapai</th>
                    <th>Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {group.list.map((item, index) => (
                    <tr key={index}>
                      <td className="date-cell">
                        <span className="date-badge">{item.date}</span>
                      </td>
                      <td className="program-cell">
                        <span className={`program-tag tag-${item.program.split(' ')[0].toLowerCase()}`}>
                          {item.program}
                        </span>
                        <span className="duration-tag">{item.duration}</span>
                      </td>
                      <td>{item.makkah}</td>
                      <td>{item.madinah}</td>
                      <td className="airline-cell">{item.airlines}</td>
                      <td>
                        <button className="btn-book" onClick={() => handleBooking(item)}>Pesan</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>


            <div className="schedule-cards-mobile">
              {group.list.map((item, index) => (
                <div className="schedule-card" key={index}>
                  <div className="card-header">
                    <span className="date-badge">{item.date}</span>
                    <span className={`program-tag tag-${item.program.split(' ')[0].toLowerCase()}`}>
                      {item.program} ({item.duration})
                    </span>
                  </div>
                  <div className="card-body">
                    <div className="info-row">
                      <span className="label">Hotel Makkah:</span>
                      <span className="value">{item.makkah}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Hotel Madinah:</span>
                      <span className="value">{item.madinah}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">Maskapai:</span>
                      <span className="value">{item.airlines}</span>
                    </div>
                  </div>
                  <button className="btn-book-full" onClick={() => handleBooking(item)}>Pesan Sekarang</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
