const Notification = ({ notification }) => {
  if (notification === null) return null;
  return (
    <div>
      <p style={{ color: "red" }}>{notification}</p>
    </div>
  );
};

export default Notification;
