export type Notification = {
  message?: string;
  type?: "error" | "success";
};

export const NotificationMessage = ({ message, type }: Notification) => {
  if (!message) {
    return null;
  }

  const commonStyles = {
    padding: "10px",
    margin: "20px 0",
    fontWeight: "bold",
    backgroundColor: "#D3D3D3",
  };

  const conditionalStyles =
    type === "success"
      ? {
          border: "2px solid green",
          color: "green",
        }
      : {
          border: "2px solid red",
          color: "red",
        };

  const styles = {
    ...commonStyles,
    ...conditionalStyles,
  };

  return <div style={styles}>{message}</div>;
};
