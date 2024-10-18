import { memo } from "react";

interface IProps {
  colorObj: {
    backgroundColor: string;
    color: string;
  };
}
const ColorBox = ({ colorObj }: IProps) => {
  return (
    <div
      className="flex items-center justify-center w-20 h-20 rounded-md"
      style={{
        backgroundColor: colorObj.backgroundColor,
        color: colorObj.color,
      }}
    >
      <span>Box</span>
    </div>
  );
};
export default memo(ColorBox);
