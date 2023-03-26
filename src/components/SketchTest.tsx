import React, { useState, useEffect, useRef } from "react";
// @ts-ignore
import { Vector } from "vector-js";

const WIDTH = 500;
const HEIGHT = 300;
const MARGIN = 20;

const Envelope = (): JSX.Element => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [attackEnd, setAttackEnd] = useState(
    new Vector(MARGIN, HEIGHT - MARGIN),
  );
  const [decayEnd, setDecayEnd] = useState(new Vector(WIDTH / 3, HEIGHT / 2));
  const [sustainStart, setSustainStart] = useState(
    new Vector(WIDTH / 3, HEIGHT / 2),
  );
  const [sustainEnd, setSustainEnd] = useState(
    new Vector((2 * WIDTH) / 3, HEIGHT / 2),
  );
  const [releaseStart, setReleaseStart] = useState(
    new Vector((2 * WIDTH) / 3, HEIGHT / 2),
  );
  const [releaseEnd, setReleaseEnd] = useState(
    new Vector(WIDTH - MARGIN, HEIGHT - MARGIN),
  );
  const [mouseDown, setMouseDown] = useState(false);
  const [selectedHandle, setSelectedHandle] = useState("");
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, WIDTH, HEIGHT);

        // Draw attack line
        ctx.beginPath();
        ctx.moveTo(MARGIN, HEIGHT - MARGIN);
        ctx.lineTo(attackEnd.x, attackEnd.y);
        ctx.stroke();

        // Draw decay line
        ctx.beginPath();
        ctx.moveTo(attackEnd.x, attackEnd.y);
        ctx.lineTo(decayEnd.x, decayEnd.y);
        ctx.stroke();

        // Draw sustain line
        ctx.beginPath();
        ctx.moveTo(decayEnd.x, decayEnd.y);
        ctx.lineTo(sustainStart.x, sustainStart.y);
        ctx.lineTo(sustainEnd.x, sustainEnd.y);
        ctx.stroke();

        // Draw release line
        ctx.beginPath();
        ctx.moveTo(sustainEnd.x, sustainEnd.y);
        ctx.lineTo(releaseStart.x, releaseStart.y);
        ctx.lineTo(releaseEnd.x, releaseEnd.y);
        ctx.stroke();
      }
    }
  }, [attackEnd, decayEnd, sustainStart, sustainEnd, releaseStart, releaseEnd]);

  const handleMouseDown = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const x = event.nativeEvent.offsetX;
    const y = event.nativeEvent.offsetY;

    // Check if any handle is clicked
    if (attackEnd.distanceTo(new Vector(x, y)) < MARGIN) {
      setSelectedHandle("attack");
    } else if (decayEnd.distanceTo(new Vector(x, y)) < MARGIN) {
      setSelectedHandle("decay");
    } else if (sustainStart.distanceTo(new Vector(x, y)) < MARGIN) {
      setSelectedHandle("sustainStart");
    } else if (sustainEnd.distanceTo(new Vector(x, y)) < MARGIN) {
      setSelectedHandle("sustainEnd");
    } else if (releaseStart.distanceTo(new Vector(x, y)) < MARGIN) {
      setSelectedHandle("releaseStart");
    } else if (releaseEnd.distanceTo(new Vector(x, y)) < MARGIN) {
      setSelectedHandle("releaseEnd");
    }

    setMouseDown(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLCanvasElement>) => {
    if (mouseDown) {
      // Check if a handle is selected
      if (selectedHandle) {
        const x = event.nativeEvent.offsetX;
        const y = event.nativeEvent.offsetY;
        const newVector = new Vector(x, y);

        // Update the position of the selected handle
        switch (selectedHandle) {
          case "attack":
            setAttackEnd(newVector);
            break;
          case "decay":
            setDecayEnd(newVector);
            break;
          case "sustainStart":
            setSustainStart(newVector);
            break;
          case "sustainEnd":
            setSustainEnd(newVector);
            break;
          case "releaseStart":
            setReleaseStart(newVector);
            break;
          case "releaseEnd":
            setReleaseEnd(newVector);
            break;
        }
      }
    }
  };

  const handleMouseUp = () => {
    setSelectedHandle("");
    setMouseDown(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={WIDTH}
      height={HEIGHT}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
};

export default Envelope;
