import React from 'react'

const Faq = ({faq, idx, toggle}) => {
    return (
        <section className={faq.open?'faq faq-open':'faq'}>
            <div className="question" onClick={()=>{toggle(idx)}}>{faq.question}
            <div className={faq.open?'arrow arrow-up':'arrow'}>&#10094;</div>
            </div>
            <div className="answer">{faq.answer}</div>
        </section>
    )
}
export default Faq;