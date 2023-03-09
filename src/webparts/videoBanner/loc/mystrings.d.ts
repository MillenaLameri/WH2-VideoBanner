declare interface IVideoBannerWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  StylesGroupName: string;
  wpTitleLabel: string;
  videoUrlLabel: string;
  selectVideo: string;
  selectColor: string;
  selectBrightness: string;
  selectHeight: string;
}

declare module 'VideoBannerWebPartStrings' {
  const strings: IVideoBannerWebPartStrings;
  export = strings;
}
