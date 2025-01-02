export default function FormItem({ labelText, inputType, inputPlaceholder, name, value, onChange, min }) {
  return (
    <label className="flex flex-col text-left gap-1">
      <span>{labelText}</span>
      {inputType ? (
        <input
          className="bg-gray-200 rounded-md py-2 px-3 outline-none focus:ring-1 focus:ring-secondary focus:ring-opacity-50"
          type={inputType}
          name={name} // Added
          value={value} // Added
          onChange={onChange} // Added
          min={min}
          placeholder={inputPlaceholder}
        />
      ) : (
        <textarea
          className="bg-gray-200 rounded-md py-2 px-3 outline-none resize-none h-36 focus:ring-1 focus:ring-secondary focus:ring-opacity-50"
          name={name} // Added
          value={value} // Added
          onChange={onChange} // Added
          placeholder={inputPlaceholder}
        />
      )}
    </label>
  );
}
