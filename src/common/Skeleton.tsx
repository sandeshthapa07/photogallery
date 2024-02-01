interface IProps {
  width?: string;
  height?: string;
}

const Skeleton = ({ width = "w-[300px]", height = "h-[400px]" }: IProps) => {
  return <div className={`animate-pulse bg-gray-500 ${width} ${height}`} />;
};

export default Skeleton;
