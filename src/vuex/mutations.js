export default{
    CHANGE_POST(state, url){
        state.currentPost = url;
    },

    LOAD_SITE(state, site){
        state.site ={ ...site};
    }
}
