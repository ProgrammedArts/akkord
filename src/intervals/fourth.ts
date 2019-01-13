import getInterval from '../getInterval';
import getPitch from '../getPitch';

/**
 * Get a pitch above a diminished fourth interval (4 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a diminished fourth
 */
export const addDiminishedFourth: (
  fromPitch: Pitch
) => Pitch = function addDiminishedFourth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 4 });
};

/**
 * Get a pitch below a diminished fourth interval (4 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a diminished fourth
 */
export const substractDiminishedFourth: (
  fromPitch: Pitch
) => Pitch = function substractDiminishedFourth({
  octave,
  note,
}: Pitch): Pitch {
  return getPitch({ octave, note: note - 4 });
};

/**
 * Determines if the interval between 2 pitches is a diminished fourth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a diminished fourth
 */
export const isDiminishedFourth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isDiminishedFourth(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 4;
};

/**
 * Get a pitch above a perfect fourth interval (5 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a perfect fourth
 */
export const addPerfectFourth: (
  fromPitch: Pitch
) => Pitch = function addPerfectFourth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 5 });
};

/**
 * Get a pitch below a perfect fourth interval (5 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a perfect fourth
 */
export const substractPerfectFourth: (
  fromPitch: Pitch
) => Pitch = function substractPerfectFourth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 5 });
};

/**
 * Determines if the interval between 2 pitches is a perfect fourth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a perfect fourth
 */
export const isPerfectFourth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isPerfectFourth(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 5;
};

/**
 * Get a pitch above an augmented fourth interval (5 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above an augmented fourth
 */
export const addAugmentedFourth: (
  fromPitch: Pitch
) => Pitch = function addAugmentedFourth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 6 });
};

/**
 * Get a pitch below an augmented fourth interval (5 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below an augmented fourth
 */
export const substractAugmentedFourth: (
  fromPitch: Pitch
) => Pitch = function substractAugmentedFourth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 6 });
};

/**
 * Determines if the interval between 2 pitches is an augmented fourth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is an augmented fourth
 */
export const isAugmentedFourth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isAugmentedFourth(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 6;
};
