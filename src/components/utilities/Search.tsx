import React, { ChangeEvent, MouseEvent } from "react";

interface IProps {
  name: string;
  loading: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
  onSearch: (e: MouseEvent<HTMLElement>) => void;
}

const Search: React.FC<IProps> = ({
  name,
  //   value,
  loading,
  onChange,
  //   label,
  type,
  placeholder,
  onSearch,
}) => {
  return (
    <>
      {/* <label className="lmb-5">{label}</label> */}
      <input
        placeholder={placeholder}
        name={name}
        type={type}
        onChange={(e) => onChange(e)}
        // value={value}
        disabled={loading}
        className="event-input"
        required
      />
      <button onClick={onSearch} className="btn btn-small sec mb-1 ml-5">
        Search {loading && <i className="fas fa-spinner fa-spin ml-5"></i>}
      </button>
    </>
  );
};

export default Search;
