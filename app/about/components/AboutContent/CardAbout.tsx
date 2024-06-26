import React, { ReactNode } from "react";

interface cardAboutProps {
  children: ReactNode;
}

const CardAbout: React.FC<cardAboutProps> = ({ children }) => {
  return (
    <div className="w-[350px] bg-white shadow-2xl rounded-lg p-6 md:w-auto">
      {children}
    </div>
  );
};

export default CardAbout;
