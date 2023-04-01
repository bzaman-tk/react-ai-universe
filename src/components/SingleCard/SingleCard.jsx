import React from 'react';

const SingleCard = (props) => {
    //console.log(props);
    const { id, name, image, published_in, links, features, description } = props.data;
    return (
        <div className='border shadow-xl p-5 '>
            <h2>{name}</h2>
            {features.map((x, i) => <div key={i} className="badge badge-primary mr-3">{i + 1}. {x}</div>)}
            <br />
            <label onClick={() => props.setModalId(id)} className="btn btn-active btn-accent mt-5 btn-sm" htmlFor="my-modal">Open</label>

            {/* <label htmlFor="my-modal" className="btn">
                test open
            </label> */}

        </div>
    );
};

export default SingleCard;