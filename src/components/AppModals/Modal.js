import { closeIcon } from "../../assets/icons";

export const Modal = ({ title, children, handleClose }) => {
  return (
    <div className="fixed z-50 top-0 flex w-full h-screen bg-black/20">
      <div className="relative w-[40%] bg-white m-auto pl-8 pr-4 py-8 rounded-lg shadow-lg">
        <div className="flex justify-between pb-2 border-b-2">
          <div className="text-2xl font-bold">{title}</div>
          <div
            className="mr-[-5px] mt-[-20px] cursor-pointer"
            onClick={handleClose}
          >
            <img className="w-8 h-8" src={closeIcon} alt="Close Icon" />
          </div>
        </div>
        <div className="flex justify-between pt-8">{children}</div>
      </div>
    </div>
  );
};
