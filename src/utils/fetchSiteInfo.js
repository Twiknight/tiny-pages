export default function(){
    return fetch('./site.json').then(function(resp){
        return resp.json();
    });
}
