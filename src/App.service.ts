import { IWidthHeightDiagramTextElements, IWidthHeightElements, IWidthHeightValues } from "./types";

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

// for drawing a diagram
export const setDiagramText = (widthHeightDiagramTextElements: IWidthHeightDiagramTextElements, widthHeightValues: IWidthHeightValues) => {
    const { widthTextElement, heightTextElement } = widthHeightDiagramTextElements;
    const { widthValue, heightValue } = widthHeightValues;

    widthTextElement.innerHTML = `← ${widthValue}px →`;
    heightTextElement.innerHTML = `← ${heightValue}px →`;
}

export const drawDiagram = (element: HTMLDivElement, widthHeightValues: IWidthHeightValues, scaleFactor: number) => {
    const { widthValue, heightValue } = widthHeightValues;
    element.style.width = widthValue * scaleFactor + 'px';
    element.style.height = heightValue * scaleFactor + 'px';
}

export const displayDiagram = (canvasElement: HTMLDivElement, widthHeightDiagramTextElements: IWidthHeightDiagramTextElements) => {
    const widthHeightValues: IWidthHeightValues = getScreenSize()

    const remainingHeight = widthHeightValues.heightValue - (document.querySelector<HTMLDivElement>('.infoBox')?.offsetHeight ?? 0) - 150;
    const scaleFactor = remainingHeight / widthHeightValues.heightValue;

    drawDiagram(canvasElement, widthHeightValues, scaleFactor)
    setDiagramText(widthHeightDiagramTextElements, widthHeightValues)
}