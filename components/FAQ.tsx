export default function FAQ() {
  const faqs = [
    {
      question: "Is Cheese Chompers 3D suitable for children?",
      answer:
        "Yes, Cheese Chompers 3D is designed to be family-friendly with no violent content. The puzzle-solving aspects of Cheese Chompers 3D can be educational, helping children develop spatial reasoning and problem-solving skills while they enjoy the charming world of Cheese Chompers 3D.",
    },
    {
      question: "Does Cheese Chompers 3D have in-app purchases?",
      answer: "The base version of Cheese Chompers 3D comes complete with all core gameplay features. Optional cosmetic DLC for Cheese Chompers 3D is available, but these items are purely decorative and don't affect gameplay balance. All substantial content updates for Cheese Chompers 3D are provided free to all players.",
    },
    {
      question: "Can I play Cheese Chompers 3D offline?",
      answer:
        "Absolutely! The single-player campaign in Cheese Chompers 3D is fully playable offline. However, multiplayer features and community content in Cheese Chompers 3D require an internet connection. Your progress in Cheese Chompers 3D will sync to the cloud when you reconnect, ensuring you never lose your achievements.",
    },
    {
      question: "How often is Cheese Chompers 3D updated?",
      answer: "The development team releases major updates for Cheese Chompers 3D quarterly, with smaller patches and hotfixes deployed as needed. Each major update to Cheese Chompers 3D typically includes new levels, character options, and gameplay features based on community feedback. The roadmap for upcoming Cheese Chompers 3D content is shared on our official website and social media channels.",
    },
    {
      question: "Does Cheese Chompers 3D support modding?",
      answer:
        "Yes! Cheese Chompers 3D features robust modding tools that allow creative players to design their own levels, character skins, and even gameplay mechanics. The thriving mod community for Cheese Chompers 3D has created thousands of custom experiences that extend the game far beyond its original content. Official documentation for Cheese Chompers 3D modding is available on our developer portal.",
    },
    {
      question: "Still Have Questions?",
      answer:
        "If you can't find the answer to your question about Cheese Chompers 3D in our FAQ, please reach out to our community support team. Our dedicated staff is passionate about ensuring every player has the best possible experience with Cheese Chompers 3D and will respond to your inquiry promptly.",
    }
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Cheese Chompers 3D</h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-700 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

