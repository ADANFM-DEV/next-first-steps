import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'pagina de contaco',
 keywords: ['Contact Page', 'Number']
};
export default function ContactPage () {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}