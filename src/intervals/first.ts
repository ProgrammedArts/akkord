import getInterval from '../getInterval';
import getPitch from '../getPitch';

/**
 * Get a pitch above a perfect first interval (0 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above a perfect first
 */
export const addPerfectFirst: (
  fromPitch: Pitch
) => Pitch = function addPerfectFifth(pitch: Pitch): Pitch {
  return pitch;
};

/**
 * Get a pitch below a perfect first interval (0 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below a perfect first
 */
export const substractPerfectFirst: (
  fromPitch: Pitch
) => Pitch = function substractPerfectFifth(pitch: Pitch): Pitch {
  return pitch;
};

/**
 * Determines if the interval between 2 pitches is a perfect first
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is a perfect first
 */
export const isPerfectFirst: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isPerfectFifth(pitchA: Pitch, pitchB: Pitch): boolean {
  return getInterval(pitchA, pitchB) === 0;
};

/**
 * Get a pitch above an augmented first interval (1 semitone) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch above an augmented first
 */
export const addAugmentedFirst: (
  fromPitch: Pitch
) => Pitch = function addAugmentedFirst({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note + 1 });
};

/**
 * Get a pitch below an augmented first interval (0 semitones) from the parameter pitch
 * @param fromPitch starting pitch
 * @returns {Pitch} a pitch below an augmented first
 */
export const substractAugmentedFirst: (
  fromPitch: Pitch
) => Pitch = function substractAugmentedFifth({ octave, note }: Pitch): Pitch {
  return getPitch({ octave, note: note - 1 });
};

/**
 * Determines if the interval between 2 pitches is an augmented first
 * @param pitchA first pitch to compare
 * @param pitchB second pitch to compare
 * @returns {boolean} true if the interval between the 2 pitches is an augmented first
 */
export const isAugmentedFirst: (
  pitchA: Pitch,
  pitchB: Pitch
) => boolean = function isAugmentedFifth(
  pitchA: Pitch,
  pitchB: Pitch
): boolean {
  return getInterval(pitchA, pitchB) === 1;
};
