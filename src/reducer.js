export const initialState = {
    user: null,
    playlists: [],
    item: null,
    //quitar estado incial del token al terminar el desarrollo...
    // token: "BQAB6JR7pHa_VUWpbLZGMoHD7gpU9yW_bbJ0Cvp3WlG9HW-mqGRJilpcUyov1FZdue-cxemoJFh2UHdfu1-AKYOMw1b5TeUCIkKProVAHEAE0DASx7PXHScciFBn-fZ7w6opZutQXpjy5lftNdBHtdhzjhWmHk8JFzSdPbjhlqEd7_j54El3"
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_NEW_RELEASES':
            return {
                ...state,
                new_releases: action.new_releases,
            };
        case 'SET_FEATURED_PLAYLISTS':
            return {
                ...state,
                featured_playlists: action.featured_playlists,
            };
        case 'SET_CATEGORIES':
        return {
            ...state,
            categories: action.categories,
        };
            
        default:
            return state;
    }
}

export default reducer;