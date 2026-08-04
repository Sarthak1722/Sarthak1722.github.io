import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  || "service_hukevoq";
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_ka5exdv";
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  || "8AsB-u5IenBiLPRMz";

const Contact = () => {
  const formRef = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, setState] = useState({ loading: false, success: false, error: false, errorMessage: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Please enter a valid email address";
      }
    }
    if (!message.trim()) {
      newErrors.message = "Message is required";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear submission feedback
    setState({ loading: false, success: false, error: false, errorMessage: "" });

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setState({ loading: true, success: false, error: false, errorMessage: "" });

    const templateParams = {
      from_name: `${firstName.trim()} ${lastName.trim()}`,
      first_name: firstName.trim(),
      last_name: lastName.trim(),
      from_email: email.trim(),
      reply_to: email.trim(),
      message: message.trim(),
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setState({ loading: false, success: true, error: false, errorMessage: "" });
      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("EmailJS sending error:", err);
      const msg = err?.text || err?.message || "Connection error. Try emailing me directly.";
      setState({ loading: false, success: false, error: true, errorMessage: msg });
    }
  };

  return (
    <section id="contact" className="cf-section">
      {/* Background glow to blend in */}
      <div className="cf-glow" aria-hidden="true" />

      <div className="cf-container max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="cf-header">
          <h2 className="cf-title">HAVE SOME QUESTIONS?</h2>
          <div className="cf-location">
            <span className="cf-location-icon">📨</span>
            <span className="cf-location-text">
              KHARAGPUR <span className="cf-location-sep">•</span> INDIA <span className="cf-location-sep">:</span> Indian Institute of Technology Kharagpur, WB-721302
            </span>
          </div>
        </div>

        {/* Grid layout */}
        <div className="cf-grid">
          {/* Left Column: Postcard/Envelope SVG illustration */}
          <div className="cf-postcard-container">
            <svg
              viewBox="0 0 340 260"
              width="100%"
              height="100%"
              className="cf-postcard-svg"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#cf59e6" />
                  <stop offset="50%" stopColor="#9b6dff" />
                  <stop offset="100%" stopColor="#6bc5f8" />
                </linearGradient>
                <linearGradient id="stamp-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6bc5f8" />
                  <stop offset="100%" stopColor="#cf59e6" />
                </linearGradient>
                {/* Techy grid pattern for postcard background */}
                <pattern id="card-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(155, 109, 255, 0.07)" strokeWidth="0.75" />
                  <circle cx="20" cy="0" r="1" fill="rgba(107, 197, 248, 0.2)" />
                </pattern>
              </defs>
              {/* Back Flap of Open Envelope */}
              <polygon
                points="30,120 170,40 310,120"
                fill="none"
                stroke="url(#glow-grad)"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              {/* Inside back wall of envelope */}
              <polygon
                points="30,120 310,120 310,240 30,240"
                fill="#080511"
                stroke="none"
              />
              
              {/* The Postcard/Letter sticking out */}
              <g className="cf-svg-postcard-group">
                {/* Postcard background */}
                <rect
                  x="60"
                  y="50"
                  width="220"
                  height="140"
                  rx="12"
                  fill="#0e0a1f"
                  stroke="url(#glow-grad)"
                  strokeWidth="4"
                />
                {/* Grid Overlay on the card */}
                <rect
                  x="60"
                  y="50"
                  width="220"
                  height="140"
                  rx="12"
                  fill="url(#card-grid)"
                />

                {/* Left Card Header info */}
                <text
                  x="76"
                  y="74"
                  fill="#9b6dff"
                  fontSize="7.5"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontWeight="800"
                  letterSpacing="1.5"
                  opacity="0.8"
                >
                  IIT KHARAGPUR
                </text>
                <text
                  x="76"
                  y="86"
                  fill="#ffffff"
                  fontSize="10"
                  fontFamily="'Space Grotesk', sans-serif"
                  fontWeight="700"
                  letterSpacing="0.5"
                >
                  SARTHAK FULZELE
                </text>

                {/* Right Stamp design */}
                <g>
                  {/* Outer scalloped/dashed stamp border */}
                  <rect
                    x="218"
                    y="64"
                    width="44"
                    height="38"
                    rx="3"
                    fill="none"
                    stroke="url(#stamp-grad)"
                    strokeWidth="1.5"
                    strokeDasharray="3 2"
                  />
                  {/* Stamp inner solid fill with gradient */}
                  <rect
                    x="222"
                    y="68"
                    width="36"
                    height="30"
                    rx="2"
                    fill="rgba(107, 197, 248, 0.08)"
                    stroke="url(#stamp-grad)"
                    strokeWidth="1"
                  />
                  {/* Holographic symbol inside stamp */}
                  <circle cx="240" cy="83" r="8" fill="none" stroke="url(#stamp-grad)" strokeWidth="1.5" />
                  <text
                    x="237"
                    y="86"
                    fill="#ffffff"
                    fontSize="8"
                    fontFamily="'Space Grotesk', sans-serif"
                    fontWeight="800"
                  >
                    S
                  </text>
                </g>

                {/* Card divider line */}
                <line
                  x1="76" y1="96" x2="200" y2="96"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="1.5"
                />

                {/* Professional text lines / Tech bars */}
                {/* Field 1: Role */}
                <rect x="76" y="108" width="105" height="3" rx="1.5" fill="#6bc5f8" opacity="0.9" />
                <rect x="76" y="117" width="125" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
                
                {/* Field 2: Specialties */}
                <rect x="76" y="129" width="140" height="3" rx="1.5" fill="#cf59e6" opacity="0.9" />
                <rect x="76" y="138" width="95" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />
                
                {/* Field 3: Status */}
                <rect x="76" y="150" width="115" height="3" rx="1.5" fill="#9b6dff" opacity="0.9" />
                <rect x="76" y="159" width="60" height="3" rx="1.5" fill="rgba(255,255,255,0.25)" />

                {/* Developer signature watermark */}
                <text
                  x="210"
                  y="172"
                  fill="#6bc5f8"
                  fontSize="12"
                  fontFamily="'Caveat', cursive"
                  fontWeight="600"
                  opacity="0.85"
                  transform="rotate(-5, 210, 172)"
                >
                  Sarthak
                </text>
              </g>

              {/* Envelope left flap */}
              <polygon
                points="30,120 170,175 30,240"
                fill="rgba(10, 10, 20, 0.96)"
                stroke="url(#glow-grad)"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              {/* Envelope right flap */}
              <polygon
                points="310,120 170,175 310,240"
                fill="rgba(10, 10, 20, 0.96)"
                stroke="url(#glow-grad)"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
              {/* Envelope bottom/front flap */}
              <polygon
                points="30,240 170,175 310,240"
                fill="none"
                stroke="url(#glow-grad)"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Right Column: Clean Form Layout */}
          <div className="cf-form-container">
            <form ref={formRef} onSubmit={handleSubmit} className="cf-form" noValidate>
              {/* Hidden name combiner for template variables */}
              <input
                type="hidden"
                name="from_name"
                value={`${firstName} ${lastName}`.trim()}
              />

              <div className="cf-input-wrapper">
                <input
                  type="text"
                  name="first_name"
                  autoComplete="given-name"
                  className={`cf-field-input ${errors.firstName ? "cf-field-input--error" : ""}`}
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    if (errors.firstName) {
                      setErrors((prev) => ({ ...prev, firstName: "" }));
                    }
                  }}
                  required
                  disabled={state.loading}
                  aria-invalid={errors.firstName ? "true" : "false"}
                  aria-describedby={errors.firstName ? "firstName-error" : undefined}
                />
                {errors.firstName && (
                  <span className="cf-field-error-msg" id="firstName-error" role="alert">
                    ⚠️ {errors.firstName}
                  </span>
                )}
              </div>

              <div className="cf-input-wrapper">
                <input
                  type="text"
                  name="last_name"
                  autoComplete="family-name"
                  className={`cf-field-input ${errors.lastName ? "cf-field-input--error" : ""}`}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                    if (errors.lastName) {
                      setErrors((prev) => ({ ...prev, lastName: "" }));
                    }
                  }}
                  required
                  disabled={state.loading}
                  aria-invalid={errors.lastName ? "true" : "false"}
                  aria-describedby={errors.lastName ? "lastName-error" : undefined}
                />
                {errors.lastName && (
                  <span className="cf-field-error-msg" id="lastName-error" role="alert">
                    ⚠️ {errors.lastName}
                  </span>
                )}
              </div>

              <div className="cf-input-wrapper">
                <input
                  type="email"
                  name="from_email"
                  autoComplete="email"
                  className={`cf-field-input ${errors.email ? "cf-field-input--error" : ""}`}
                  placeholder="What's your email?"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errors.email) {
                      setErrors((prev) => ({ ...prev, email: "" }));
                    }
                  }}
                  required
                  disabled={state.loading}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span className="cf-field-error-msg" id="email-error" role="alert">
                    ⚠️ {errors.email}
                  </span>
                )}
              </div>

              <div className="cf-input-wrapper">
                <textarea
                  name="message"
                  rows={4}
                  className={`cf-field-textarea ${errors.message ? "cf-field-textarea--error" : ""}`}
                  placeholder="Your questions..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) {
                      setErrors((prev) => ({ ...prev, message: "" }));
                    }
                  }}
                  required
                  disabled={state.loading}
                  aria-invalid={errors.message ? "true" : "false"}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span className="cf-field-error-msg" id="message-error" role="alert">
                    ⚠️ {errors.message}
                  </span>
                )}
              </div>

              {/* Success/Error Feedback */}
              {state.success && (
                <p className="cf-status cf-status--success">
                  ✓ Message sent! I'll get back to you soon.
                </p>
              )}
              {state.error && (
                <p className="cf-status cf-status--error">
                  ✕ {state.errorMessage || "Connection error. Try emailing me directly."}
                </p>
              )}

              <button
                type="submit"
                className="cf-submit-pill"
                disabled={state.loading || state.success}
              >
                {state.loading ? (
                  <span className="cf-loader" />
                ) : state.success ? (
                  "Message Sent ✓"
                ) : (
                  "SEND MESSAGE"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
