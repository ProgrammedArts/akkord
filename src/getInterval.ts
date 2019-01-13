/**
 * @file Gets the interval in semitones between 2 {Pitch}
 */
export const getInterval: (
  pitchA: Pitch,
  pitchB: Pitch
) => number = function getInterval(pitchA: Pitch, pitchB: Pitch): number {
  return Math.abs(
    pitchA.octave * 12 + pitchA.note - pitchB.octave * 12 - pitchB.note
  );
};

export default getInterval;
