import { useContext } from "react";

import { NotificationContext } from "./NotificationContext";

export function useNotification() {
  const notification = useContext(NotificationContext);
  return notification;
}
