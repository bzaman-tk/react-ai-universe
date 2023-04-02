import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import SingleCard from '../SingleCard/SingleCard';

const Cards = () => {
    const [data, setData] = useState([]);
    const [showAll, setShowAll] = useState(false); //for show all DATA
    const [modalId, setModalId] = useState(null); //Store card id Each after click
    const [modalData, setModalData] = useState(null); //Store card data by each id

    // console.log(modalData)
    //load signle card data for modal (based on modal id on state if avaiable)
    useEffect(() => {
        setModalData(null);
        if (modalId) {
            fetch(`https://openapi.programming-hero.com/api/ai/tool/${modalId}`)
                .then(res => res.json())
                .then(data => setModalData(data));
        }
    }, [modalId])
    //to get all data at first load
    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setData(data.data.tools));
    }, []);
    //to handle show all cards or not
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
            {/* render if modal data is set */}
            <Modal modalData={modalData}></Modal>
        </>
    );
};

export default Cards;