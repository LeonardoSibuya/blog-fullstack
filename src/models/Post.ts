class PostsClass {
  id: number
  titlePost: string
  date: string
  description: string
  modal?: () => void

  constructor(
    titlePost: string,
    date: string,
    description: string,
    id: number,
    modal?: () => void
  ) {
    ;(this.titlePost = titlePost),
      (this.date = date),
      (this.description = description),
      (this.id = id),
      (this.modal = modal)
  }
}

export default PostsClass
