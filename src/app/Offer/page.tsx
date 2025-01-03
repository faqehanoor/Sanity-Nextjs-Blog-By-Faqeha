import React from 'react';

interface OfferItemProps {
  title: string;
  description: string;
}

const OfferItem: React.FC<OfferItemProps> = ({ title, description }) => (
  <li
    className="p-4 bg-white bg-opacity-50 rounded-lg shadow-md hover:bg-opacity-75 transition-all"
    aria-label={title}
  >
    <h2 className="text-2xl font-semibold text-pink-600 mb-2">{title}</h2>
    <p className="text-gray-800">{description}</p>
  </li>
);

const Offer = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 py-10">
      <div className="container mx-auto px-6">
        <h1 id="special-offers" className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Special Offers
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ul className="space-y-8 text-lg">
            <OfferItem
              title="Exclusive Perfume Discount"
              description="Get 20% off on our best-selling perfumes. Limited time only!"
            />
            <OfferItem
              title="Buy One Get One Free"
              description="Purchase any perfume and get another one absolutely free!"
            />
            <OfferItem
              title="Seasonal Sale"
              description="Enjoy up to 50% off on selected fragrances. Don't miss out!"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Offer;
