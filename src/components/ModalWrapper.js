import CloseIcon from "../assets/close";

const ModalWrapper = ({ setModal, children }) => {
    return (
        <div className="fixed -top-[13.6vh] bottom-0 left-0 right-0 z-20 flex justify-center bg-[#0000006f] py-32">
            <div onClick={() => setModal(false)} className='absolute right-16 cursor-pointer'>
                <CloseIcon />
            </div>
            {children}
        </div>
    );
};

export default ModalWrapper;
