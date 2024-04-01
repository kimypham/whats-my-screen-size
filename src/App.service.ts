import { IWidthHeightElements, IWidthHeightValues } from "./types";

export const getScreenSize = (windowObject: Window = window): IWidthHeightValues => {
    return {
        widthValue: windowObject.innerWidth as number,
        heightValue: windowObject.innerHeight as number
    }
}

export const setScreenSize = (widthHeightElements: IWidthHeightElements, widthHeightValues: IWidthHeightValues) => {
    const { widthElement, heightElement } = widthHeightElements;
    const { widthValue, heightValue } = widthHeightValues;

    widthElement.innerHTML = `${widthValue}px`;
    heightElement.innerHTML = `${heightValue}px`;
}

export const displayScreenSize = (widthHeightElements: IWidthHeightElements) => {
    const widthHeightValues: IWidthHeightValues = getScreenSize()
    setScreenSize(widthHeightElements, widthHeightValues)
}