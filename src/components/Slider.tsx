import {
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Slider,
} from "@chakra-ui/react";

interface SliderProps {
  defaultValue: number;
  min: number;
  max: number;
  setValue: (v: number) => void;
}

const EnvSlider = (props: SliderProps) => {
  const { defaultValue, min, max, setValue } = props;

  return (
    <Slider
      aria-label="slider-ex-1"
      defaultValue={defaultValue}
      min={min}
      max={max}
      onChange={(v: number) => setValue(v)}
    >
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </Slider>
  );
};

export default EnvSlider;
