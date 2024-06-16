import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const DialogContext = createContext();

export const DialogProvider = ({ children }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);

  const handleDialogOpen = (content) => {
    setDialogContent(content);
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setDialogContent(null);
  };

  return (
    <DialogContext.Provider value={{ openDialog, dialogContent, handleDialogOpen, handleDialogClose }}>
      {children}
    </DialogContext.Provider>
  );
};

DialogProvider.propTypes = {
  children: PropTypes.node.isRequired,
};