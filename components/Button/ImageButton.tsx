import React from "react";
import { imageButtonDT } from "../../types/CommonType";
import Image from "../Image";

const ImageButton = (props: imageButtonDT) => {
    const {
        image,
        imageHeight,
        imageWidth,
        imageAlt,
        onClick,
        bgColor,
        border,
        borderColor,
        borderRadius,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        paddingX,
        paddingY,
        width,
        hoverBgColor,
        duration,
        hoverBorderColor,

    } = props;

    return (
        <button
            onClick={onClick}
            className={` ${bgColor} ${border} ${borderColor} ${borderRadius} ${marginBottom} ${marginLeft} ${marginRight}   ${marginTop}  ${paddingX} ${paddingY} ${paddingY} ${width} ${hoverBgColor} ${duration} ${hoverBorderColor} `}

        >

            <Image.Primary
                height={imageHeight}
                width={imageWidth}
                src={image}
                alt={imageAlt}
            />

        </button>
    )
}

export default ImageButton;