/**
 * @file builds a {Pitch} from a piano key and an octave
 */
import Note from './Note';

let referenceFrequency: number = 440;
let referencePianoKey: Note = Note.A;
let referenceOctave: number = 4;
const semitoneRatio: number = Math.pow(2, 1 / 12);
const cache: { [octave: number]: { [note: number]: Pitch } } = {};

/**
 * Options for getPitch
 */
export interface GetPitchOptions {
  /** Note for the pitch */
  note: Note;
  /** Octave for the pitch */
  octave: number;
}

/**
 * Get a pitch that contains note, octave and frequency data from a note and octave
 * Results are memoized
 * @param options note and octave for the pitch
 * @returns {Pitch} the computed pitch
 */
export const getPitch: (options: GetPitchOptions) => Pitch = function getPitch({
  octave,
  note,
}: GetPitchOptions): Pitch {
  // use cached pitched if possible
  const cached: Pitch = cache[octave] && cache[octave][note];
  if (cached) {
    return cached;
  }

  // compute pitch
  const absoluteNoteValue = Math.abs(note);
  const pitch: Pitch = {
    frequency:
      referenceFrequency *
      Math.pow(
        semitoneRatio,
        (octave - referenceOctave) * 12 + (note - referencePianoKey)
      ),
    note:
      note < 0 && absoluteNoteValue % 12 !== 0
        ? 12 - (absoluteNoteValue % 12)
        : absoluteNoteValue % 12,
    octave: octave + Math.floor(note / 12),
  };

  // cache the pitch
  if (!cache[octave]) {
    cache[octave] = {};
  }
  cache[octave][note] = pitch;

  return pitch;
};

export default getPitch;
