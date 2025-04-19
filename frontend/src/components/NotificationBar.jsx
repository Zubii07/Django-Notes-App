import React from "react";
import "../styles/NotificationBar.css";

export default function NotificationBar({ message, type, onClose }) {
  if (!message) return null;

  return (
    <div className={`notification-bar ${type}`}>
      <span>{message}</span>
      <button className="close-btn" onClick={onClose}>×</button>
    </div>
  );
}
