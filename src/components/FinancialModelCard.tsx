import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown
import modelMapping from '../utils/model_mapping.json'; // Import model mapping

interface FinancialModelCardProps {
  title: string;
  description: string;
  githubSheetLink: string; // Assuming this is the direct link to the .xlsx file
}

const FinancialModelCard: React.FC<FinancialModelCardProps> = ({ title, description, githubSheetLink }) => {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [viewerContentType, setViewerContentType] = useState<'none' | 'excel' | 'markdown'>('none');

  // State for Excel viewer
  const [excelViewerState, setExcelViewerState] = useState({
    isLoading: false,
    viewerError: null as string | null,
    viewerUrl: null as string | null,
  });
  const loadingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // State for Markdown viewer
  const [markdownViewerState, setMarkdownViewerState] = useState({
    markdownContent: undefined as string | undefined, // Change type to string | undefined
    isMarkdownLoading: false,
    markdownError: null as string | null,
  });

  const handleViewModelClick = () => {
    setViewerContentType('excel');
    setIsViewerOpen(true);
    setExcelViewerState({ isLoading: true, viewerError: null, viewerUrl: null });

    let fileUrl = githubSheetLink;

    if (!fileUrl) {
      setExcelViewerState({ isLoading: false, viewerError: "No Excel file link provided.", viewerUrl: null });
      return;
    }

    if (!fileUrl.startsWith('https://')) {
        setExcelViewerState({ isLoading: false, viewerError: 'The URL must start with "https://".', viewerUrl: null });
        return;
    }

    // Attempt to convert GitHub blob links to raw links
    if (fileUrl.includes('github.com')){
      fileUrl = fileUrl.replace('github.com', 'raw.githubusercontent.com')
    } else if (fileUrl.includes('github.com') && fileUrl.includes('/raw/')) {
        // Already a raw link, no change needed
    } else if (fileUrl.includes('github.com')) {
        // Might be another GitHub page link, warn the user
        console.warn("GitHub link does not appear to be a raw file or blob link:", fileUrl);
        // Continue anyway, the Office viewer might handle some cases
    }

    if (fileUrl.includes('/blob/')){
      fileUrl = fileUrl.replace('/blob/', '/')
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
    setExcelViewerState(prevState => ({ ...prevState, viewerUrl: officeViewerUrl }));

    console.log("Attempting to load viewer with URL:", officeViewerUrl);

    // // Set a timeout to hide the loading indicator after a few seconds
    // loadingTimeoutRef.current = setTimeout(() => {
    //   setExcelViewerState(prevState => ({ ...prevState, isLoading: false }));
    //   if (!excelViewerState.viewerUrl) { // Use the state directly here, not prevState
    //        setExcelViewerState(prevState => ({ ...prevState, viewerError: 'Viewer did not start loading. Please check the link.' }));
    //   }
    // }, 2000); //2 seconds timeout
  };

  const handleGraspClick = async () => {
    console.log("Grasp button clicked for title:", title); // Log button click
    setViewerContentType('markdown');
    setIsViewerOpen(true);
    setMarkdownViewerState({ markdownContent: undefined, isMarkdownLoading: true, markdownError: null }); // Change null to undefined

    // Find the model in the mapping
    const model = modelMapping.find(m => m.title === title);

    if (!model || !model.grasp_link) {
      console.error("Grasp link not found for model:", title); // Log error if link not found
      setMarkdownViewerState({ markdownContent: undefined, isMarkdownLoading: false, markdownError: "Grasp link not found for this model." }); // Change null to undefined
      return;
    }

    console.log("Found grasp link:", model.grasp_link); // Log the found link

    try {
      console.log("Attempting to fetch markdown from:", model.grasp_link); // Log fetch attempt
      const response = await fetch(model.grasp_link);
      console.log("Fetch response received:", response); // Log fetch response

      if (!response.ok) {
        console.error("HTTP error fetching markdown:", response.status, response.statusText); // Log HTTP error
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const markdownText = await response.text();
      console.log("Markdown text fetched successfully:", markdownText.substring(0, 200) + '...'); // Log fetched text (truncated)
      setMarkdownViewerState({ markdownContent: markdownText, isMarkdownLoading: false, markdownError: null });
      console.log("Markdown state after fetch:", { markdownContent: markdownText.substring(0, 50) + '...', isMarkdownLoading: false, markdownError: null }); // Log state after update
    } catch (error: any) {
      console.error("Error fetching or processing markdown:", error); // Log any other errors
      setMarkdownViewerState({ markdownContent: undefined, isMarkdownLoading: false, markdownError: `Failed to fetch markdown: ${error.message}` }); // Change null to undefined
      console.log("Markdown state after error:", { markdownContent: undefined, isMarkdownLoading: false, markdownError: `Failed to fetch markdown: ${error.message}` }); // Log state after error
    }
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
      setViewerContentType('none');
      setExcelViewerState({ isLoading: false, viewerError: null, viewerUrl: null });
      setMarkdownViewerState({ markdownContent: undefined, isMarkdownLoading: false, markdownError: null }); // Change null to undefined
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
    }
  };


  return (
    <Card className="flex flex-col gap-0 md:flex-row items-stretch justify-between md:gap-4 pt-4 pl-4 pr-4 pb-2 m-1">
      <div className="flex flex-col flex-grow md:flex-[2_2_0px] pb-0">
        <CardHeader className="p-1">
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex gap-2 p-0 mt-auto items-end">

          {/* Dialog component */}
          <Dialog open={isViewerOpen} onOpenChange={handleOpenChange}>
            {/* Buttons that trigger the dialog and set content type */}
            {/* View Model Button */}
            <DialogTrigger asChild>
              <Button onClick={handleViewModelClick}>View Model</Button>
            </DialogTrigger>
             {githubSheetLink && ( // Keep the condition if githubSheetLink is required for Grasp button visibility
                <DialogTrigger asChild>
                    <Button variant="outline" onClick={handleGraspClick}>
                      Grasp
                    </Button>
                </DialogTrigger>
              )}

            <DialogContent className="sm:max-w-[95vw] h-[94vh] flex flex-col">
              <DialogHeader>
                <DialogTitle>{`Viewing: ${title}`}</DialogTitle>
                <DialogDescription>
                  {viewerContentType === 'markdown' ? "Displaying Grasp content." : "Displaying the financial model from the provided link."}
                </DialogDescription>
              </DialogHeader>
              <div className="w-full h-full flex flex-col items-center justify-center flex-grow overflow-auto"> {/* Add overflow-auto */}
                {/* Conditionally render content based on viewerContentType */}
                {viewerContentType === 'excel' && (
                  <>
                    {/* {excelViewerState.isLoading && !excelViewerState.viewerError && <p>Loading viewer...</p>} */}
                    {excelViewerState.viewerError && <p className="text-red-500">{excelViewerState.viewerError}</p>}
                    {excelViewerState.viewerUrl && !excelViewerState.viewerError && (
                      <>
                        <iframe
                          src={excelViewerState.viewerUrl}
                          title="Excel Viewer"
                          className="w-full h-full border-0"
                          allowFullScreen
                          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                        ></iframe>
                      </>
                    )}
                    {!excelViewerState.isLoading && !excelViewerState.viewerError && excelViewerState.viewerUrl && isViewerOpen && (
                        <p className="text-sm text-gray-500 mt-2">
                            If the Excel file is not visible above, please ensure the link is a direct link to a publicly accessible file, or try opening the link directly.
                        </p>
                    )}
                    {!excelViewerState.isLoading && !excelViewerState.viewerError && !excelViewerState.viewerUrl && isViewerOpen && (
                        <p>Click "View Model" to load the viewer.</p>
                    )}
                  </>
                )}

                {viewerContentType === 'markdown' && (
                  <>
                    {(() => {

                      console.log('Markdown viewer rendered', markdownViewerState);
                      console.log('viewer content type rendered', viewerContentType);
                      return null; // Don't render anything
                    })()}
                    {markdownViewerState.isMarkdownLoading && <p>Loading Grasp content...</p>}
                    {markdownViewerState.markdownError && <p className="text-red-500">{markdownViewerState.markdownError}</p>}
                    {markdownViewerState.markdownContent !== undefined && !markdownViewerState.isMarkdownLoading && (
                      <>
                        <p>TEST: Markdown content should be below:</p>
                        <p>{markdownViewerState.markdownContent}</p>
                        {/* <ReactMarkdown>
                          {markdownViewerState.markdownContent}
                        </ReactMarkdown> */}
                      </>
                    )}
                     {!markdownViewerState.isMarkdownLoading && !markdownViewerState.markdownError && markdownViewerState.markdownContent === undefined && ( // Adjusted condition
                        <p>Click "Grasp" to load the content.</p>
                    )}
                  </>
                )}

                {viewerContentType === 'none' && isViewerOpen && (
                     <p>Select a view option.</p>
                )}

              </div>
            </DialogContent>
          </Dialog>

        </CardFooter>
      </div>
    </Card>
  );
};

export default FinancialModelCard;