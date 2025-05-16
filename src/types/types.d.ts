export interface Post {
    id: number;
    title: string;
    content: string;
    created_at: string;
    updated_at: string;
}

export interface UpdatePostData {
    popstId: number;
    title: string;
    content: string;
}
