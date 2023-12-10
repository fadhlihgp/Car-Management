import FaqAccordion from "../accordion";
import React from "react";

const faqList = [
    {
        header: 'Apa saja syarat yang dibutuhkan ?',
        body: 'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item\'s accordion body. '
    },
    {
        header: 'Berapa hari minimal sewa mobil lepas kunci ?',
        body: 'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item\'s accordion body. '
    },
    {
        header: 'Berapa hari sebelumnya sebaiknya sewa booking mobil?',
        body: 'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item\'s accordion body. '
    },
    {
        header: 'Apakah ada biaya antar jemput ?',
        body: 'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item\'s accordion body. '
    },
    {
        header: 'Bagaimana bila terjadi kecelakaan ?',
        body: 'Placeholder content for this accordion, which is intended to demonstrate the .accordion-flush class. This is the first item\'s accordion body. '
    }
]
const FaqList = () => {
return (
    <div className='d-flex flex-column gap-2'>
        {faqList.map(({header, body}, index) => {
            return <FaqAccordion key={index.toString()} headerText={header} bodyText={body} />
        })}
    </div>
)
}

export default FaqList;
