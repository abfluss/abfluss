export const sleep: (timeMs: number) => Promise<void> = (time: number): Promise<void> => {
    return new Promise<void>((resolve: () => void, reject: (err?: any) => void): void => {
        setTimeout(resolve, time);
    });
}
