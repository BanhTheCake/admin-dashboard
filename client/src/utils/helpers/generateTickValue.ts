const generateTickValue = (data: { x: string; y: number }[], gap: number) => {
    return Object.entries(data).reduce((result, [key, item], index) => {
        if (index === 0 || index % gap === 0) {
            return [...result, item.x];
        }
        return [...result];
    }, [] as string[]);
};

export default generateTickValue;
