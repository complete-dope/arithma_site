import React, { useState } from 'react';
import { Mail, User, Users } from 'lucide-react';

const HubSpotEmailForm = () => {
  interface FormData {
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
  }

  const [formData, setFormData] = useState<FormData>({
    email: '',
    firstName: '',
    lastName: '',
    gender: 'female',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  // Method 1: Using HubSpot Forms API
  const submitToHubSpotAPI = async (data: FormData) => {
    const portalId = '242945763'; // Your HubSpot Portal ID
    const formId = 'ff77b3c1-d25c-46aa-a8fe-f71f1f5893b9'; // Your HubSpot Form ID
    
    // First try with just basic fields (email, firstname, lastname)
    const hubspotData = {
      fields: [
        { name: 'email', value: data.email },
        { name: 'firstname', value: data.firstName },
        { name: 'lastname', value: data.lastName }
        // Removed gender field temporarily for testing
      ],
      context: {
        pageUri: window.location.href,
        pageName: 'Email Signup Form'
      }
    };

    console.log('Submitting to HubSpot:', hubspotData);

    try {
      const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hubspotData)
      });

      console.log('Response status:', response.status);
      const responseData = await response.text();
      console.log('Response data:', responseData);

      if (response.ok) {
        return { success: true, data: responseData };
      } else {
        return { success: false, error: `HTTP ${response.status}: ${responseData}` };
      }
    } catch (error: any) {
      console.error('HubSpot submission error:', error);
      return { success: false, error: error.message };
    }
  };

  // // Method 2: Using HubSpot Contacts API (requires API key - server-side recommended)
  // const submitToContactsAPI = async (data) => {
  //   // This should be done on your backend for security
  //   const apiKey = 'YOUR_PRIVATE_APP_TOKEN'; // Use private app token from your HubSpot app
    
  //   const contactData = {
  //     properties: {
  //       email: data.email,
  //       firstname: data.firstName,
  //       lastname: data.lastName,
  //       lifecyclestage: 'lead' // Automatically set as lead
  //     }
  //   };

  //   try {
  //     const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': `Bearer ${apiKey}`
  //       },
  //       body: JSON.stringify(contactData)
  //     });

  //     if (response.ok) {
  //       return { success: true };
  //     } else {
  //       throw new Error('Contact creation failed');
  //     }
  //   } catch (error) {
  //     console.error('HubSpot Contacts API error:', error);
  //     return { success: false, error: error.message };
  //   }
  // };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Use Method 1 (Forms API) - recommended for client-side
      const result = await submitToHubSpotAPI(formData);
      
      console.log('Submission result:', result);
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ email: '', firstName: '', lastName: '', gender: 'female' }); // Keep gender for consistency, though not used in form
      } else {
        setSubmitStatus('error');
        console.error('Submission failed:', result.error);
        // Show more detailed error to user in development
        if (result.error) {
          alert(`Debug Info: ${result.error}`);
        }
      }
    } catch (error: any) {
      setSubmitStatus('error');
      console.error('Submission error:', error);
      alert(`Debug Info: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <div className="flex justify-center mb-4">
          <div className="bg-pink-100 p-3 rounded-full">
            <Users className="w-6 h-6 text-pink-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Join Our Community</h2>
        <p className="text-gray-600 mt-2">Sign up for exclusive updates and offers</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            First Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your first name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Last Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your last name"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>
        </div>


        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Sign Up'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <div className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded">
          Successfully signed up! Welcome to our community.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          There was an error submitting the form. Please try again.
        </div>
      )}

    </div>
  );
};

export default HubSpotEmailForm;