import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'pagina de precios',
 keywords: ['Pricing Page', 'Dollar']
};
export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}