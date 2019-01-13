import getPitch from '../getPitch';
import getInterval from '../getInterval';

/**
 * Get a pitch above a diminished third interval (2 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a diminished third
 */
export const addDiminishedThird: (
  fromPitch: Pitch
) => Pitch = function addDiminishedThird({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 2 });
};

/**
 * Get a pitch below a diminished third interval (2 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a diminished third
 */
export const substractDiminishedThird: (
  fromPitch: Pitch
) => Pitch = function substractDiminishedThird({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 2 });
};

/**
 * Determines if the interval between 2 pitches is a diminished third
 * @param pitchA first pitch to compare
 * @param pitchB third pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a diminished third
 */
export const isDiminishedThird: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isDiminishedThird(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 2;
};

/**
 * Get a pitch above a minor third interval (3 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a minor third
 */
export const addMinorThird: (
  fromPitch: Pitch
) => Pitch = function addMinorThird({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 3 });
};

/**
 * Get a pitch below a minor third interval (3 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a minor third
 */
export const substractMinorThird: (
  fromPitch: Pitch
) => Pitch = function substractMinorThird({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 3 });
};

/**
 * Determines if the interval between 2 pitches is a minor third
 * @param pitchA first pitch to compare
 * @param pitchB third pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a minor third
 */
export const isMinorThird: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isMinorThird(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 3;
};

/**
 * Get a pitch above a major third interval (4 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a major third
 */
export const addMajorThird: (
  fromPitch: Pitch
) => Pitch = function addMajorThird({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 4 });
};

/**
 * Get a pitch below a major third interval (4 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a major third
 */
export const substractMajorThird: (
  fromPitch: Pitch
) => Pitch = function substractMajorThird({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 4 });
};

/**
 * Determines if the interval between 2 pitches is a major third
 * @param pitchA first pitch to compare
 * @param pitchB third pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a major third
 */
export const isMajorThird: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isMajorThird(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 4;
};

/**
 * Get a pitch above au augmented third interval (5 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above au augmented third
 */
export const addAugmentedThird: (
  fromPitch: Pitch
) => Pitch = function addAugmentedThird({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 5 });
};

/**
 * Get a pitch below au augmented third interval (5 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below au augmented third
 */
export const substractAugmentedThird: (
  fromPitch: Pitch
) => Pitch = function substractAugmentedThird({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 5 });
};

/**
 * Determines if the interval between 2 pitches is au augmented third
 * @param pitchA first pitch to compare
 * @param pitchB third pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is au augmented third
 */
export const isAugmentedThird: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isAugmentedThird(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 5;
};
