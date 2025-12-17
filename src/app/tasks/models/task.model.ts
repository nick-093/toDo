export interface Task {
    id: number;
    name: string;
    type: string;
    status: 'To Do' | 'In Progress' | 'Completed';
    date: string;
}
