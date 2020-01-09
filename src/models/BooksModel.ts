import BookModel from "./BookModel";

export default class BooksModel {

  static fromGraph(data: any): BookModel[] {
    return data.allMarkdownRemark.edges.map(e => BookModel.fromGraph(e));
  }
}
