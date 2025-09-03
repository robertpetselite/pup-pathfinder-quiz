import { useState } from 'react';
import { LeadForm } from '@/types/quiz';
import { QuizButton } from '@/components/QuizButton';

interface FormSlideProps {
  onSubmit: (formData: LeadForm) => void;
}

export function FormSlide({ onSubmit }: FormSlideProps) {
  const [formData, setFormData] = useState<LeadForm>({
    name: '',
    email: '',
    phone: ''
  });
  const [errors, setErrors] = useState<Partial<LeadForm>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: Partial<LeadForm> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (isSubmitting) return;

    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // IMPORTANT: Replace this with your actual Make.com Webhook URL
        const webhookUrl = 'https://hook.eu2.make.com/7ttqdomaplyzofsmcz3jxpm1mxo5vqfr';
        
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          console.log('Form data sent successfully to Make.com!');
          onSubmit(formData); // Proceed to the next step in the quiz
        } else {
          console.error('Failed to send form data to Make.com:', response.status, await response.text());
          // You can show a more user-friendly error message here
          alert('Sorry, there was an issue submitting your form. Please try again.');
        }
      } catch (error) {
        console.error('Error sending form data to Make.com:', error);
        alert('Sorry, there was an issue submitting your form. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleInputChange = (field: keyof LeadForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="w-full max-w-lg mx-auto animate-fade-in">
        <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
          <div className="text-center mb-8">
            <div className="text-4xl mb-4">📧</div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Almost There!
            </h2>
            <p className="text-muted-foreground">
              Enter your details to receive your personalized feeding guide
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Your Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full p-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full p-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter your email"
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="w-full p-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                placeholder="Enter your phone number"
                disabled={isSubmitting}
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
            </div>
            
            <QuizButton
              variant="primary"
              onClick={() => handleSubmit()}
              className="text-lg py-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : '📄 Send My Feeding Guide'}
            </QuizButton>
          </form>
          
          <p className="text-xs text-muted-foreground text-center mt-4">
            We respect your privacy. Your information will only be used to send your feeding guide.
          </p>
        </div>
      </div>
    </div>
  );
}



























// import { useState } from 'react';
// import { LeadForm } from '@/types/quiz';
// import { QuizButton } from '@/components/QuizButton';

// interface FormSlideProps {
//   onSubmit: (formData: LeadForm) => void;
// }

