/*
Key value pair to indicate which theme comes after which
Due to a design decision to not have interpolability for urls, 
bg images must be defined separately in classses of their own name in App.css
ref: https://stackoverflow.com/a/42331003
*/
export const Themes = [
    {
        Name: "beach",
        Emoji: "🏖️",
        Colors: {
            BG: "#D9E0E9",
            Text: "#002324",
            Shadow: "#00404A",
        },
        Source: "https://unsplash.com/photos/okVXy9tG3KY",
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
        Name: "snow",
        Emoji: "❄️",
        Colors: {
            BG: "#1E2636",
            Text: "#FEB79C",
            Shadow: "#4F7091",
        },
        Source: "https://unsplash.com/photos/jBxee1u2RAU",
    },
    {
        Name: "mountain",
        Emoji: "⛰️",
        Colors: {
            BG: "#EDEBEC",
            Text: "#327B8E",
            Shadow: "#013C48",
        },
        Source: "https://unsplash.com/photos/bBL4o4BJxag",
    },
    {
        Name: "plant",
        Emoji: "🌱",
        Colors: {
            BG: "#519D7B",
            Text: "#06231F",
            Shadow: "#073127",
        },
        Source: "https://unsplash.com/photos/Gl6GljPtJpo",
    },
    {
        Name: "train",
        Emoji: "🚂",
        Colors: {
            BG: "#F9F3F5",
            Text: "#EC5A01",
            Shadow: "#FEA907",
        },
        Source: "https://unsplash.com/photos/PHyF2mCMei0",
    },
];




export default Themes;
export const ThemeDefault = "0";