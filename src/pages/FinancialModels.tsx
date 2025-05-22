import React, { useState, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { cn } from "../lib/utils"; // Assuming cn utility is available for conditional class names

// Sample data for financial models
const financialModels = [
  { name: 'Model A', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8onhG-pDxcLGa2w6i1svzlwmwZDBVWpNYyaHLpciBhMBo0g5Chuin_2BdmMk7L-M_Yc5WSTgXVPaE/pubhtml?widget=true&headers=false' },
  { name: 'Model B', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8onhG-pDxcLGa2w6i1svzlwmwZDBVWpNYyaHLpciBhMBo0g5Chuin_2BdmMk7L-M_Yc5WSTgXVPaE/pubhtml?widget=true&headers=false' }, // Replace with actual URLs
  { name: 'Model C', url: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS8onhG-pDxcLGa2w6i1svzlwmwZDBVWpNYyaHLpciBhMBo0g5Chuin_2BdmMk7L-M_Yc5WSTgXVPaE/pubhtml?widget=true&headers=false' }, // Replace with actual URLs
];

const FinancialModels: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedModelUrl, setSelectedModelUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const openModal = (url: string) => {
    setSelectedModelUrl(url);
    setIsModalOpen(true);
    setIsLoading(true); // Set loading to true when modal opens
  };

  const handleIframeLoad = () => {
    setIsLoading(false); // Set loading to false when iframe loads
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Financial Models</h2>
      <ul className="space-y-2"> {/* Use Tailwind spacing */}
        {financialModels.map((model) => (
          <li key={model.name}>
            <div
              className="cursor-pointer text-blue-600 hover:underline p-2 border rounded-md" // Styled list item
              onClick={() => openModal(model.url)}
            >
              {model.name}
            </div>
          </li>
        ))}
      </ul>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[90%] h-5/6 flex flex-col"> {/* Adjust max-width and height */}
          <DialogHeader>
            <DialogTitle>Financial Model</DialogTitle>
            <DialogClose asChild>
              <Button variant="ghost" className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                 &times; {/* Close button */}
              </Button>
            </DialogClose>
          </DialogHeader>
          <div className="flex-grow relative"> {/* Container for loader and iframe */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
                {/* Simple rotating loader - replace with Shadcn spinner if available */}
                <svg className="animate-spin h-8 w-8 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"></path>
                </svg>
              </div>
            )}
            <iframe
              src={selectedModelUrl}
              style={{ width: '100%', height: '100%', border: 'none' }}
              title="Financial Model"
              onLoad={handleIframeLoad} // Call handler when iframe loads
              className={cn(isLoading ? 'invisible' : 'visible')} // Hide iframe while loading
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FinancialModels;