const plans = [
    {
      name: "free",
      price: 0,
      class: "Limited access to features",
      link: 'http://localhost:8888/register_free',
      features: ["Your own branded landing page", "Links your Google Business Profile and your business Facebook page", "A custom URL to your review landing page"]
    },
    {
      name: "pro",
      price: 12.99,
      class: "Moderate access to features",
      link: 'http://localhost:8888/register_pro',
      features: ["Advanced Reputation Monitoring", "Full Review Management", "Priority Email Support"]
    },
    {
      name: "premium",
      price: 24.99,
      class: "Full access to all features",
      link: 'http://localhost:8888/register_premium',
      features: ["Advanced Reputation Monitoring", "Full Review Management", "Priority Email Support", "Dedicated Account Manager"]
    }
  ];

  module.exports = plans