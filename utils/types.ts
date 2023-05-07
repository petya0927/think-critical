export interface Question {
  metadata: any,
  sys: {
    space: Object,
    id: string,
    type: string,
    createdAt: string,
    updatedAt: string,
    environment: Object,
    revision: number,
    contentType: Object,
    locale: string
  },
  fields: {
    title: string,
    leadText: string,
    response: any,
  }
}