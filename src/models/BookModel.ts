export default class BookModel {
    title: string;
    cover: string;

    static fromGraph(e: any) {
        const book = new BookModel();
        book.title = e.node.frontmatter.title;
        book.cover = e.node.frontmatter.cover;
        return book;
    }
}
