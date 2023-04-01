import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import SingleCard from '../SingleCard/SingleCard';

const Cards = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [modalId, setModalId] = useState(null);
    const [modalData, setModalData] = useState(null);

    console.log(modalData)

    useEffect(() => {
        if (modalId) {
            fetch(`https://openapi.programming-hero.com/api/ai/tool/${modalId}`)
                .then(res => res.json())
                .then(data => setModalData(data));
        } else {
            fetch(`https://openapi.programming-hero.com/api/ai/tool/01`)
                .then(res => res.json())
                .then(data => setModalData(data));
        }
    }, [modalId])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setData(data.data.tools));
    }, []);
    const handleShowAll = () => {
        setShowAll(true);
    }
    return (
        <>
            <button className="btn">Sort by Date</button>
            <div className='cards-container grid gap-5 my-5 grid-cols-1 sm:grid-cols-3'>
                {data.slice(0, showAll ? 12 : 6).map(x => <SingleCard key={x.id} data={x} setModalId={setModalId} />)}
            </div>
            {showAll || (<button onClick={handleShowAll} className="btn">Show all</button>)}
            {modalData ? <Modal modalData={modalData}></Modal> : " "}
        </>
    );
};

export default Cards;