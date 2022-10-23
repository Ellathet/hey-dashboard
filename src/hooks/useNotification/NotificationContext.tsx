import React, { createContext, ReactNode, useMemo, useState } from "react";

import {
  INotificationResponseData,
  NotificationServices,
} from "../../services/notification";

interface INotificationContextProps {
  getNotifications: () => Promise<void>;
  sendNotification: (
    // eslint-disable-next-line no-unused-vars
    data: Omit<INotificationResponseData, "id" | "createdAt">
  ) => Promise<void>;
  notifications: INotificationResponseData[] | undefined;
  loading: boolean;
}

export const NotificationContext = createContext<INotificationContextProps>(
  {} as INotificationContextProps
);

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<
    INotificationResponseData[] | undefined
  >(undefined);

  const [notificationLoading, setNotificationLoading] =
    useState<boolean>(false);

  async function getNotifications(): Promise<void> {
    setNotificationLoading(true);
    const foundNotifications = await NotificationServices.getNotifications();

    setNotifications(foundNotifications);
    setNotificationLoading(false);
  }

  async function sendNotification(
    data: Omit<INotificationResponseData, "id" | "createdAt">
  ): Promise<void> {
    setNotificationLoading(true);
    await NotificationServices.sendNotification(data);
    await getNotifications();
    setNotificationLoading(false);
  }

  const contextProps = useMemo(
    () => ({
      notifications,
      getNotifications,
      sendNotification,
      loading: notificationLoading,
    }),
    [notifications]
  );

  return (
    <NotificationContext.Provider value={contextProps}>
      {children}
    </NotificationContext.Provider>
  );
};
