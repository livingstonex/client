import React, { ChangeEvent } from "react";

interface IProps {
  name: string;
  href: string;
}

const OutlinedButton: React.FC<IProps> = ({ name, href }) => {
  return (
    <>
      <a href={href} className="btn-outline-bridge">
        {name}
      </a>
    </>
  );
};

export default OutlinedButton;
