import getPitch from '../getPitch';
import getInterval from '../getInterval';

/**
 * Get a pitch above a diminished second interval (0 semitone) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a diminished second
 */
export const addDiminishedSecond: (
  fromPitch: Pitch
) => Pitch = function addDiminishedSecond(pitch: Pitch): Pitch {
  return pitch;
};

/**
 * Get a pitch below a diminished second interval (0 semitone) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a diminished second
 */
export const substractDiminishedSecond: (
  fromPitch: Pitch
) => Pitch = function substractDiminishedSecond(pitch: Pitch): Pitch {
  return pitch;
};

/**
 * Determines if the interval between 2 pitches is a diminished second
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a diminished second
 */
export const isDiminishedSecond: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isDiminishedSecond(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 0;
};

/**
 * Get a pitch above a minor second interval (1 semitone) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a minor second
 */
export const addMinorSecond: (
  fromPitch: Pitch
) => Pitch = function addMinorSecond({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 1 });
};

/**
 * Get a pitch below a minor second interval (1 semitone) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a minor second
 */
export const substractMinorSecond: (
  fromPitch: Pitch
) => Pitch = function substractMinorSecond({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 1 });
};

/**
 * Determines if the interval between 2 pitches is a minor second
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a minor second
 */
export const isMinorSecond: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isMinorSecond(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 1;
};

/**
 * Get a pitch above a major second interval (1 whole tone) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a major second
 */
export const addMajorSecond: (
  fromPitch: Pitch
) => Pitch = function addMajorSecond({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 2 });
};

/**
 * Get a pitch below a major second interval (1 whole tone) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a major second
 */
export const substractMajorSecond: (
  fromPitch: Pitch
) => Pitch = function substractMajorSecond({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 2 });
};

/**
 * Determines if the interval between 2 pitches is a major second
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a major second
 */
export const isMajorSecond: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isMajorSecond(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 2;
};

/**
 * Get a pitch above au augmented second interval (3 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above au augmented second
 */
export const addAugmentedSecond: (
  fromPitch: Pitch
) => Pitch = function addAugmentedSecond({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 3 });
};

/**
 * Get a pitch below au augmented second interval (3 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below au augmented second
 */
export const substractAugmentedSecond: (
  fromPitch: Pitch
) => Pitch = function substractAugmentedSecond({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 3 });
};

/**
 * Determines if the interval between 2 pitches is au augmented second
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is au augmented second
 */
export const isAugmentedSecond: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isAugmentedSecond(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 3;
};
