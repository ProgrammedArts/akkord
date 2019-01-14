import getPitch from './getPitch';
import Note from './Note';
import {
  createChordMajorTriad,
  createChordMinorTriad,
  createChordAugmentedTriad,
  createChordDiminishedTriad,
  createChordMajorSeventh,
  createChordMinorSeventh,
  createChordDominantSeventh,
  createChordAugmentedSeventh,
  createChordDiminishedSeventh,
  createChordMinorMajorSeventh,
  createChordAugmentedMajorSeventh,
  createChordHalfDiminishedSeventh,
} from './chords';

/**
 * A scale contains multiple pitches and can be used to create chords
 */
export default class Scale {
  public notes: Note[];
  constructor(public root: Note, public steps: number[]) {
    this.notes = steps.reduce(
      (acc: number[], cur: number, index: number): number[] => {
        const prev = acc[index] || 0;
        return [...acc, (prev + cur) % 12];
      },
      [root]
    );
  }
  isWithinScale(pitch: Pitch): boolean;
  isWithinScale(note: Note): boolean;
  isWithinScale(notes: Note[]): boolean;
  isWithinScale(pitches: Pitch[]): boolean;
  isWithinScale(input: Pitch[] | Pitch | Note | Note[]): boolean {
    if (Array.isArray(input)) {
      return (input as (Pitch | Note)[]).every(this.isWithinScale.bind(this));
    }
    if (typeof input === 'object' && typeof input.note === 'number') {
      return this.isWithinScale(input.note);
    } else if (typeof input === 'number') {
      return this.notes.indexOf(input) >= 0;
    }
    return false;
  }
  getDiatonicTriads(octave: number = 4): Pitch[][] {
    let triads: Pitch[][] = [];
    const result: Pitch[][][] = this.notes.map(
      (note: Note, index: number): Pitch[][] =>
        [
          createChordMajorTriad,
          createChordMinorTriad,
          createChordAugmentedTriad,
          createChordDiminishedTriad,
        ]
          .map(
            (triadFn: (chord: Pitch) => Pitch[]): Pitch[] =>
              triadFn(
                getPitch({
                  octave: octave + Math.floor(index / (this.notes.length - 1)),
                  note,
                })
              )
          )
          .filter(this.isWithinScale.bind(this))
    );
    result.forEach(
      (chordGroup: Pitch[][]): void => {
        triads = [...triads, ...chordGroup];
      }
    );
    return triads;
  }
  getDiatonicSevenths(octave: number = 4): Pitch[][] {
    let sevenths: Pitch[][] = [];
    const result: Pitch[][][] = this.notes.map(
      (note: Note, index: number): Pitch[][] =>
        [
          createChordMajorSeventh,
          createChordMinorSeventh,
          createChordDominantSeventh,
          createChordAugmentedSeventh,
          createChordDiminishedSeventh,
          createChordMinorMajorSeventh,
          createChordAugmentedMajorSeventh,
          createChordHalfDiminishedSeventh,
        ]
          .map(
            (seventhFn: (chord: Pitch) => Pitch[]): Pitch[] =>
              seventhFn(
                getPitch({
                  octave: octave + Math.floor(index / (this.notes.length - 1)),
                  note,
                })
              )
          )
          .filter(this.isWithinScale.bind(this))
    );
    result.forEach(
      (chordGroup: Pitch[][]): void => {
        sevenths = [...sevenths, ...chordGroup];
      }
    );
    return sevenths;
  }
  getDiatonicChords(octave: number = 4): Pitch[][] {
    return this.getDiatonicTriads(octave).concat(
      this.getDiatonicSevenths(octave)
    );
  }
  getMode(mode: string): Scale;
  getMode(mode: number): Scale;
  getMode(mode: number | string): Scale {
    let _mode;
    if (typeof mode === 'string') {
      switch (mode.toLowerCase()) {
        case 'ionian':
          _mode = 0;
          break;
        case 'dorian':
          _mode = 1;
          break;
        case 'phrygian':
          _mode = 2;
          break;
        case 'lydian':
          _mode = 3;
          break;
        case 'mixolydian':
          _mode = 4;
          break;
        case 'aeolian':
          _mode = 5;
          break;
        case 'locrian':
          _mode = 6;
          break;
        default:
          _mode = 0;
          break;
      }
    } else {
      _mode = mode % this.steps.length;
    }
    const start: number[] = this.steps.slice(0, _mode);
    const end: number[] = this.steps.slice(_mode);

    return new Scale(this.root, [...end, ...start]);
  }
}
