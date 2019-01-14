import Scale from '../Scale';
import Note from '../Note';

export const steps: number[] = [2, 2, 1, 2, 2, 2, 1];

export class MajorScale extends Scale {
  constructor(root: Note) {
    super(root, steps);
  }
}
