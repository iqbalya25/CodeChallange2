import { ReactNode } from "react";

interface CardProps {
  CardContent: ReactNode; // Mengubah tipe prop menjadi ReactNode
}

const Card: React.FC<CardProps> = ({ CardContent }) => {
  return (
    <div className="mx-auto max-w-screen-lg px-4 pb-10 relative">
      <div
        className="rounded-lg shadow-lg overflow-hidden relative"
        style={{
          background: "linear-gradient(90deg, #1FA2FF, #12D8FA, #A6FFCB)",
        }}
      >
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-transparent to-black">
          <img
            src="/MainHero.jpg"
            alt=""
            className="w-full h-full object-cover"
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </div>
        <div className="p-4 relative z-10">{CardContent}</div>
      </div>
    </div>
  );
};

export default Card;
