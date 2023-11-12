export const load = ({data}) => {
    return {
        ...data,
        origin: 'from \'+layout.js\'.'
    }
}