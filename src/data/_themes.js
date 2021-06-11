/*
Key value pair to indicate which theme comes after which
Due to a design decision to not have interpolability for urls, 
bg images must be defined separately in classses of their own name in App.css
ref: https://stackoverflow.com/a/42331003
*/
export const Themes = [
    {
        Name: "sakura",
        Emoji: "🌸",
        Colors: {
            BG: "#F5E8ED",
            Text: "black",
            Shadow: "#E83261",
        },
        Source: "https://unsplash.com/photos/bBWHtMOvxKY",
    },
    {
        Name: "waves",
        Emoji: "🌊",
        Colors: {
            BG: "#193656",
            Text: "white",
            Shadow: "#346A84",
        },
        Source: "https://wallpapercave.com/the-great-wave-off-kanagawa-hd-wallpapers",
    },
    {
        Name: "train",
        Emoji: "🚂",
        Colors: {
            BG: "#F9F3F5",
            Text: "#EC5A01",
            Shadow: "##FEA907",
        },
        Source: "https://unsplash.com/photos/PHyF2mCMei0",
    },
];




export default Themes;
export const ThemeDefault = "0"; // first theme is default