import * as service from "./App.service";
import { describe, it, expect } from 'vitest';
import { IWidthHeightElements, IWidthHeightValues } from "./types";

describe('App.service', () => {
    describe('getScreenSize', () => {
        it('should return correct window width and height', () => {
            const mockWindowObject: Window = { innerWidth: 500, innerHeight: 700 } as Window

            const result = service.getScreenSize(mockWindowObject)
            expect(result).toStrictEqual({
                heightValue: 700,
                widthValue: 500
            } as IWidthHeightValues)
        });
    });

    describe('setScreenSize', () => {
        it('should correctly set innerHTML property of given elements to the given values', () => {
            var mockWidthElement = document.createElement('div');
            var mockHeightElement = document.createElement('div');
            const mockWidthHeightElements: IWidthHeightElements = {
                widthElement: mockWidthElement,
                heightElement: mockHeightElement
            };

            const mockWidthHeightValues: IWidthHeightValues = {
                widthValue: 500,
                heightValue: 700
            };

            service.setScreenSize(mockWidthHeightElements, mockWidthHeightValues)

            expect(mockWidthElement.innerHTML).toBe('500px')
            expect(mockHeightElement.innerHTML).toBe('700px')
        });
    });

    describe('displayScreenSize', () => {
        it('should correctly set innerHTML of given elements to width and height of window', () => {
            var mockWidthElement = document.createElement('div');
            var mockHeightElement = document.createElement('div');
            const mockWidthHeightElements: IWidthHeightElements = {
                widthElement: mockWidthElement,
                heightElement: mockHeightElement
            };

            window = Object.assign(window, { innerWidth: 500, innerHeight: 700 });

            service.displayScreenSize(mockWidthHeightElements)

            expect(mockWidthElement.innerHTML).toBe('500px')
            expect(mockHeightElement.innerHTML).toBe('700px')
        });
    });
});