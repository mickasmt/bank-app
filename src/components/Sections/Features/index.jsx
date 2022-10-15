import React from "react";
import "styles/components/sections/features.scss";

import catIcon from "assets/img/icon-chat.png";
import moneyIcon from "assets/img/icon-money.png";
import securityIcon from "assets/img/icon-security.png";

const featuresData = [
  {
    icon: catIcon,
    altIcon: "Chat Icon",
    title: "You are our #1 priority",
    description: `Need to talk to a representative? You can get in touch through our
    24/7 chat or through a phone call in less than 5 minutes.`,
  },
  {
    icon: moneyIcon,
    altIcon: "Money Icon",
    title: "More savings means higher rates",
    description:
      "The more you save with us, the higher your interest rate will be!",
  },
  {
    icon: securityIcon,
    altIcon: "Security Icon",
    title: "Security you can trust",
    description:
      "We use top of the line encryption to make sure your data and money is always safe.",
  },
];

/**
 * Feature section component for Home page
 * @returns {React.ReactElement}
 */
function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>

      {featuresData.map((feature) => {
        return (
          <div className="feature-item" key={feature.altIcon}>
            <img
              src={feature.icon}
              alt={feature.altIcon}
              className="feature-icon"
            />
            <h3 className="feature-item-title">{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Features;
