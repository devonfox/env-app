import { animated, useSpring } from "@react-spring/web";

interface PointProps {
  x: number;
  y: number;
  isSolid?: boolean;
}

const Point = (props: PointProps) => {
  const { x, y, isSolid } = props;

  const [animateProps, api] = useSpring(
    () => ({
      from: { fill: "#742ca4" },
      to: { fill: "black" },
      config: {
        duration: 1000,
      },
    }),
    [],
  );

  return isSolid ? (
    <animated.circle style={animateProps} cx={x} cy={y} r={7} fill="black" />
  ) : (
    <>
      <animated.circle style={animateProps} cx={x} cy={y} r={7} fill="black" />
      <animated.circle cx={x} cy={y} r={4} fill="white" />
    </>
  );
};

export default Point;
