import PostModel from "./PostModel";

export default class PostsModel {
    posts = [];
    post = null;
    didLoad = false;
    didPostLoad = false;

    static fromGraph(data: any): PostsModel {
        const posts = new PostsModel();
        posts.posts = data.allMarkdownRemark.edges.map(e => PostModel.fromGraph(e));
        return posts;
    }

    getPosts() {
        return this.posts.map(post => new PostModel(post));
    }

    constructor(state = {}) {
        Object.assign(this, state);
    }

    hasLoaded() {
        return this.didLoad;
    }

    isPostNotFound() {
        return this.didPostLoad && (this.post === null || this.post.id === 0);
    }

    hasPostLoaded() {
        return this.didPostLoad && this.post !== null && this.post.id !== 0;
    }
}
