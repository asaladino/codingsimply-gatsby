export default class BookModel {
  public title: string

  public cover: string

  public static fromGraph(e: any) {
    const book = new BookModel()
    book.title = e.node.frontmatter.title
    book.cover = e.node.frontmatter.cover
    return book
  }
}
