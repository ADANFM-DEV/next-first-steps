import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'sobre nosotros',
 keywords: ['About page','Adan','information']
};
export default function AboutPage() {
    return (
        <>
            <span className="text-7xl">About Page</span>
        </>
    )
}