export default function debounce(fn, ms = 800){
    let timeoutId;
    return function (...args){
        clearTimeout(timeoutId);
        timeoutId = setTimeout(()=> fn.apply(args),ms)
    }
}