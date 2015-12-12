import marked from 'marked'

export default function fetchBlog(url){
    return fetch(url).then(function(resp){
        return resp.text();
    }).then(function(text){
        return marked(text);
    }).catch(function(ex){
        console.log(ex);
    })
}
