declare module 'colorthief' {
  class ColorThief {
    getColor(sourceImage: HTMLImageElement | HTMLCanvasElement, quality?: number): [number, number, number];
    getPalette(sourceImage: HTMLImageElement | HTMLCanvasElement, colorCount?: number, quality?: number): [number, number, number][];
  }

  export default ColorThief;
}
