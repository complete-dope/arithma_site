import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface FinancialModelCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubSheetLink: string; // Assuming this is the direct link to the .xlsx file
}

const FinancialModelCard: React.FC<FinancialModelCardProps> = ({ title, description, imageUrl, githubSheetLink }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [viewerError, setViewerError] = useState<string | null>(null);
  const [viewerUrl, setViewerUrl] = useState<string | null>(null);
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleViewModelClick = () => {
    setIsViewerOpen(true);
    setIsLoading(true);
    setViewerError(null);

    let fileUrl = githubSheetLink;

    if (!fileUrl) {
      setViewerError("No Excel file link provided.");
      setIsLoading(false);
      return;
    }

    if (!fileUrl.startsWith('https://')) {
        setViewerError('The URL must start with "https://".');
        setIsLoading(false);
        return;
    }

    // Attempt to convert GitHub blob links to raw links
    if (fileUrl.includes('github.com') && fileUrl.includes('/blob/')) {
      fileUrl = fileUrl.replace('github.com', 'raw.githubusercontent.com').replace('/blob/', '/');
    } else if (fileUrl.includes('github.com') && fileUrl.includes('/raw/')) {
        // Already a raw link, no change needed
    } else if (fileUrl.includes('github.com')) {
        // Might be another GitHub page link, warn the user
        console.warn("GitHub link does not appear to be a raw file or blob link:", fileUrl);
        // Continue anyway, the Office viewer might handle some cases
    }

    // Optional: Add a check for .xlsx or .xls extension if strictly needed,
    // but the Office viewer might support more.
    if (!fileUrl.toLowerCase().endsWith('.xlsx') && !fileUrl.toLowerCase().endsWith('.xls')) {
        console.warn('File extension is not .xlsx or .xls:', fileUrl);
        // Continue anyway
    }

    console.log("File URL:", fileUrl);
    

    const encodedUrl = encodeURIComponent(fileUrl);
    const officeViewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodedUrl}`;
    setViewerUrl(officeViewerUrl);

    console.log("Attempting to load viewer with URL:", officeViewerUrl);

    // Set a timeout to hide the loading indicator after a few seconds
    // loadingTimeoutRef.current = setTimeout(() => {
    //   setIsLoading(false);
    //   // // Optionally set an error here if viewerUrl is still null, though it should be set by now
    //   // if (!viewerUrl) {
    //   //      setViewerError('Viewer did not start loading. Please check the link.');
    //   // }
    // }, 2000); // 2 seconds timeout
  };

  // Clear timeout when the component unmounts or dialog is closed
  useEffect(() => {
    return () => {
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    };
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsViewerOpen(open);
    if (!open) {
      console.log("HandleOpenChange, to change the is viewer open !!");
      // Reset states when closing the dialog
      setIsLoading(false);
      setViewerError(null);
      setViewerUrl(null);
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    }
  };


  return (
    <Card className="flex flex-col md:flex-row items-stretch justify-between gap-4 p-4">
      <div className="flex flex-col gap-4 flex-grow md:flex-[2_2_0px]">
        <CardHeader className="p-0">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-2 p-0 mt-auto">
          
          <Dialog open={isViewerOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button onClick={handleViewModelClick}>View Model</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[95vw] h-[94vh] flex flex-col">
              <DialogHeader>
                <DialogTitle>{`Viewing: ${title}`}</DialogTitle>
                <DialogDescription>
                  Displaying the financial model from the provided link. If not loaded, check your internet connection once.
                </DialogDescription>
              </DialogHeader>
              <div className="w-full h-full flex flex-col items-center justify-center flex-grow">
                {/* {isLoading && !viewerError && <p>Loading viewer...</p>} */}
                {viewerError && <p className="text-red-500">{viewerError}</p>}
                {viewerUrl && !viewerError && (
                  <>
                    {/* <h1>This is the iframe here</h1> */}
                    <iframe
                      src={viewerUrl}
                      title="Excel Viewer"
                      className="w-full h-full border-0"
                      // Removed onLoad and onError as they are unreliable for cross-origin content
                      allowFullScreen
                      sandbox="allow-scripts allow-same-origin allow-popups allow-forms" // Consider adding a sandbox for security if needed
                    ></iframe>
                  </>
                )}
                 {!isLoading && !viewerError && viewerUrl && isViewerOpen && (
                    // This message appears if isLoading becomes false but the iframe content might not be visible
                    <p className="text-sm text-gray-500 mt-2">
                        If the Excel file is not visible above, please ensure the link is a direct link to a publicly accessible file, or try opening the link directly.
                    </p>
                 )}
                 {!isLoading && !viewerError && !viewerUrl && isViewerOpen && (
                    <p>Click "View Model" to load the viewer.</p>
                 )}
              </div>
            </DialogContent>
          </Dialog>

          {githubSheetLink && (
            <Button asChild variant="outline">
              <a
                href={githubSheetLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Grasp
              </a>
            </Button>
          )}
        </CardFooter>
      </div>
      <CardContent className="p-0 flex-shrink-0 w-full md:w-1/3">
        <div
          className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-md"
          style={{ backgroundImage: `url("${imageUrl}")` }}
        ></div>
      </CardContent>
    </Card>
  );


};

export default FinancialModelCard;