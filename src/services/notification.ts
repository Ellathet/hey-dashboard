import { getApiInstance } from "./api";

export interface INotificationResponseData {
  id: string;
  title: string;
  text: string;
  sentAt?: string;
  createdAt: string;
}

const getNotifications = async (): Promise<INotificationResponseData[]> => {
  const apiService = getApiInstance();
  const { data: foundNotifications } = await apiService.get<
    INotificationResponseData[]
  >("/notification");
  return foundNotifications;
};

const sendNotification = async (
  data: Omit<INotificationResponseData, "id" | "createdAt">
): Promise<void> => {
  const apiService = getApiInstance();
  await apiService.post("/notification", data);
};

export const NotificationServices = {
  getNotifications,
  sendNotification,
};
