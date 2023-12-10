import React from "react";

const ulTextStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: '300',
    lineHeight: '25px',
    letterSpacing: '0em',
    textAlign: 'left',
    color: '#8A8A8A'
}

const OtherDetail = () => {
    return(
        <div>
            <h4><b>Refund, Reschedule, Overtime</b></h4><br/>
            <ul style={ulTextStyle}>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
                <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                <li>Tidak termasuk akomodasi penginapan</li>
            </ul>
        </div>
    )
}
export default OtherDetail;
