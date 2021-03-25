export interface Feed {
    _id: string,
    title: string,
    body: string,
    author: string,
    date: Date,
    comments: [{body: string, author: string, date: Date}]
}