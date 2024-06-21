export interface Article {
    id: string;
    author: string;
    title: string;
    description: string;
    urlToImage: string;
    publishedAt: string;
    views: number;
}

export const articles: Article[] = [
    
        {
            id: '1',
            author: "John Doe",
            title: "Exploring TypeScript",
            description: "An introductory article on TypeScript, its features, and benefits.",
            urlToImage: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
            publishedAt: "2023-01-01",
            views: 0,
        },
        {
            id: '2',
            author: "Jane Smith",
            title: "Advanced TypeScript Tips",
            description: "A deep dive into advanced TypeScript features for experienced developers.",
            urlToImage: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
            publishedAt: "2023-01-1",
            views: 0,
        },
        {
            id: '3',
            author: "Mike Johnson",
            title: "TypeScript vs. JavaScript",
            description: "A comparison between TypeScript and JavaScript, discussing their differences and use cases.",
            urlToImage: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg",
            publishedAt: "2023-02-01",
            views: 0,
        },
        {
            id: '4',
            author: "Emily Davis",
            title: "TypeScript for Beginners",
            description: "A comprehensive guide for beginners to start learning TypeScript.",
            urlToImage: "https://example.com/images/ts-for-beginners.jpg",
            publishedAt: "2023-03-01",
            views: 0,
        }
    ];



