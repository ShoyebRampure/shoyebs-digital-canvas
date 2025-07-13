import { useRef, useState } from "react";
import { Send } from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setSubmitting(true);
    setShowAnimation(true);

    // Fixed WhatsApp number format - removed dashes and added country code properly
    const whatsappNumber = "918095523567";
    const whatsappMessage = `Hello, I'm ${formData.name}.\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    setTimeout(() => {
      setSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setShowAnimation(false);
      
      // Open WhatsApp in new tab
      window.open(whatsappURL, '_blank');
    }, 2000);
  };

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cambria:wght@400;700&display=swap');

          .font-primary {
            font-family: 'Cambria', Georgia, serif;
          }

          .bg-professional {
            background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
            backdrop-filter: blur(10px);
          }

          .shadow-professional {
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04);
          }

          .text-primary {
            color: #1e293b;
          }

          .text-secondary {
            color: #475569;
          }

          .text-accent {
            color: #3b82f6;
          }

          .border-professional {
            border: 1px solid #e2e8f0;
          }

          .hover-lift {
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .hover-lift:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.08);
          }

          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            opacity: 0;
            transform: translateY(30px);
          }

          .fade-in-up.delay-1 {
            animation-delay: 0.2s;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .section-title {
            font-size: 2.5rem;
            font-weight: 700;
            background: linear-gradient(135deg, #1e293b 0%, #3b82f6 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 2rem;
            position: relative;
            text-align: center;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: -0.5rem;
            left: 50%;
            transform: translateX(-50%);
            width: 4rem;
            height: 3px;
            background: linear-gradient(135deg, #3b82f6, #1d4ed8);
            border-radius: 1.5px;
          }

          .form-input {
            background: white;
            border: 1px solid #e2e8f0;
            color: #1e293b;
            padding: 1rem;
            border-radius: 0.75rem;
            font-size: 1rem;
            transition: all 0.3s ease;
            width: 100%;
            font-family: 'Cambria', Georgia, serif;
          }

          .form-input::placeholder {
            color: #94a3b8;
          }

          .form-input:focus {
            outline: none;
            border-color: #3b82f6;
            box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
          }

          .form-input:hover {
            border-color: #cbd5e1;
          }

          .btn-professional {
            background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.75rem;
            font-weight: 600;
            border: none;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            font-size: 1rem;
            font-family: 'Cambria', Georgia, serif;
          }

          .btn-professional:hover:not(:disabled) {
            transform: translateY(-1px);
            box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
          }

          .btn-professional:disabled {
            opacity: 0.7;
            cursor: not-allowed;
          }

          .email-link {
            color: #3b82f6;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .email-link:hover {
            color: #1d4ed8;
            text-decoration: underline;
          }

          .contact-info {
            background: white;
            border-radius: 1rem;
            padding: 1.5rem;
            border: 1px solid #f1f5f9;
            margin-bottom: 2rem;
            text-align: center;
          }

          .contact-info h3 {
            color: #1e293b;
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 1rem;
          }

          .contact-info p {
            color: #475569;
            margin-bottom: 0.5rem;
          }

          .message-animation {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(59, 130, 246, 0.1);
            border-radius: 1rem;
            padding: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            z-index: 10;
            animation: messageFloat 2s ease-in-out;
          }

          @keyframes messageFloat {
            0%, 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
            50% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          }

          .message-icon {
            font-size: 3rem;
            animation: bounce 1s infinite;
          }

          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }

          .form-container {
            position: relative;
          }

          .form-field {
            margin-bottom: 1rem;
          }

          @media (max-width: 768px) {
            .section-title {
              font-size: 2rem;
            }
            
            .form-input {
              padding: 0.875rem;
              font-size: 0.95rem;
            }
            
            .btn-professional {
              padding: 0.875rem 1.5rem;
              font-size: 0.95rem;
            }
            
            .contact-info {
              padding: 1.25rem;
            }
          }

          @media (max-width: 480px) {
            .section-title {
              font-size: 1.75rem;
            }
            
            .form-input {
              padding: 0.75rem;
              font-size: 0.9rem;
            }
            
            .btn-professional {
              padding: 0.75rem 1.25rem;
              font-size: 0.9rem;
            }
            
            .contact-info {
              padding: 1rem;
            }
          }
        `}
      </style>

      <section
        id="contact"
        className="relative w-full max-w-xl mx-auto mt-16 mb-12 p-8 rounded-3xl bg-professional shadow-professional border-professional font-primary hover-lift fade-in-up"
      >
        <h2 className="section-title fade-in-up delay-1">💬 Get In Touch</h2>
        
        <div className="contact-info fade-in-up delay-1">
          <h3>Contact Information</h3>
          <p>
            Email: <a href="mailto:shoyebrampure@gmail.com" className="email-link">shoyebrampure@gmail.com</a>
          </p>
          <p>
            WhatsApp: <a href="https://wa.me/918095523567" className="email-link" target="_blank" rel="noopener noreferrer">+91 8095523567</a>
          </p>
        </div>

        <div className="form-container">
          <div className="space-y-4">
            <div className="form-field">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form-input"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-field">
              <textarea
                name="message"
                placeholder="Your Message"
                className="form-input min-h-[120px] resize-none"
                value={formData.message}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="btn-professional"
            >
              <Send size={18} />
              {submitting ? "Sending Message..." : "Send via WhatsApp"}
            </button>
          </div>

          {showAnimation && (
            <div className="message-animation">
              <div className="message-icon">📱</div>
              <p className="text-primary font-medium">Redirecting to WhatsApp...</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}