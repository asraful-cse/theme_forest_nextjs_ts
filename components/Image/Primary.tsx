import React from "react";
import Image from "next/image";
import { imageDT } from "../../types/CommonType";

const Primary = (props: imageDT) => {

    const {
        width,
        height,
        alt,
        marginBottom,
        marginLeft,
        marginRight,
        marginTop,
        src,
        opacity,
        margin,
        marginX,
        marginY,
        borderRadius,
        overFlow,
        duration, } = props;
    return (

        <div
            className={`relative ${width} ${height} ${marginBottom} ${marginLeft} ${marginRight} ${marginTop} ${opacity} ${margin} ${marginX} ${marginY} ${borderRadius} ${overFlow} ${duration}`}
        >

            <Image
                src={src}
                // width="100%"
                // height="100%"
                objectFit="cover"
                layout="fill"
                alt={alt}
            />
        </div>
    )


}

export default Primary;