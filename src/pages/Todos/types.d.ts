interface TodoItem {
  complete: boolean;
  date?: string;
  description?: string;
  timeDeleted: date;
  difficulty?: number;
  id: number;
  title: string;
}

interface UpdateTodo {
  (e: React.MouseEvent, id: number, key: string, value: any): void;
}
