import Scale from '../Scale';
import Note from '../Note';

export const steps: number[] = [2, 1, 2, 2, 1, 2, 2];

export class MinorScale extends Scale {
  constructor(root: Note) {
    super(root, steps);
  }
}
