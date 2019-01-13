import getPitch from '../getPitch';
import getInterval from '../getInterval';

/**
 * Get a pitch above a diminished sixth interval (7 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a diminished sixth
 */
export const addDiminishedSixth: (
  fromPitch: Pitch
) => Pitch = function addDiminishedSixth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 7 });
};

/**
 * Get a pitch below a diminished sixth interval (7 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a diminished sixth
 */
export const substractDiminishedSixth: (
  fromPitch: Pitch
) => Pitch = function substractDiminishedSixth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 7 });
};

/**
 * Determines if the interval between 2 pitches is a diminished sixth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a diminished sixth
 */
export const isDiminishedSixth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isDiminishedSixth(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 7;
};

/**
 * Get a pitch above a minor sixth interval (8 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a minor sixth
 */
export const addMinorSixth: (
  fromPitch: Pitch
) => Pitch = function addMinorSixth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 8 });
};

/**
 * Get a pitch below a minor sixth interval (8 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a minor sixth
 */
export const substractMinorSixth: (
  fromPitch: Pitch
) => Pitch = function substractMinorSixth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 8 });
};

/**
 * Determines if the interval between 2 pitches is a minor sixth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a minor sixth
 */
export const isMinorSixth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isMinorSixth(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 8;
};

/**
 * Get a pitch above a major sixth interval (9 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a major sixth
 */
export const addMajorSixth: (
  fromPitch: Pitch
) => Pitch = function addMajorSixth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 9 });
};

/**
 * Get a pitch below a major sixth interval (9 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a major sixth
 */
export const substractMajorSixth: (
  fromPitch: Pitch
) => Pitch = function substractMajorSixth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 9 });
};

/**
 * Determines if the interval between 2 pitches is a major sixth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a major sixth
 */
export const isMajorSixth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isMajorSixth(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 9;
};

/**
 * Get a pitch above au augmented sixth interval (10 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above au augmented sixth
 */
export const addAugmentedSixth: (
  fromPitch: Pitch
) => Pitch = function addAugmentedSixth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note + 10 });
};

/**
 * Get a pitch below au augmented sixth interval (10 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below au augmented sixth
 */
export const substractAugmentedSixth: (
  fromPitch: Pitch
) => Pitch = function substractAugmentedSixth({ note, octave }: Pitch): Pitch {
  return getPitch({ octave, note: note - 10 });
};

/**
 * Determines if the interval between 2 pitches is au augmented sixth
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is au augmented sixth
 */
export const isAugmentedSixth: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isAugmentedSixth(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 10;
};
