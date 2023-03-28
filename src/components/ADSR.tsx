import { animated, useSpring } from "@react-spring/web";
import Point from "@/components/Point";
import Line from "@/components/Line";

import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

const ADSR = () => {
  const [attack, setAttack] = useState(5);
  // These are the default constraints for the canvas
  // todo: add accessible svg contraints passed in as props
  const startX = 5;
  const topY = 10;
  const bottomY = 190;

  // todo: change these values when animated
  const decSus: number = attack + 50;
  const susLevel: number = 0.5;
  const sustain: number = susLevel * bottomY;
  const sustainRel: number = decSus + 100;
  const release: number = 100;
  const end: number = sustainRel + release;

  const attackSlider = (
    <Slider
      aria-label="slider-ex-1"
      defaultValue={5}
      min={5}
      max={105}
      onChange={(v) => setAttack(v)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );

  return (
    <>
      <svg height={200} width={400}>
        <Point x={startX} y={bottomY} isSolid />

        <Line start={[startX, bottomY]} end={[attack, topY]} />
        <Line start={[attack, topY]} end={[decSus, sustain]} />
        <Line start={[decSus, sustain]} end={[sustainRel, sustain]} />
        <Line
          start={[sustainRel, sustain]}
          end={[sustainRel + release, bottomY]}
        />

        <Point x={attack} y={topY} />
        <Point x={decSus} y={sustain} />
        <Point x={sustainRel} y={sustain} />
        <Point x={end} y={bottomY} />
      </svg>
      <Box mt={10}> Attack: {attackSlider}</Box>
    </>
  );
};

export default ADSR;
