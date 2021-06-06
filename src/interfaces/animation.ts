export interface IAnimation {
  duration: number;
  draw(progress: number): void;
  timing(timeFraction: number): number;
}
