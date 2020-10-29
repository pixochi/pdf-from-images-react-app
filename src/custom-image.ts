export class CustomImage extends Image {
  constructor(public mimeType: string) {
    super();
  }

  get imageType(): string {
    return this.mimeType.split("/")[1];
  }
}
