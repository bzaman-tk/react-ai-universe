import React from 'react';

const Modal = (props) => {
    console.log(props)
    if (!props.modalData) {
        return <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <div className="flex items-center justify-center">
                        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status">
                            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"> Loading... </span>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Close</label>
                    </div>
                </div>
            </div>
        </>
    }
    const { tool_name, image_link, features, accuracy, input_output_examples, integrations } = props.modalData.data;

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