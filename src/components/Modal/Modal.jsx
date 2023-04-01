import React from 'react';

const Modal = (props) => {
    console.log(props.modalData.data)
    const { tool_name, image_link, features, accuracy, input_output_examples, integrations } = props.modalData.data;
    for (const key in features) {
        // console.log(features[key].feature_name)
    }
    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">{tool_name}</h3>
                    <img className='w-64' src={image_link[0]} alt="" />

                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;