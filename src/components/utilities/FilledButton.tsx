import React, { ChangeEvent } from "react";

interface IProps {
  name: string;
  href: string;
}

const FilledButton: React.FC<IProps> = ({ name, href }) => {
  return (
    <>
      <a href={href} className="btn-outline-register">
        {name}
      </a>
    </>
  );
};

export default FilledButton;
