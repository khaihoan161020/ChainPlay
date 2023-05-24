import { iconAndroid, iconBrowser, iconEdit, iconIOS, iconLinux, iconMac, iconMobile, iconPC, iconWindow } from "@/constants/icon";
const mappingData = (arr: any, key: string) => {
    const data = arr.map((e: any) => e[key]);
    return data.length > 0 ? data : [];
};

const renderFlatform = (flatform: string) => {
    switch (flatform) {
        case 'linux':
            return iconLinux;
        case "android":
            return iconAndroid;
        case "ios":
            return iconIOS;
        case "browser":
            return iconBrowser;
        case 'pc':
            return iconPC;
        case 'mac':
            return iconMac;
        case 'windows':
            return iconWindow;
        case 'mobile':
            return iconMobile;
    
        default:
            return "Other";
    }
};
export {
    mappingData,
    renderFlatform
}