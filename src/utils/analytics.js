import ReactGA from "react-ga4";

export const initGA = (measurementId) => {
  if (measurementId) {
    ReactGA.initialize(measurementId);
  }
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const trackEvent = ({ category, action, label, value }) => {
  ReactGA.event({
    category,
    action,
    label,
    value,
  });
};

export const trackWhatsAppClick = (location = "Unknown") => {
  trackEvent({
    category: "Engagement",
    action: "Click",
    label: `WhatsApp Button - ${location}`,
  });
};

export const trackFormSubmit = (formName = "Lead Form") => {
  trackEvent({
    category: "Conversion",
    action: "Submit",
    label: formName,
  });
};
