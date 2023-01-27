import React from "react";

const FormField = ({
  labelName,
  type,
  name,
  value,
  placeholder,
  handleChange,
  isSurpriseMe,
  handleSurpriseMe,
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="font-semibold text-xs bg-[#EcECF1] px-2 py-1 rounded-[5px] text-black"
          >
            Surprise Me
          </button>
        )}
      </div>
      <div>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          required
          className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#6469ff] outline-none block w-full p-3 border-[1px]"
        />
      </div>
    </div>
  );
};

export default FormField;