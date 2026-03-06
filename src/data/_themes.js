/*
Due to a design decision to not have interpolability for urls, 
bg images must be defined separately in classses of their own name.
The Source field here is for attribution, not display. For display - add in App.css
ref: https://stackoverflow.com/a/42331003
*/
export const Themes = [
    {
        Name: "spring",
        Emoji: "🌸",
        Colors: {
            Primary: "#F5E8ED",
            Secondary: "#800000",
            Accent: "#E83261",
        },
        Source: "https://unsplash.com/photos/bBWHtMOvxKY",
    },
    {
        Name: "summer",
        Emoji: "🏖️",
        Colors: {
            Primary: "#D9E0E9",
            Secondary: "#002324",
            Accent: "#008297",
        },
        Source: "https://unsplash.com/photos/okVXy9tG3KY",
    },
    {
        Name: "fall",
        Emoji: "🍁",
        Colors: {
            Primary: "#86421A",
            Secondary: "#F9D87C",
            Accent: "#E35720",
        },
        Source: "https://unsplash.com/photos/a-close-up-of-a-tree-with-red-and-yellow-leaves-XTzQ9Z2jZgI",
    },
    {
        Name: "winter",
        Emoji: "🌊",
        Colors: {
            Primary: "#0A2638",
            Secondary: "#FFFFFF",
            Accent: "#DECFAB",
        },
        Source: "https://wallpapercave.com/the-great-wave-off-kanagawa-hd-wallpapers",
    },
];




export default Themes;

// theme default uses current month to identify what the default theme should be
const _month = new Date().getMonth() + 1; // 1-12
export const ThemeDefault = String(
    _month >= 3 && _month <= 5 ? 0 :  // spring: Mar-May
    _month >= 6 && _month <= 9 ? 1 :  // summer: Jun-Sep
    _month >= 10              ? 2 :  // fall: Oct-Dec
                                3    // winter: Jan-Feb
);
