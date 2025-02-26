export interface IBlogPost {
    id: string;
    title: string;
    slug: string;
    description: string;
    date: string;
    tags: string[];
    author: {
        name: string;
        avatar: string;
    };
    readingTime: string;
    content: string;
}