// export function FormSlide({ onSubmit }: FormSlideProps) {
//   const [formData, setFormData] = useState<LeadForm>({
//     name: '',
//     email: '',
//     phone: ''
//   });
//   const [errors, setErrors] = useState<Partial<LeadForm>>({});
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const validateForm = (): boolean => {
//     const newErrors: Partial<LeadForm> = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     if (!formData.phone.trim()) {
//       newErrors.phone = 'Phone number is required';
//     } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
//       newErrors.phone = 'Please enter a valid phone number';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e?: React.FormEvent) => {
//     e?.preventDefault();
//     if (isSubmitting) return;

//     if (validateForm()) {
//       setIsSubmitting(true);
//       try {
//         // IMPORTANT: Replace this with your actual Make.com Webhook URL
//         const webhookUrl = 'YOUR_MAKE_COM_WEBHOOK_URL';
        
//         const response = await fetch(webhookUrl, {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify(formData),
//         });

//         if (response.ok) {
//           console.log('Form data sent successfully to Make.com!');
//           onSubmit(formData); // Proceed to the next step in the quiz
//         } else {
//           console.error('Failed to send form data to Make.com:', response.status, await response.text());
//           // You can show a more user-friendly error message here
//           alert('Sorry, there was an issue submitting your form. Please try again.');
//         }
//       } catch (error) {
//         console.error('Error sending form data to Make.com:', error);
//         alert('Sorry, there was an issue submitting your form. Please try again.');
//       } finally {
//         setIsSubmitting(false);
//       }
//     }
//   };

//   const handleInputChange = (field: keyof LeadForm, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }));
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors(prev => ({ ...prev, [field]: undefined }));
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-background px-6">
//       <div className="w-full max-w-lg mx-auto animate-fade-in">
//         <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
//           <div className="text-center mb-8">
//             <div className="text-4xl mb-4">📧</div>
//             <h2 className="text-3xl font-bold text-foreground mb-2">
//               Almost There!
//             </h2>
//             <p className="text-muted-foreground">
//               Enter your details to receive your personalized feeding guide
//             </p>
//           </div>
          
//           <form onSubmit={handleSubmit} className="space-y-6">
//             <div>
//               <label className="block text-sm font-semibold text-foreground mb-2">
//                 Your Name *
//               </label>
//               <input
//                 type="text"
//                 value={formData.name}
//                 onChange={(e) => handleInputChange('name', e.target.value)}
//                 className="w-full p-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                 placeholder="Enter your full name"
//                 disabled={isSubmitting}
//               />
//               {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
//             </div>
            
//             <div>
//               <label className="block text-sm font-semibold text-foreground mb-2">
//                 Email Address *
//               </label>
//               <input
//                 type="email"
//                 value={formData.email}
//                 onChange={(e) => handleInputChange('email', e.target.value)}
//                 className="w-full p-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                 placeholder="Enter your email"
//                 disabled={isSubmitting}
//               />
//               {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
//             </div>
            
//             <div>
//               <label className="block text-sm font-semibold text-foreground mb-2">
//                 Phone Number *
//               </label>
//               <input
//                 type="tel"
//                 value={formData.phone}
//                 onChange={(e) => handleInputChange('phone', e.target.value)}
//                 className="w-full p-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                 placeholder="Enter your phone number"
//                 disabled={isSubmitting}
//               />
//               {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
//             </div>
            
//             <QuizButton
//               variant="primary"
//               onClick={() => handleSubmit()}
//               className="text-lg py-4"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Sending...' : '📄 Send My Feeding Guide'}
//             </QuizButton>
//           </form>
          
//           <p className="text-xs text-muted-foreground text-center mt-4">
//             We respect your privacy. Your information will only be used to send your feeding guide.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }



























// /////////////////////////////////////////////////////////////////////

// // import { useState } from 'react';
// // import { LeadForm } from '@/types/quiz';
// // import { QuizButton } from '@/components/QuizButton';

// // interface FormSlideProps {
// //   onSubmit: (formData: LeadForm) => void;
// // }

// // export function FormSlide({ onSubmit }: FormSlideProps) {
// //   const [formData, setFormData] = useState<LeadForm>({
// //     name: '',
// //     email: '',
// //     phone: ''
// //   });
// //   const [errors, setErrors] = useState<Partial<LeadForm>>({});

// //   const validateForm = (): boolean => {
// //     const newErrors: Partial<LeadForm> = {};
    
// //     if (!formData.name.trim()) {
// //       newErrors.name = 'Name is required';
// //     }
    
// //     if (!formData.email.trim()) {
// //       newErrors.email = 'Email is required';
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = 'Please enter a valid email';
// //     }
    
// //     if (!formData.phone.trim()) {
// //       newErrors.phone = 'Phone number is required';
// //     } else if (!/^\+?[\d\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))) {
// //       newErrors.phone = 'Please enter a valid phone number';
// //     }
    
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     if (validateForm()) {
// //       onSubmit(formData);
// //     }
// //   };

// //   const handleInputChange = (field: keyof LeadForm, value: string) => {
// //     setFormData(prev => ({ ...prev, [field]: value }));
// //     // Clear error when user starts typing
// //     if (errors[field]) {
// //       setErrors(prev => ({ ...prev, [field]: undefined }));
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-background px-6">
// //       <div className="w-full max-w-lg mx-auto animate-fade-in">
// //         <div className="bg-card rounded-2xl shadow-xl p-8 border border-border">
// //           <div className="text-center mb-8">
// //             <div className="text-4xl mb-4">📧</div>
// //             <h2 className="text-3xl font-bold text-foreground mb-2">
// //               Almost There!
// //             </h2>
// //             <p className="text-muted-foreground">
// //               Enter your details to receive your personalized feeding guide
// //             </p>
// //           </div>
          
// //           <form onSubmit={handleSubmit} className="space-y-6">
// //             <div>
// //               <label className="block text-sm font-semibold text-foreground mb-2">
// //                 Your Name *
// //               </label>
// //               <input
// //                 type="text"
// //                 value={formData.name}
// //                 onChange={(e) => handleInputChange('name', e.target.value)}
// //                 className="w-full p-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
// //                 placeholder="Enter your full name"
// //               />
// //               {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
// //             </div>
            
// //             <div>
// //               <label className="block text-sm font-semibold text-foreground mb-2">
// //                 Email Address *
// //               </label>
// //               <input
// //                 type="email"
// //                 value={formData.email}
// //                 onChange={(e) => handleInputChange('email', e.target.value)}
// //                 className="w-full p-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
// //                 placeholder="Enter your email"
// //               />
// //               {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
// //             </div>
            
// //             <div>
// //               <label className="block text-sm font-semibold text-foreground mb-2">
// //                 Phone Number *
// //               </label>
// //               <input
// //                 type="tel"
// //                 value={formData.phone}
// //                 onChange={(e) => handleInputChange('phone', e.target.value)}
// //                 className="w-full p-4 border border-input rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
// //                 placeholder="Enter your phone number"
// //               />
// //               {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
// //             </div>
            
// //             <QuizButton
// //               variant="primary"
// //               onClick={() => {}}
// //               className="text-lg py-4"
// //             >
// //               📄 Send My Feeding Guide
// //             </QuizButton>
// //           </form>
          
// //           <p className="text-xs text-muted-foreground text-center mt-4">
// //             We respect your privacy. Your information will only be used to send your feeding guide.
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }