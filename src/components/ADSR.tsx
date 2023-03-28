import { animated, useSpring } from "@react-spring/web";
import Point from "@/components/Point";
import Line from "@/components/Line";

const ADSR = () => {
  // These are the default constraints for the canvas
  // todo: add accessible svg contraints passed in as props
  const startX = 5;
  const topY = 10;
  const bottomY = 190;

  // todo: change these values when animated
  const attDec: number = 50;
  const decSus: number = attDec + 50;
  const susLevel: number = 0.5;
  const sustain: number = susLevel * bottomY;
  const sustainRel: number = decSus + 100;
  const release: number = 100;
  const end: number = sustainRel + release;

  return (
    <svg height={200} width={400}>
      <Point x={startX} y={bottomY} isSolid />

      <Line start={[startX, bottomY]} end={[attDec, topY]} />
      <Line start={[attDec, topY]} end={[decSus, sustain]} />
      <Line start={[decSus, sustain]} end={[sustainRel, sustain]} />
      <Line
        start={[sustainRel, sustain]}
        end={[sustainRel + release, bottomY]}
      />

      <Point x={attDec} y={topY} />
      <Point x={decSus} y={sustain} />
      <Point x={sustainRel} y={sustain} />
      <Point x={end} y={bottomY} />
    </svg>
  );
};

export default ADSR;
