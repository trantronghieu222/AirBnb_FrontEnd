export const getDataTextStorage = (storeName: string): string | null => {
    if (localStorage.getItem(storeName)) {
        return localStorage.getItem(storeName);
    }
    return null;
}

export const getDataJsonStorage = (storeName: string): any | null => {
    if (localStorage.getItem(storeName)) {
        return JSON.parse(localStorage.getItem(storeName) as string);
    }
    return null;
}

export const setDataTextStorage = (storeName: string, data: string): void => {
    localStorage.setItem(storeName, data);
}

export const setDataJsonStorage = (storeName: string, data: any): void => {
    localStorage.setItem(storeName, JSON.stringify(data));
}