
export interface ContentBase {
    title: string;
    overview: string;
    content: any;
    id: string;
    slug: [
        current: string,
    ];
    _createdAt: string;
    mainImage: string;
}


export interface Blog extends ContentBase {}

export interface Offer extends ContentBase {}

export interface ContactUs extends ContentBase {}
