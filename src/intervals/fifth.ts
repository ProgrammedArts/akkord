import getInterval from '../getInterval';
import getPitch from '../getPitch';

/**
 * Get a pitch above a diminished fifth interval (6 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a diminished fifth
 */
export const addDiminishedFifth: (
  fromPitch: Pitch
) => Pitch = function addDiminishedFifth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 6 });
};

/**
 * Get a pitch below a diminished fifth interval (6 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a diminished fifth
 */
export const substractDiminishedFifth: (
  fromPitch: Pitch
) => Pitch = function substractDiminishedFifth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 6 });
};

/**
 * Determines if the interval between 2 pitches is a diminished fifth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a diminished fifth
 */
export const isDiminishedFifth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isDiminishedFifth(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 6;
};

/**
 * Get a pitch above a perfect fifth interval (7 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a perfect fifth
 */
export const addPerfectFifth: (
  fromPitch: Pitch
) => Pitch = function addPerfectFifth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 7 });
};

/**
 * Get a pitch below a perfect fifth interval (7 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a perfect fifth
 */
export const substractPerfectFifth: (
  fromPitch: Pitch
) => Pitch = function substractPerfectFifth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 7 });
};

/**
 * Determines if the interval between 2 pitches is a perfect fifth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a perfect fifth
 */
export const isPerfectFifth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isPerfectFifth(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 7;
};

/**
 * Get a pitch above an augmented fifth interval (8 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above an augmented fifth
 */
export const addAugmentedFifth: (
  fromPitch: Pitch
) => Pitch = function addAugmentedFifth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 8 });
};

/**
 * Get a pitch below an augmented fifth interval (8 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below an augmented fifth
 */
export const substractAugmentedFifth: (
  fromPitch: Pitch
) => Pitch = function substractAugmentedFifth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 8 });
};

/**
 * Determines if the interval between 2 pitches is an augmented fifth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is an augmented fifth
 */
export const isAugmentedFifth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isAugmentedFifth(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 8;
};
