export interface supportModel {
    $id: number,
    Department: number,
    AdminIsRead: boolean,
    UserIsRead: boolean,
    IsSolved: boolean,
    Feedback: string,
    DepartmentId: number,
    UserId: number,
    Id: number,
}

export interface createTicket {
    DepartmentId: number,
    MessageBody: string,
  }
