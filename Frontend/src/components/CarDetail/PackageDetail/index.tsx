import React from "react";

const ulTextStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '25px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#8A8A8A'
}
const PackageDetail = () => {
    return(
        <div>
            <h4><b>Tentang Paket</b></h4> <br/>
            <p>Include</p>
            <ul style={ulTextStyle}>
                <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                <li>Sudah termasuk bensin selama 12 jam</li>
                <li>Sudah termasuk Tiket Wisata</li>
                <li>Sudah termasuk pajak</li>
            </ul>
            <p>Exclude</p>
            <ul style={ulTextStyle}>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
        </div>
    )
}
export default PackageDetail;
