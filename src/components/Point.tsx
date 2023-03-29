import { animated } from "@react-spring/web";

interface PointProps {
  x: number;
  y: number;
  isSolid?: boolean;
}

const Point = (props: PointProps) => {
  const { x, y, isSolid } = props;
  return isSolid ? (
    <animated.circle cx={x} cy={y} r={7} fill="black" />
  ) : (
    <>
      <animated.circle cx={x} cy={y} r={7} fill="black" />
      <animated.circle cx={x} cy={y} r={4} fill="white" />
    </>
  );
};

export default Point;
