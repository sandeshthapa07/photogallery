interface IProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchPhoto = ({ inputValue, setInputValue }: IProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full ">
      <input
        type="text"
        className="border border-gray-300  rounded p-2 m-2 w-full"
        id="search"
        value={inputValue}
        onChange={handleChange}
        placeholder="Search photos....."
      />
    </div>
  );
};

export default SearchPhoto;
