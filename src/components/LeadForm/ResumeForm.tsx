const ResumeForm = ({
  value,
  handleFileChange,
}: {
  value: File | null;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="mt-4">
      <div className="w-full py-1.5 bg-gray-50 rounded-2xl border border-gray-300 flex items-center justify-around">
        <h2 className="text-center text-gray-400 text-xs leading-4 mr-2">
          Resume/CV
        </h2>
        <div className="grid gap-2">
          <div className="flex items-center justify-center">
            <label>
              <input
                type="file"
                hidden
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx"
              />
              <div className="flex w-28 h-7 px-2 flex-col bg-indigo-600 rounded-full shadow text-white text-xs font-semibold leading-4 items-center justify-center cursor-pointer focus:outline-none">
                Choose File
              </div>
            </label>
          </div>
        </div>
      </div>
      {value && (
        <p className="text-sm whitespace-nowrap text-ellipsis line-clamp-1">
          {value.name}
        </p>
      )}
    </div>
  );
};

export default ResumeForm;
