class PostModel {
    id = 0;
    title = { rendered: '' };
    date = '';
    excerpt = { rendered: '' };
    content = { rendered: '' };
    slug = '';

    constructor(state = {}) {
        Object.assign(this, state);
    }

    static fromGraph(e: any) {
        const post = new PostModel();
        post.id = e.node.id;
        post.date = e.node.frontmatter.created;
        post.title.rendered = e.node.frontmatter.title;
        post.excerpt.rendered = e.node.frontmatter.excerpt;
        post.content.rendered = e.node.html;
        post.slug = e.node.fields.slug;
        return post;
    }

    getId() {
        return this.id;
    }

    getTitle() {
        const { rendered } = this.title;
        return rendered;
    }

    hasDate() {
        return this.getDate() !== null;
    }

    getDate() {
        return this.date;
    }

    getExcept() {
        const { rendered } = this.excerpt;
        return rendered;
    }

    getContent() {
        const { rendered } = this.content;
        return rendered;
    }

    getUrl() {
        return this.slug;
    }
}

export default PostModel;
