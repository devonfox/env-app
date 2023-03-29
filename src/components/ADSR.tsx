import { animated, useSpring } from "@react-spring/web";
import Point from "@/components/Point";
import Line from "@/components/Line";
import { useState } from "react";
import EnvSlider from "@/components/Slider";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const START_X = 10;
const TOP_Y = 10;
const BOTTOM_Y = 190;

const ADSR = () => {
  const [attack, setAttack] = useState(START_X);
  const [decay, setDecay] = useState(55);
  const [sustain, setSustain] = useState(0.5 * BOTTOM_Y);

  // These are the default constraints for the canvas
  // todo: add accessible svg constraints passed in as props

  // todo: change these values when animated
  const sustainRel: number = decay + 100;
  const release: number = 100;
  const end: number = sustainRel + release;

  // todo: make slider values glue together when moving
  // look into use of react-spring here
  const attackSlider = (
    <EnvSlider
      defaultValue={START_X}
      min={START_X}
      max={decay}
      setValue={setAttack}
    />
  );

  const decaySlider = (
    <EnvSlider
      defaultValue={55}
      min={attack}
      max={sustain}
      setValue={setDecay}
    />
  );

  const sustainSlider = (
    <EnvSlider
      defaultValue={START_X}
      min={BOTTOM_Y}
      max={TOP_Y}
      setValue={setSustain}
    />
  );

  return (
    <>
      <Box ml={20}>
        <svg height={200} width={400}>
          {/*Static Starting Point*/}
          <Point x={START_X} y={BOTTOM_Y} isSolid />

          {/*Attack*/}
          <Line start={[START_X, BOTTOM_Y]} end={[attack, TOP_Y]} />

          {/*Decay*/}
          <Line start={[attack, TOP_Y]} end={[decay, sustain]} />

          {/*Sustain*/}
          <Line start={[decay, sustain]} end={[sustainRel, sustain]} />

          {/*Release*/}
          <Line
            start={[sustainRel, sustain]}
            end={[sustainRel + release, BOTTOM_Y]}
          />

          <Point x={attack} y={TOP_Y} />
          <Point x={decay} y={sustain} />
          <Point x={sustainRel} y={sustain} />
          <Point x={end} y={BOTTOM_Y} />
        </svg>
      </Box>
      <Box mt={35}>
        <Text mb={2} fontWeight={"Bold"}>
          Attack:
        </Text>
        {attackSlider}
      </Box>
      <Box mt={10}>
        <Text mb={2} fontWeight={"Bold"}>
          Decay:
        </Text>
        {decaySlider}
      </Box>
      <Box mt={10}>
        <Text mb={2} fontWeight={"Bold"}>
          Sustain:
        </Text>
        {sustainSlider}
      </Box>
    </>
  );
};

export default ADSR;
