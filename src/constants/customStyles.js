export const customStyles = {
  control: (styles) => ({
    ...styles,
    width: "100%",
    maxWidth: "14rem",
    minWidth: "12rem",
    borderRadius: "0.5rem", // Rounded corners
    color: "#333", // Dark text color
    fontSize: "1rem", // Slightly larger font size
    lineHeight: "1.5rem", // Adjusted line height
    backgroundColor: "#F0F4F8", // Light blue-gray background
    cursor: "pointer",
    border: "2px solid #718096", // Slate gray border
    boxShadow: "0 0 5px 0 rgba(113, 128, 150, 0.2);", // Soft shadow
    ":hover": {
      border: "2px solid #2D3748", // Darker border on hover
      boxShadow: "none",
    },
  }),
  option: (styles) => {
    return {
      ...styles,
      color: "#333", // Dark text color
      fontSize: "1rem",
      lineHeight: "1.5rem",
      width: "100%",
      background: "#FFFFFF", // White background
      ":hover": {
        backgroundColor: "#E2E8F0", // Lighter gray background on hover
        color: "#2D3748", // Darker text color on hover
        cursor: "pointer",
      },
    };
  },
  menu: (styles) => {
    return {
      ...styles,
      backgroundColor: "#F0F4F8", // Light blue-gray background
      maxWidth: "14rem",
      border: "2px solid #718096",
      borderRadius: "0.5rem", // Rounded corners
      boxShadow: "0 0 5px 0 rgba(113, 128, 150, 0.2);",
    };
  },

  placeholder: (defaultStyles) => {
    return {
      ...defaultStyles,
      color: "#718096", // Slate gray placeholder text
      fontSize: "1rem",
      lineHeight: "1.5rem",
    };
  },
};
