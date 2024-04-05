let listPost = [];
let maxPost = 5;

function createPost(title,content,author){

    let post = {
        title: `${title}`,
        content: `${content}`,
        author: `${author}`
    }

        if(listPost.length >= maxPost){
            console.log("Mảng đã đầy")
        }else{
            listPost.push(post);
        }

    for(let item of listPost){
        console.log(item)
    }

    return listPost
}

export default createPost;