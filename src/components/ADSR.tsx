import { animated, useSpring } from "@react-spring/web";
import Point from "@/components/Point";
import Line from "@/components/Line";
import { useEffect, useState } from "react";
import EnvSlider from "@/components/Slider";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const START_X = 10;
const TOP_Y = 10;
const BOTTOM_Y = 190;
const MAX_WIDTH = 400;
const MAX_HEIGHT = 200;
const SUSTAIN_LENGTH = 100;
const END: number = MAX_WIDTH - 10;

const DEFAULT_STATE = {
  attack: START_X + 20,
  decay: 55,
  sustain: 0.5 * BOTTOM_Y,
  release: 180,
};

const ADSR = () => {
  const [attack, setAttack] = useState(DEFAULT_STATE.attack);
  const [decay, setDecay] = useState(DEFAULT_STATE.decay);
  const [sustain, setSustain] = useState(DEFAULT_STATE.sustain);
  const [release, setRelease] = useState(DEFAULT_STATE.release);

  // These are the default constraints for the canvas
  // todo: add accessible svg constraints passed in as props
  const sustainRel = decay + SUSTAIN_LENGTH;

  // todo: make slider values glue together when moving
  // look into use of react-spring here
  const attackSlider = (
    <EnvSlider
      defaultValue={DEFAULT_STATE.attack}
      min={START_X}
      max={decay}
      setValue={setAttack}
    />
  );

  const decaySlider = (
    <EnvSlider
      defaultValue={DEFAULT_STATE.decay}
      min={attack}
      max={release - SUSTAIN_LENGTH}
      setValue={setDecay}
    />
  );

  const sustainSlider = (
    <EnvSlider
      defaultValue={DEFAULT_STATE.sustain}
      min={TOP_Y}
      max={BOTTOM_Y}
      setValue={setSustain}
    />
  );

  const releaseSlider = (
    <EnvSlider
      defaultValue={DEFAULT_STATE.release}
      min={sustainRel}
      max={END}
      setValue={setRelease}
    />
  );

  return (
    <>
      <Box ml={10}>
        <svg height={MAX_HEIGHT} width={MAX_WIDTH}>
          {/*Static Starting Point*/}
          <Point x={START_X} y={BOTTOM_Y} isSolid />

          {/*Attack*/}
          <Line start={[START_X, BOTTOM_Y]} end={[attack, TOP_Y]} />

          {/*Decay*/}
          <Line start={[attack, TOP_Y]} end={[decay, sustain]} />

          {/*Sustain*/}
          <Line start={[decay, sustain]} end={[sustainRel, sustain]} />

          {/*Release*/}
          <Line start={[sustainRel, sustain]} end={[release, BOTTOM_Y]} />

          <Point x={attack} y={TOP_Y} />
          <Point x={decay} y={sustain} />
          <Point x={sustainRel} y={sustain} />
          <Point x={release} y={BOTTOM_Y} />
        </svg>
      </Box>

      <Box>
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
        <Box mt={10}>
          <Text mb={2} fontWeight={"Bold"}>
            Release:
          </Text>
          {releaseSlider}
        </Box>
      </Box>
    </>
  );
};

export default ADSR;
