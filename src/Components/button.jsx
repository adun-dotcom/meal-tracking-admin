import React from "react";

const ButtonComponent = ({
  btnText,
  callToAction,
  hasWidth,
  fullWidth,
  loading,
  disabled,
  type,
}) => {
  return (
    <button
      type={type ? "button" : "submit"}
      onClick={callToAction}
      className={`text-lg font-medium flex justify-center items-center rounded-md px-12 py-3 shadow border h-53
    
        
           bg-orange-400 text-white border-orange-400
         
      
      ${disabled && "opacity-40"}
      ${hasWidth ? "w-full md:w-1/2" : fullWidth ? "w-full" : "w-auto"}
      `}
      disabled={loading || disabled}
    >
      {btnText}
    </button>
  );
};

export default ButtonComponent;
