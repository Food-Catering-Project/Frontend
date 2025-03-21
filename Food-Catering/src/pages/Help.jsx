

import { useState } from "react";

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    // 📌 Section: User Help & Support
    {
      category: "User Help & Support",
      questions: [
        { 
          question: "How do I place an order?", 
          answer: "Browse restaurants, select items, add them to your cart, and proceed to checkout to place your order." 
        },
        { 
          question: "How do I track my order?", 
          answer: "Go to 'My Orders' in your profile to track your current order in real time." 
        },
        { 
          question: "What if my order is delayed?", 
          answer: "If your order is delayed, check the 'Track Order' page for real-time updates or contact support." 
        },
        { 
          question: "How do I cancel an order?", 
          answer: "You can cancel your order from the 'My Orders' section before preparation starts." 
        },
        { 
          question: "How do I request a refund?", 
          answer: "Refunds are processed automatically if an order is canceled before preparation. Contact support for refund issues." 
        },
        { 
          question: "What payment methods are accepted?", 
          answer: "We accept credit/debit cards, UPI, wallets, and cash on delivery (COD)." 
        },
        { 
          question: "How do I reset my password?", 
          answer: "Click on 'Forgot Password' on the login page and follow the steps to reset your password." 
        },
        { 
          question: "How can I contact customer support?", 
          answer: "You can reach our support team via chat or call from the 'Help' section in the app." 
        },
      ],
    },

    // 📌 Section: Restaurant Help & Support (Admin Side)
    {
      category: "Restaurant Registration",
      questions: [
        { 
          question: "How can I register my restaurant?", 
          answer: "Visit the 'Partner with Us' page and fill out the registration form with the required details." 
        },
        { 
          question: "What documents are required for registration?", 
          answer: "You need an FSSAI license, PAN card, GSTIN (if applicable), bank details, and your restaurant menu." 
        },
        { 
          question: "How long does the approval process take?", 
          answer: "The approval process usually takes 24-48 hours after you submit all required documents." 
        },
      ],
    },
    {
      category: "Order Management (For Restaurants)",
      questions: [
        { 
          question: "How do I accept or decline an order?", 
          answer: "Manage orders through the Food Catering Partner Dashboard or the Owner App." 
        },
        { 
          question: "What happens if a customer cancels an order?", 
          answer: "If canceled before preparation, no charges apply. If already prepared, refund policies apply." 
        },
        { 
          question: "How do I update my restaurant menu?", 
          answer: "Log in to your partner dashboard, go to 'Manage Menu,' and update your items and prices." 
        },
      ],
    },
    {
      category: "Payments & Payouts (For Restaurants)",
      questions: [
        { 
          question: "How do I receive payments for orders?", 
          answer: "Payments are credited to your registered bank account weekly, with a detailed transaction summary." 
        },
        { 
          question: "What are the commission charges?", 
          answer: "Food Catering charges a commission based on your agreement. The percentage depends on location and restaurant type." 
        },
        { 
          question: "How do I check my earnings?", 
          answer: "You can view earnings in the 'Reports' section of the Partner Dashboard." 
        },
      ],
    },
    {
      category: "Delivery & Support (For Restaurants)",
      questions: [
        { 
          question: "How does Food Catering assign delivery partners?", 
          answer: "Our system automatically assigns the nearest available delivery partner to ensure fast delivery." 
        },
        { 
          question: "What if a delivery partner is late?", 
          answer: "You can track the delivery partner’s location via the Partner Dashboard. If there’s an issue, contact support." 
        },
        { 
          question: "How do I contact support?", 
          answer: "You can reach our support team via the 'Help' section in the Partner Dashboard or call our support line." 
        },
      ],
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-16">
      <h1 className="text-3xl font-bold text-orange-600 text-center mb-4">
        Help & Support
      </h1>
      <p className="text-lg text-center text-gray-600 mb-6">
        Find answers to common questions or contact support for assistance.
      </p>

      <div className="space-y-6">
        {faqData.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{section.category}</h2>
            {section.questions.map((faq, index) => (
              <div key={index} className="border-b py-2">
                <button
                  onClick={() => toggleAnswer(`${sectionIndex}-${index}`)}
                  className="w-full text-left flex justify-between items-center font-medium text-gray-700 hover:text-orange-600"
                >
                  {faq.question}
                  <span className="text-lg">{openIndex === `${sectionIndex}-${index}` ? "▲" : "▼"}</span>
                </button>
                {openIndex === `${sectionIndex}-${index}` && (
                  <p className="text-gray-600 mt-2">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Help;
