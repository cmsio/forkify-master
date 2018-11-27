export default class Likes {
    constructor() {
        this.likes = [];
    }

    addLike(id, title, author, img) {
        const like = {
            id,
            title,
            author,
            img
        };
        // push the like to the array
        this.likes.push(like);

        // persist data to localstorage
        this.persistData();

        return like;
    }

    deleteLike(id) {
        // we pass in the id, then we find the index of the id, 
        //and then remove the element corresponding to the id
        const index = this.likes.findIndex(el => el.id === id);
        this.likes.splice(index, 1);

        // persist data to local storage
        this.persistData();

    }
 
    // check weahter there is a like in the array
    isLiked(id) {
        return this.likes.findIndex(el => el.id === id) !== -1;
    }
    likesCount(id) {
        return this.likes.length;
    }

    persistData() {
        localStorage.setItem("likes", JSON.stringify(this.likes));
    }

    readData() {
        const storage = JSON.parse(localStorage.getItem("likes"));

        // restore data from local storage, if there's any
        if (storage) this.likes = storage;
    }
}