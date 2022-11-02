

export type imageDT = {
    width: string;
    height: string;
    src: string;
    alt?: string;
    marginTop?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    marginX?: string;
    marginY?: string;
    margin?: string;
    opacity?: string;
    borderRadius?: string;
    overFlow?: string;
    duration?: string;
}


export type imageButtonDT = {
    image: string;
    imageWidth: string;
    imageHeight: string;
    imageAlt?: string;
    onClick?: () => void;
    width?: string;
    paddingX?: string;
    paddingY?: string;
    marginBottom?: string;
    marginLeft?: string;
    marginRight?: string;
    marginTop?: string;
    bgColor?: string;
    borderRadius?: string;
    border?: string;
    borderColor?: string;
    hoverBgColor?: string;
    hoverBorderColor?: string;
    duration?: string;
}